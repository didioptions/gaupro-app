'use client';

import React, { useState } from 'react';
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
  runTransaction, 
  collection, 
  serverTimestamp
} from 'firebase/firestore';
import { useUser } from '@/firebase';
import { useToast } from '@/hooks/use-toast';
import { 
  MessageSquare, 
  CheckCircle2, 
  XCircle, 
  AlertTriangle, 
  Loader2, 
  User, 
  Star
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface ReviewModerationDialogProps {
  review: any;
  children: React.ReactNode;
}

export function ReviewModerationDialog({ review, children }: ReviewModerationDialogProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [reason, setReason] = useState('');
  
  const { user: adminUser } = useUser();
  const { toast } = useToast();
  const db = getFirestore();

  const handleModeration = async (action: 'approved' | 'rejected' | 'flagged' | 'removed') => {
    if (!adminUser || !reason) {
      toast({ variant: 'destructive', title: 'Action Required', description: 'Please provide a reason for this action.' });
      return;
    }

    setIsProcessing(true);

    try {
      const reviewRef = doc(db, 'professionalProfiles', review.proUid, 'reviews', review.id);
      const proRef = doc(db, 'professionalProfiles', review.proUid);
      const notificationRef = collection(db, 'users', review.proUid, 'notifications');
      const actionLogRef = doc(collection(db, 'review_actions'));

      await runTransaction(db, async (transaction) => {
        const reviewDoc = await transaction.get(reviewRef);
        const proDoc = await transaction.get(proRef);

        if (!reviewDoc.exists()) throw new Error("Review not found.");
        if (!proDoc.exists()) throw new Error("Professional profile not found.");

        const oldStatus = reviewDoc.data().status;
        const currentReviews = proDoc.data().reviews || 0;
        const currentTotal = proDoc.data().totalReviews || 0;

        // 1. Update Review Status
        transaction.update(reviewRef, { 
            status: action,
            moderatedBy: adminUser.uid,
            moderatedAt: new Date().toISOString(),
            moderationReason: reason
        });

        // 2. Update Professional Aggregate Stats
        if (action === 'approved' && oldStatus !== 'approved') {
            const newReviews = currentReviews + 1;
            const newTotal = currentTotal + review.rating;
            transaction.update(proRef, { 
                reviews: newReviews,
                totalReviews: newTotal,
                rating: newTotal / newReviews
            });
        } else if (action === 'removed' && oldStatus === 'approved') {
            const newReviews = Math.max(0, currentReviews - 1);
            const newTotal = Math.max(0, currentTotal - review.rating);
            transaction.update(proRef, { 
                reviews: newReviews,
                totalReviews: newTotal,
                rating: newReviews > 0 ? newTotal / newReviews : 0
            });
        } else if (action === 'rejected' && oldStatus === 'approved') {
            // Reversing an approval
            const newReviews = Math.max(0, currentReviews - 1);
            const newTotal = Math.max(0, currentTotal - review.rating);
            transaction.update(proRef, { 
                reviews: newReviews,
                totalReviews: newTotal,
                rating: newReviews > 0 ? newTotal / newReviews : 0
            });
        }

        // 3. Create Audit Trail
        transaction.set(actionLogRef, {
            reviewId: review.id,
            proUid: review.proUid,
            adminUid: adminUser.uid,
            action,
            reason,
            timestamp: serverTimestamp()
        });

        // 4. Create Professional Notification
        const notifRef = doc(notificationRef);
        transaction.set(notifRef, {
            title: action === 'approved' ? 'New Review Published' : 'Review Moderated',
            message: `A review for your business has been ${action}. Reason: ${reason}`,
            type: 'review',
            status: 'unread',
            createdAt: serverTimestamp()
        });
      });

      toast({ title: 'Success', description: `Review has been ${action}.` });
      setIsOpen(false);
      setReason('');
    } catch (error: any) {
      console.error("Moderation failed:", error);
      toast({ variant: 'destructive', title: 'Moderation Failed', description: error.message });
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
              <MessageSquare className="h-5 w-5 text-primary" />
              Review Moderation: {review.author}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6 py-4">
           <div className="p-4 bg-secondary/30 rounded-lg border">
              <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4 text-muted-foreground" />
                    <span className="font-bold text-sm">{review.author}</span>
                  </div>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`h-4 w-4 ${i < review.rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}`} />
                    ))}
                  </div>
              </div>
              <p className="italic text-foreground text-sm">"{review.comment}"</p>
              <div className="mt-4 flex flex-wrap gap-2">
                 <Badge variant="outline" className="text-[10px]">PRO ID: {review.proUid.substring(0,8)}...</Badge>
                 {review.fraudScore > 50 && (
                    <Badge variant="destructive" className="text-[10px] animate-pulse">HIGH RISK: {review.fraudScore}%</Badge>
                 )}
              </div>
           </div>

          <div className="space-y-2">
            <Label>Action Reason (Mandatory)</Label>
            <Textarea 
                placeholder="Explain why you are taking this action. This will be shared with the professional." 
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                rows={4}
            />
          </div>
        </div>

        <DialogFooter className="flex flex-col sm:flex-row gap-2">
           <div className="flex flex-1 gap-2">
              <Button 
                variant="outline" 
                className="flex-1"
                onClick={() => handleModeration('flagged')}
                disabled={isProcessing}
              >
                <AlertTriangle className="mr-2 h-4 w-4" /> Flag
              </Button>
              <Button 
                variant="destructive" 
                className="flex-1"
                onClick={() => handleModeration('rejected')}
                disabled={isProcessing}
              >
                <XCircle className="mr-2 h-4 w-4" /> Reject
              </Button>
           </div>
           <Button 
            onClick={() => handleModeration('approved')} 
            disabled={isProcessing || !reason}
            className="bg-green-600 hover:bg-green-700 flex-1 sm:flex-none sm:min-w-[140px]"
          >
            {isProcessing ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <CheckCircle2 className="mr-2 h-4 w-4" />}
            Approve
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}