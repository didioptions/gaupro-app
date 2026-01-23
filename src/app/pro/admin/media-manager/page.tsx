'use client';
export const dynamic = "force-dynamic";

import React, { useState, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileUpload } from '@/components/ui/file-upload';
import { useUser } from '@/firebase';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Copy } from 'lucide-react';
import Image from 'next/image';
import { Input } from '@/components/ui/input';

interface UploadedFile {
  name: string;
  url: string;
}

export default function MediaManagerPage() {
  const [filesToUpload, setFilesToUpload] = useState<File[]>([]);
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);
  const [isUploading, setIsUploading] = useState(false);
  const { user } = useUser();
  const { toast } = useToast();

  const handleUpload = async () => {
    if (!user) {
      toast({
        variant: 'destructive',
        title: 'Authentication Error',
        description: 'You must be logged in to upload files.',
      });
      return;
    }
    if (filesToUpload.length === 0) {
      toast({
        variant: 'destructive',
        title: 'No Files Selected',
        description: 'Please select files to upload first.',
      });
      return;
    }

    setIsUploading(true);
    const storage = getStorage();
    const newUploadedFiles: UploadedFile[] = [];

    for (const file of filesToUpload) {
      // Create a storage reference with a path like 'uploads/filename.jpg'
      const storageRef = ref(storage, `uploads/${file.name}`);
      try {
        const snapshot = await uploadBytes(storageRef, file);
        const downloadURL = await getDownloadURL(snapshot.ref);
        newUploadedFiles.push({ name: file.name, url: downloadURL });
      } catch (error) {
        console.error('Upload failed for file:', file.name, error);
        toast({
          variant: 'destructive',
          title: `Upload Failed for ${file.name}`,
          description: 'There was an error uploading this file. Please try again.',
        });
      }
    }

    setUploadedFiles((prev) => [...newUploadedFiles, ...prev]);
    setFilesToUpload([]); // Clear the selection
    setIsUploading(false);

    if (newUploadedFiles.length > 0) {
      toast({
        title: 'Upload Complete',
        description: `${newUploadedFiles.length} file(s) have been successfully uploaded.`,
      });
    }
  };

  const copyToClipboard = (url: string) => {
    navigator.clipboard.writeText(url);
    toast({
      title: 'Copied to Clipboard!',
      description: 'The image URL has been copied.',
    });
  };

  return (
    <div className="py-12 md:py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">Admin Media Manager</h1>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Upload New Media</CardTitle>
          </CardHeader>
          <CardContent>
            <FileUpload multiple onFilesChange={setFilesToUpload} />
            <Button onClick={handleUpload} disabled={isUploading || filesToUpload.length === 0} className="mt-4 w-full">
              {isUploading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Uploading...
                </>
              ) : `Upload ${filesToUpload.length} File(s)`}
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Uploaded Files</CardTitle>
          </CardHeader>
          <CardContent>
            {uploadedFiles.length === 0 ? (
              <p className="text-muted-foreground text-center py-8">
                No files uploaded yet. Use the uploader above to add media.
              </p>
            ) : (
              <div className="space-y-4">
                {uploadedFiles.map((file) => (
                  <div key={file.url} className="flex items-center gap-4 p-2 border rounded-md">
                    <Image
                      src={file.url}
                      alt={file.name}
                      width={64}
                      height={64}
                      className="object-cover rounded-md h-16 w-16"
                    />
                    <div className="flex-grow space-y-1">
                      <p className="text-sm font-medium truncate">{file.name}</p>
                      <div className="flex items-center gap-2">
                        <Input
                          readOnly
                          value={file.url}
                          className="text-xs h-8 bg-secondary"
                        />
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => copyToClipboard(file.url)}
                          className="h-8 w-8 flex-shrink-0"
                        >
                          <Copy className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
