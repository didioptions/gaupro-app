'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Separator } from '@/components/ui/separator';
import { Upload, ShieldCheck, BadgeCheck } from 'lucide-react';
import { useAuth } from '@/firebase';
import { useUser } from '@/firebase';
import { getStorage, ref, uploadBytes } from 'firebase/storage';
import { getFirestore, doc, setDoc } from 'firebase/firestore';
import { useToast } from '@/hooks/use-toast';
import { useRouter } from 'next/navigation';

const FileInput = ({
  id,
  label,
  onFileChange,
}: {
  id: string;
  label: string;
  onFileChange: (file: File | null) => void;
}) => (
  <div className="flex-1">
    <Label
      htmlFor={id}
      className="block text-sm font-medium text-muted-foreground mb-2"
    >
      {label}
    </Label>
    <div className="flex items-center justify-center w-full">
      <Label
        htmlFor={id}
        className="flex flex-col items-center justify-center w-full h-24 border-2 border-dashed rounded-lg cursor-pointer bg-secondary/50 hover:bg-secondary/80"
      >
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
          <Upload className="w-6 h-6 mb-2 text-muted-foreground" />
          <p className="text-xs text-muted-foreground">Click to upload</p>
        </div>
        <Input
          id={id}
          type="file"
          className="hidden"
          accept="image/png, image/jpeg"
          onChange={(e) => onFileChange(e.target.files ? e.target.files[0] : null)}
        />
      </Label>
    </div>
  </div>
);

export default function VerificationPage() {
  const [docType, setDocType] = useState('id-document');
  const [docFile, setDocFile] = useState<File | null>(null);
  const [selfieFile, setSelfieFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const auth = useAuth();
  const { user } = useUser();
  const { toast } = useToast();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user || !docFile || !selfieFile) {
      toast({
        variant: 'destructive',
        title: 'Missing Information',
        description: 'Please select a document type and upload both required files.',
      });
      return;
    }

    setIsSubmitting(true);
    const storage = getStorage();
    const firestore = getFirestore();

    try {
      // 1. Upload files to Storage
      const docExtension = docFile.name.split('.').pop();
      const selfieExtension = selfieFile.name.split('.').pop();

      const docPath = `verifications/${user.uid}/document.${docExtension}`;
      const selfiePath = `verifications/${user.uid}/selfie.${selfieExtension}`;

      const docRef = ref(storage, docPath);
      const selfieRef = ref(storage, selfiePath);

      await uploadBytes(docRef, docFile);
      await uploadBytes(selfieRef, selfieFile);
      
      // 2. Create metadata in Firestore
      const verificationRef = doc(firestore, 'verifications', user.uid);
      await setDoc(verificationRef, {
        userId: user.uid,
        status: 'pending',
        documentType: docType,
        document: {
          path: docPath,
          contentType: docFile.type,
          size: docFile.size,
        },
        selfie: {
          path: selfiePath,
          contentType: selfieFile.type,
          size: selfieFile.size,
        },
        submittedAt: new Date().toISOString(),
      });

      toast({
        title: 'Verification Submitted',
        description: 'Your documents have been uploaded and are pending review.',
      });
      
      router.push('/pro/dashboard');

    } catch (error: any) {
      console.error("Verification submission failed:", error);
      toast({
        variant: 'destructive',
        title: 'Upload Failed',
        description: error.message || 'Could not upload verification documents. Please try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="py-12 md:py-16 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Profile Verification</h1>
        <p className="text-muted-foreground mb-8">
          We need to verify your profile to maintain a trusted and safe marketplace for everyone.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <form onSubmit={handleSubmit}>
              <Card>
                <CardContent className="p-8 space-y-8">
                  <div className="space-y-2">
                    <Label>Select your document type</Label>
                    <RadioGroup
                      value={docType}
                      onValueChange={setDocType}
                      className="flex gap-4"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="id-document" id="id-document" />
                        <Label htmlFor="id-document" className="font-normal">
                          ID Document
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="passport" id="passport" />
                        <Label htmlFor="passport" className="font-normal">
                          Passport
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>
                  <div className="flex flex-col md:flex-row gap-4">
                    <FileInput id="document-upload" label="Upload your document" onFileChange={setDocFile} />
                    <FileInput id="selfie-upload" label="Upload a selfie" onFileChange={setSelfieFile} />
                  </div>
                  <div className="text-xs text-muted-foreground">
                    <p>
                      Make sure the document is clear and all details are visible. For the selfie, please ensure your face is well-lit and not obscured.
                    </p>
                  </div>
                </CardContent>
              </Card>
              <div className="mt-6 flex justify-end">
                 <Button type="submit" size="lg" disabled={isSubmitting}>
                   {isSubmitting ? 'Submitting...' : 'Submit for Verification'}
                 </Button>
              </div>
            </form>
          </div>

          <aside className="space-y-6">
            <h3 className="font-semibold text-xl">Frequently asked questions</h3>
            <div className="space-y-4 text-sm">
                <div>
                    <h4 className="font-semibold">Why do you need to verify your profile?</h4>
                    <p className="text-muted-foreground">Customers can now see your verification status on your public profile page and on the emails that we send them when you purchase their job request.</p>
                    <p className="text-muted-foreground mt-2">We are making it mandatory for all Pros to verify their status to build a trusted marketplace. We want your next customer to hire your services with confidence and trust.</p>
                </div>
                <div>
                    <h4 className="font-semibold">How is this badge displayed to customers?</h4>
                    <p className="text-muted-foreground">The "Pro Verified" badge will appear as a checkmark next to your company name. It will also appear in emails that are sent to your customers.</p>
                </div>
                <Card className="bg-secondary/50">
                    <CardHeader>
                      <CardTitle className="text-base">Accsum Accounting Services</CardTitle>
                      <CardDescription>Accountants and tax consultants</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="flex items-center gap-6">
                            <div className="flex items-center gap-2 text-green-600">
                                <ShieldCheck className="h-5 w-5" />
                                <span className="font-semibold">Pro Verified</span>
                            </div>
                             <div className="flex items-center gap-2 text-green-600">
                                <BadgeCheck className="h-5 w-5" />
                                <span className="font-semibold">Background Checked</span>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
