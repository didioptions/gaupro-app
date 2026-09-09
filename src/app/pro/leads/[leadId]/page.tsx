'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { useUser, useFirestore, useDoc } from '@/firebase';
import { doc, onSnapshot } from 'firebase/firestore';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Label } from '@/components/ui/label';
import { 
    Loader2, 
    ArrowLeft, 
    MapPin, 
    Calendar, 
    Clock, 
    DollarSign, 
    Lock,
    ShieldCheck,
    User
} from 'lucide-react';
import { QuoteDialog } from '@/components/pro/quote-dialog';

/**
 * Deep-link page for a specific lead. 
 * Allows professionals to view lead metadata and unlock details.
 */
export default function LeadDetailPage() {
  const params = useParams();
  const router = useRouter();
  const { user, isUserLoading } = useUser();
  const firestore = useFirestore();
  
  const leadId = typeof params.leadId === 'string' ? params.leadId : '';
  const [selectedJob, setSelectedJob] = useState<any>(null);
  const [creditBalance, setCreditBalance] = useState<number | null>(null);

  const leadRef = useMemo(() => {
    if (!firestore || !leadId) return null;
    return doc(firestore, 'leads_public', leadId);
  }, [firestore, leadId]);

  const { data: lead, isLoading: isLoadingLead } = useDoc(leadRef);

  useEffect(() => {
    if (!user || !firestore) return;
    const unsubscribe = onSnapshot(doc(firestore, 'professionalProfiles', user.uid), (docSnap) => {
      if (docSnap.exists()) {
        setCreditBalance(docSnap.data().creditBalance || 0);
      }
    });
    return () => unsubscribe();
  }, [user, firestore]);

  if (isUserLoading || isLoadingLead) {
    return (
      <div className="flex h-screen items-center justify-center">
        <Loader2 className="h-10 w-10 animate-spin text-primary" />
      </div>
    );
  }

  if (!lead) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-bold">Lead Not Found</h1>
        <p className="text-muted-foreground mt-2">This lead may have been closed or removed.</p>
        <Button onClick={() => router.push('/browse-quotes')} className="mt-6">Browse Other Leads</Button>
      </div>
    );
  }

  const isUnlocked = user && lead.purchasers?.includes(user.uid);
  const cost = lead.credits || 3;

  return (
    <main className="min-h-screen bg-secondary/30 py-12">
      <div className="container mx-auto px-4 max-w-3xl">
        <Button variant="ghost" onClick={() => router.push('/browse-quotes')} className="mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Marketplace
        </Button>

        <Card className="shadow-xl">
          <CardHeader className="border-b bg-white">
            <div className="flex justify-between items-start">
              <div>
                <Badge variant="secondary" className="mb-2 bg-blue-50 text-primary uppercase tracking-widest text-[10px] font-bold">
                  {lead.category}
                </Badge>
                <CardTitle className="text-2xl md:text-3xl font-bold">New Request for {lead.category}</CardTitle>
                <CardDescription className="flex items-center gap-2 mt-2">
                  <MapPin className="h-4 w-4" /> {lead.location}
                </CardDescription>
              </div>
              <div className="text-right">
                <p className="text-xs font-bold text-muted-foreground uppercase">Marketplace Status</p>
                <Badge className={lead.status === 'approved' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}>
                  {lead.status === 'approved' ? 'Open' : 'Pending Review'}
                </Badge>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-8 space-y-8">
            <div className="p-6 bg-secondary/20 rounded-xl border border-dashed">
              <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-4">Job Description</h3>
              <p className="text-lg leading-relaxed text-foreground/80">{lead.description}</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div>
                <Label className="text-[10px] uppercase font-black text-muted-foreground tracking-tighter">Timeline</Label>
                <p className="font-bold flex items-center gap-2 text-sm mt-1"><Clock className="h-4 w-4 text-primary" /> {lead.dateNeeded}</p>
              </div>
              <div>
                <Label className="text-[10px] uppercase font-black text-muted-foreground tracking-tighter">Budget</Label>
                <p className="font-bold flex items-center gap-2 text-sm mt-1"><DollarSign className="h-4 w-4 text-primary" /> {lead.budget || 'Quote Req.'}</p>
              </div>
              <div>
                <Label className="text-[10px] uppercase font-black text-muted-foreground tracking-tighter">Unlocks</Label>
                <p className="font-bold flex items-center gap-2 text-sm mt-1"><User className="h-4 w-4 text-primary" /> {lead.quoteCount || 0}/5</p>
              </div>
              <div>
                <Label className="text-[10px] uppercase font-black text-muted-foreground tracking-tighter">Verification</Label>
                <p className="font-bold flex items-center gap-2 text-sm mt-1 text-green-600"><ShieldCheck className="h-4 w-4" /> Real Job</p>
              </div>
            </div>

            <div className="pt-8 border-t flex flex-col items-center gap-6">
              {isUnlocked ? (
                <div className="text-center w-full">
                  <div className="bg-green-50 text-green-800 p-4 rounded-lg mb-6 border border-green-100">
                    You have already unlocked this lead.
                  </div>
                  <Button size="lg" className="w-full h-14 text-lg font-bold shadow-lg" onClick={() => setSelectedJob(lead)}>
                    View Customer Details
                  </Button>
                </div>
              ) : (
                <div className="text-center w-full space-y-6">
                  <div className="p-6 bg-amber-50 rounded-xl border border-amber-100 flex items-center gap-4">
                    <Lock className="h-10 w-10 text-amber-600 shrink-0" />
                    <div className="text-left">
                      <p className="font-bold text-amber-900">Customer Details are Locked</p>
                      <p className="text-sm text-amber-800">Unlocking this lead will cost <strong>{cost} Credits</strong>. Your current balance is <strong>{creditBalance ?? '...'} Credits</strong>.</p>
                    </div>
                  </div>
                  <Button size="lg" className="w-full h-16 text-xl font-bold shadow-xl bg-red-600 hover:bg-red-700" onClick={() => setSelectedJob(lead)}>
                    Unlock This Lead
                  </Button>
                  <p className="text-xs text-muted-foreground">Credits are only deducted when you confirm the unlock in the next step.</p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      <QuoteDialog
        job={selectedJob}
        isOpen={!!selectedJob}
        onClose={() => setSelectedJob(null)}
      />
    </main>
  );
}