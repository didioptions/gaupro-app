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
import { Wallet, Plus, Minus, RotateCcw, Gift, Loader2, ArrowRight } from 'lucide-react';

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

  const currentBalance = professional.creditBalance || 0;
  const numAmount = parseInt(amount) || 0;
  const finalAdjustment = (type === 'deduction') ? -numAmount : numAmount;
  const predictedBalance = Math.max(0, currentBalance + finalAdjustment);

  const handleAdjustment = async () => {
    if (!adminUser || !amount || !reason) return;
    
    if (numAmount <= 0) {
        toast({ variant: 'destructive', title: 'Invalid Amount', description: 'Please enter a positive number.' });
        return;
    }

    setIsProcessing(true);

    try {
      const proRef = doc(db, 'professionalProfiles', professional.id);
      const notificationRef = collection(db, 'users', professional.userId, 'notifications');
      
      await runTransaction(db, async (transaction) => {
        const proDoc = await transaction.get(proRef);
        if (!proDoc.exists()) throw new Error("Professional profile not found.");

        const balanceBefore = proDoc.data().creditBalance || 0;
        const balanceAfter = balanceBefore + finalAdjustment;

        if (balanceAfter < 0) throw new Error("Insufficient balance for this deduction.");

        // 1. Update Profile Balance
        transaction.update(proRef, { 
            creditBalance: balanceAfter,
            updatedAt: serverTimestamp() 
        });

        // 2. Create Transaction Record (Enriched for Admin visibility)
        const txRef = doc(collection(db, 'transactions'));
        transaction.set(txRef, {
            proUid: professional.userId,
            proName: professional.name,
            adminUid: adminUser.uid,
            adminEmail: adminUser.email,
            type: `admin_${type}`,
            amount: finalAdjustment,
            previousBalance: balanceBefore,
            newBalance: balanceAfter,
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

        // 4. Create Atomic Audit Log Entry
        const logRef = doc(collection(db, 'admin_logs'));
        transaction.set(logRef, {
            adminUid: adminUser.uid,
            adminEmail: adminUser.email,
            action: 'MANUAL_CREDIT_ADJUST',
            targetId: professional.userId,
            metadata: {
                proName: professional.name,
                type,
                adjustment: finalAdjustment,
                balanceBefore,
                balanceAfter,
                reason
            },
            timestamp: serverTimestamp(),
            path: '/pro/admin/credits',
        });
      });

      toast({ title: 'Success', description: `Balance updated for ${professional.name}.` });
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
          <div className="grid grid-cols-3 gap-4">
              <div className="p-3 bg-secondary/50 rounded-lg text-center">
                  <p className="text-[10px] uppercase font-bold text-muted-foreground">Current</p>
                  <p className="text-xl font-bold">{currentBalance}</p>
              </div>
              <div className="flex items-center justify-center">
                  <ArrowRight className="text-muted-foreground" />
              </div>
              <div className="p-3 bg-primary/5 border border-primary/20 rounded-lg text-center">
                  <p className="text-[10px] uppercase font-bold text-primary">New Balance</p>
                  <p className="text-xl font-bold text-primary">{predictedBalance}</p>
              </div>
          </div>

          <div className="space-y-2">
            <Label>Adjustment Type</Label>
            <Select value={type} onValueChange={(v: any) => setType(v)}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="grant">Add Credits (Grant)</SelectItem>
                <SelectItem value="promo">Promotional Bonus</SelectItem>
                <SelectItem value="refund">Manual Refund</SelectItem>
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
                min="1"
            />
          </div>

          <div className="space-y-2">
            <Label>Reason / Audit Note</Label>
            <Textarea 
                placeholder="Explain the reason for this manual adjustment..." 
                value={reason}
                onChange={(e) => setReason(e.target.value)}
            />
          </div>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={() => setIsOpen(false)}>Cancel</Button>
          <Button 
            onClick={handleAdjustment} 
            disabled={isProcessing || !reason || numAmount <= 0}
            className={type === 'deduction' ? 'bg-red-600 hover:bg-red-700' : 'bg-green-600 hover:bg-green-700'}
          >
            {isProcessing ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : getIcon()}
            Apply {numAmount} Credits
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
