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
import { Input } from '@/components/ui/input';
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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Wallet, Plus, Minus, RotateCcw, Gift, Loader2 } from 'lucide-react';

interface CreditAdjustmentDialogProps {
  professional: any;
  children: React.ReactNode;
}

export function CreditAdjustmentDialog({ professional, children }: CreditAdjustmentDialogProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [amount, setAmount] = useState('10');
  const [type, setType] = useState<'grant' | 'deduction' | 'refund' | 'promo'>('grant');
  const [reason, setReason] = useState('');
  
  const { user: adminUser } = useUser();
  const { toast } = useToast();
  const db = getFirestore();

  const handleAdjustment = async () => {
    if (!adminUser || !amount || !reason) return;
    
    const numAmount = parseInt(amount);
    if (isNaN(numAmount) || numAmount <= 0) {
        toast({ variant: 'destructive', title: 'Invalid Amount', description: 'Please enter a positive number.' });
        return;
    }

    setIsProcessing(true);

    try {
      const proRef = doc(db, 'professionalProfiles', professional.id);
      const notificationRef = collection(db, 'users', professional.userId, 'notifications');
      
      const finalAdjustment = (type === 'deduction') ? -numAmount : numAmount;

      await runTransaction(db, async (transaction) => {
        const proDoc = await transaction.get(proRef);
        if (!proDoc.exists()) throw new Error("Professional profile not found.");

        const currentBalance = proDoc.data().creditBalance || 0;
        const newBalance = currentBalance + finalAdjustment;

        if (newBalance < 0) throw new Error("Insufficient balance for this deduction.");

        // 1. Update Profile Balance
        transaction.update(proRef, { creditBalance: newBalance });

        // 2. Create Transaction Record
        const txRef = doc(collection(db, 'transactions'));
        transaction.set(txRef, {
            proUid: professional.userId,
            adminUid: adminUser.uid,
            type,
            amount: finalAdjustment,
            reason,
            timestamp: new Date().toISOString()
        });

        // 3. Create Notification for the Professional
        const notifRef = doc(notificationRef);
        transaction.set(notifRef, {
            title: 'Account Credits Adjusted',
            message: `Your credit balance has been ${type === 'deduction' ? 'decreased' : 'increased'} by ${numAmount} credits. Reason: ${reason}`,
            type: 'credit',
            status: 'unread',
            createdAt: serverTimestamp()
        });

        // 4. Create Atomic Audit Log Entry (Harden Security)
        const logRef = doc(collection(db, 'admin_logs'));
        transaction.set(logRef, {
            adminUid: adminUser.uid,
            adminEmail: adminUser.email,
            action: 'ADJUST_CREDITS',
            metadata: {
                proUid: professional.userId,
                type,
                amount: finalAdjustment,
                reason
            },
            timestamp: serverTimestamp(),
            path: window.location.pathname,
        });
      });

      toast({ title: 'Success', description: `Balance adjusted by ${finalAdjustment} credits.` });
      setIsOpen(false);
      setReason('');
    } catch (error: any) {
      toast({ variant: 'destructive', title: 'Adjustment Failed', description: error.message });
    } finally {
      setIsProcessing(false);
    }
  };

  const getIcon = () => {
      switch(type) {
          case 'grant': return <Plus className="h-4 w-4" />;
          case 'deduction': return <Minus className="h-4 w-4" />;
          case 'refund': return <RotateCcw className="h-4 w-4" />;
          case 'promo': return <Gift className="h-4 w-4" />;
      }
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
              <Wallet className="h-5 w-5 text-primary" />
              Adjust Credits: {professional.name}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6 py-4">
          <div className="p-4 bg-secondary/30 rounded-lg flex justify-between items-center">
              <p className="text-sm font-medium">Current Balance</p>
              <p className="text-2xl font-bold text-primary">{professional.creditBalance || 0}</p>
          </div>

          <div className="space-y-2">
            <Label>Adjustment Type</Label>
            <Select value={type} onValueChange={(v: any) => setType(v)}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="grant">Add Credits (Grant)</SelectItem>
                <SelectItem value="promo">Promotional Credits</SelectItem>
                <SelectItem value="refund">Refund Credits</SelectItem>
                <SelectItem value="deduction">Deduct Credits (Correction)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Amount (Credits)</Label>
            <Input 
                type="number" 
                value={amount} 
                onChange={(e) => setAmount(e.target.value)}
                placeholder="e.g. 10"
            />
          </div>

          <div className="space-y-2">
            <Label>Reason for adjustment</Label>
            <Textarea 
                placeholder="e.g. Refund for invalid lead #1234" 
                value={reason}
                onChange={(e) => setReason(e.target.value)}
            />
          </div>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={() => setIsOpen(false)}>Cancel</Button>
          <Button 
            onClick={handleAdjustment} 
            disabled={isProcessing || !reason || !amount}
            className={type === 'deduction' ? 'bg-red-600 hover:bg-red-700' : 'bg-green-600 hover:bg-green-700'}
          >
            {isProcessing ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : getIcon()}
            Confirm {type.charAt(0).toUpperCase() + type.slice(1)}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}