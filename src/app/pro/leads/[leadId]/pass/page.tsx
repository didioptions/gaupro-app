
'use client';

import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { useUser, useFirestore } from '@/firebase';
import { doc, addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle2, Loader2, ArrowLeft } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

/**
 * Route to "Pass" on a lead. 
 * Logs the preference to refine future matching.
 */
export default function PassLeadPage() {
  const params = useParams();
  const router = useRouter();
  const { user, isUserLoading } = useUser();
  const firestore = useFirestore();
  const { toast } = useToast();
  
  const leadId = typeof params.leadId === 'string' ? params.leadId : '';
  const [isProcessing, setIsProcessing] = useState(false);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    if (user && firestore && leadId && !isDone && !isProcessing) {
      handlePass();
    }
  }, [user, firestore, leadId]);

  const handlePass = async () => {
    if (!user || !firestore || !leadId) return;
    setIsProcessing(true);

    try {
      // Log the pass action for ML/filtering improvement
      await addDoc(collection(firestore, 'marketplace_audit_logs'), {
        action: 'LEAD_PASS',
        proUid: user.uid,
        targetId: leadId,
        timestamp: serverTimestamp()
      });

      setIsDone(true);
      toast({ title: 'Lead Passed', description: "We won't remind you about this lead again." });
    } catch (e) {
      console.error("Failed to log pass:", e);
    } finally {
      setIsProcessing(false);
    }
  };

  if (isUserLoading || isProcessing) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-secondary/30">
        <Loader2 className="h-10 w-10 animate-spin text-primary mb-4" />
        <p className="text-muted-foreground font-medium">Recording your preference...</p>
      </div>
    );
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-secondary/30 p-4">
      <Card className="max-w-md w-full text-center shadow-lg">
        <CardHeader>
           <div className="flex justify-center mb-4">
             <div className="p-3 bg-green-50 rounded-full">
                <CheckCircle2 className="h-12 w-12 text-green-600" />
             </div>
           </div>
           <CardTitle>Preference Saved</CardTitle>
           <CardDescription>
             You've passed on lead <strong>#{leadId.substring(0,6)}</strong>. No credits were used.
           </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
           <p className="text-sm text-muted-foreground">
             Passing on leads helps us better understand what kind of work you're looking for.
           </p>
           <Button onClick={() => router.push('/browse-quotes')} className="w-full">
             Browse Other Leads
           </Button>
           <Button variant="ghost" onClick={() => router.push('/pro/dashboard')} className="w-full">
             <ArrowLeft className="h-4 w-4 mr-2" /> Back to Dashboard
           </Button>
        </CardContent>
      </Card>
    </main>
  );
}
