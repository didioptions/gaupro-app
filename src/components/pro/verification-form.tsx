'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Upload } from 'lucide-react';

export default function VerificationForm() {
  const FileInput = ({ id, label }: { id: string, label: string }) => (
    <div className="flex-1">
      <Label htmlFor={id} className="block text-sm font-medium text-muted-foreground mb-2">{label}</Label>
      <div className="flex items-center justify-center w-full">
        <Label htmlFor={id} className="flex flex-col items-center justify-center w-full h-24 border-2 border-dashed rounded-lg cursor-pointer bg-secondary/50 hover:bg-secondary/80">
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <Upload className="w-6 h-6 mb-2 text-muted-foreground" />
            <p className="text-xs text-muted-foreground">Click to upload</p>
          </div>
          <Input id={id} type="file" className="hidden" />
        </Label>
      </div>
    </div>
  );

  return (
    <>
      <DialogHeader>
        <DialogTitle className="text-2xl">Profile Verification</DialogTitle>
        <DialogDescription>
          We need to verify your profile to maintain a trusted and safe marketplace for everyone.
        </DialogDescription>
      </DialogHeader>
      <Card className="border-0 shadow-none">
        <CardContent className="p-0 space-y-6">
          <div className="space-y-2">
            <Label>Select your document type</Label>
            <RadioGroup defaultValue="id-document" className="flex gap-4">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="id-document" id="id-document" />
                <Label htmlFor="id-document" className="font-normal">ID Document</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="passport" id="passport" />
                <Label htmlFor="passport" className="font-normal">Passport</Label>
              </div>
            </RadioGroup>
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            <FileInput id="document-upload" label="Upload your document" />
            <FileInput id="selfie-upload" label="Upload a selfie" />
          </div>
          <div className="text-xs text-muted-foreground">
            <p>Make sure the document is clear and all details are visible. For the selfie, please ensure your face is well-lit and not obscured.</p>
          </div>
        </CardContent>
      </Card>
      <DialogFooter>
        <Button type="submit" className="w-full">Submit for Verification</Button>
      </DialogFooter>
    </>
  );
}
