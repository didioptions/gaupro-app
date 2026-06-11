'use client';

import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { 
  getFirestore, 
  doc, 
  updateDoc, 
  addDoc, 
  collection, 
  serverTimestamp,
  getDoc 
} from 'firebase/firestore';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';
import { useUser } from '@/firebase';
import { useToast } from '@/hooks/use-toast';
import { logAdminAction } from '@/firebase/admin-logs';
import { Skeleton } from '@/components/ui/skeleton';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface VerificationDetailsDialogProps {
  verification: any;
  children: React.ReactNode;
}

export function VerificationDetailsDialog({ verification, children }: VerificationDetailsDialogProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [docUrl, setDocUrl] = useState<string | null>(null);
  const [selfieUrl, setSelfieUrl] = useState<string | null>(null);
  const [proProfile, setProProfile] = useState<any>(null);
  const [rejectionReason, setRejectionReason] = useState('');
  const [adminNotes, setAdminNotes] = useState('');
  
  const { user: adminUser } = useUser();
  const { toast } = useToast();
  const db = getFirestore();
  const storage = getStorage();

  useEffect(() => {
    if (isOpen) {
      const fetchData = async () => {
        try {
          // Fetch URLs
          const docRef = ref(storage, verification.document.path);
          const selfieRef = ref(storage, verification.selfie.path);
          const [dUrl, sUrl] = await Promise.all([
            getDownloadURL(docRef),
            getDownloadURL(selfieRef)
          ]);
          setDocUrl(dUrl);
          setSelfieUrl(sUrl);

          // Fetch Pro Profile
          const profileSnap = await getDoc(doc(db, 'professionalProfiles', verification.userId));
          if (profileSnap.exists()) {
            setProProfile(profileSnap.data());
          }
        } catch (error) {
          console.error("Error fetching verification assets:", error);
          toast({ variant: 'destructive', title: 'Error', description: 'Failed to load documents.' });
        }
      };
      fetchData();
    }
  }, [isOpen, verification, db, storage, toast]);

  const handleAction = async (status: 'approved' | 'rejected') => {
    if (!adminUser) return;
    setIsProcessing(true);

    try {
      const verRef = doc(db, 'verifications', verification.id);
      const proRef = doc(db, 'professionalProfiles', verification.userId);
      const notificationRef = collection(db, 'users', verification.userId, 'notifications');

      const timestamp = new Date().toISOString();

      // 1. Update Verification Record
      await updateDoc(verRef, {
        status,
        reviewedBy: adminUser.uid,
        reviewedAt: timestamp,
        rejectionReason: status === 'rejected' ? rejectionReason : null,
        adminNotes: adminNotes || null
      });

      // 2. Update Pro Profile
      await updateDoc(proRef, {
        isProVerified: status === 'approved',
        verificationStatus: status,
        verifiedAt: status === 'approved' ? timestamp : null,
        verifiedBy: status === 'approved' ? adminUser.uid : null
      });

      // 3. Send Notification
      await addDoc(notificationRef, {
        title: status === 'approved' ? 'Account Verified' : 'Verification Rejected',
        message: status === 'approved' 
          ? 'Congratulations, your GauPro profile has been verified.' 
          : `Your verification requires additional information: ${rejectionReason}`,
        type: 'verification',
        status: 'unread',
        createdAt: serverTimestamp()
      });

      // 4. Audit Log
      await logAdminAction(status === 'approved' ? 'APPROVE_VERIFICATION' : 'REJECT_VERIFICATION', {
        proUid: verification.userId,
        reason: status === 'rejected' ? rejectionReason : null
      });

      toast({ title: 'Success', description: `Request ${status} successfully.` });
      setIsOpen(false);
    } catch (error: any) {
      toast({ variant: 'destructive', title: 'Action Failed', description: error.message });
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">Review Verification Request</DialogTitle>
        </DialogHeader>

        <div className="grid md:grid-cols-2 gap-8 py-6">
          {/* Document Section */}
          <div className="space-y-6">
            <div>
              <Label className="text-sm font-bold uppercase tracking-wider text-muted-foreground">ID Document</Label>
              <div className="mt-2 relative aspect-[3/2] border rounded-lg overflow-hidden bg-secondary">
                {docUrl ? (
                  <Image src={docUrl} alt="ID Document" fill className="object-contain" unoptimized />
                ) : (
                  <Skeleton className="h-full w-full" />
                )}
              </div>
              <p className="text-xs text-muted-foreground mt-1 capitalize">Type: {verification.documentType.replace(/-/g, ' ')}</p>
            </div>

            <div>
              <Label className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Selfie Photo</Label>
              <div className="mt-2 relative aspect-[3/2] border rounded-lg overflow-hidden bg-secondary">
                {selfieUrl ? (
                  <Image src={selfieUrl} alt="Selfie" fill className="object-contain" unoptimized />
                ) : (
                  <Skeleton className="h-full w-full" />
                )}
              </div>
            </div>
          </div>

          {/* Profile Section */}
          <div className="space-y-6">
            <div className="p-4 bg-secondary/30 rounded-lg space-y-4">
              <h3 className="font-bold border-b pb-2">Business Profile</h3>
              {proProfile ? (
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground">Name</p>
                    <p className="font-medium">{proProfile.name}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Category</p>
                    <Badge variant="outline">{proProfile.serviceCategory}</Badge>
                  </div>
                  <div className="col-span-2">
                    <p className="text-muted-foreground">Email</p>
                    <p className="font-medium">{proProfile.email}</p>
                  </div>
                   <div>
                    <p className="text-muted-foreground">Phone</p>
                    <p className="font-medium">{proProfile.phone}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Location</p>
                    <p className="font-medium capitalize">{proProfile.location}</p>
                  </div>
                </div>
              ) : (
                <div className="space-y-2">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-3/4" />
                </div>
              )}
            </div>

            {verification.status === 'pending' && (
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>Rejection Reason (Required for rejection)</Label>
                  <Select onValueChange={setRejectionReason}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a reason..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Incomplete Documents">Incomplete Documents</SelectItem>
                      <SelectItem value="Blurry/Unreadable Image">Blurry/Unreadable Image</SelectItem>
                      <SelectItem value="Name Mismatch">Name Mismatch (Profile vs ID)</SelectItem>
                      <SelectItem value="Expired Document">Expired Document</SelectItem>
                      <SelectItem value="Suspicious Activity">Potential Fraud/Suspicious</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Internal Admin Notes (Optional)</Label>
                  <Textarea 
                    placeholder="Notes only visible to other admins..." 
                    value={adminNotes}
                    onChange={(e) => setAdminNotes(e.target.value)}
                  />
                </div>
              </div>
            )}

            {verification.status !== 'pending' && (
              <div className="p-4 border rounded-lg bg-background space-y-2">
                <p className="text-sm font-bold">Review History</p>
                <div className="text-xs space-y-1">
                  <p><span className="text-muted-foreground">Reviewed By:</span> {verification.reviewedBy}</p>
                  <p><span className="text-muted-foreground">Reviewed At:</span> {verification.reviewedAt ? new Date(verification.reviewedAt).toLocaleString() : 'N/A'}</p>
                  {verification.rejectionReason && (
                    <p><span className="text-red-600 font-bold">Reason:</span> {verification.rejectionReason}</p>
                  )}
                  {verification.adminNotes && (
                    <p><span className="text-muted-foreground italic">Notes:</span> {verification.adminNotes}</p>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

        <DialogFooter className="gap-2">
          {verification.status === 'pending' ? (
            <>
              <Button 
                variant="destructive" 
                disabled={isProcessing || !rejectionReason} 
                onClick={() => handleAction('rejected')}
              >
                Reject Request
              </Button>
              <Button 
                variant="default" 
                className="bg-green-600 hover:bg-green-700" 
                disabled={isProcessing} 
                onClick={() => handleAction('approved')}
              >
                Approve Professional
              </Button>
            </>
          ) : (
            <Button variant="outline" onClick={() => setIsOpen(false)}>Close Review</Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}