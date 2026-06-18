
'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle2, ShieldCheck, Mail, Phone, FileText, Loader2, ArrowLeft, BadgeCheck } from 'lucide-react';
import { useDoc, useFirestore } from '@/firebase';
import { doc, DocumentData } from 'firebase/firestore';
import Link from 'next/link';
import { Skeleton } from '@/components/ui/skeleton';

export default function ClaimBusinessPage() {
  const params = useParams();
  const router = useRouter();
  const firestore = useFirestore();
  const profileId = typeof params.profileId === 'string' ? params.profileId : '';

  const docRef = useMemo(() => {
    if (!firestore || !profileId) return null;
    return doc(firestore, 'professionalProfiles', profileId);
  }, [firestore, profileId]);

  const { data: business, isLoading } = useDoc<DocumentData>(docRef);

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-20 max-w-2xl">
        <Skeleton className="h-10 w-3/4 mb-4" />
        <Skeleton className="h-64 w-full" />
      </div>
    );
  }

  if (!business || !business.isUnclaimed) {
    return (
        <div className="container mx-auto px-4 py-20 text-center">
            <h1 className="text-2xl font-bold">This business has already been claimed or is unavailable.</h1>
            <Button onClick={() => router.push('/')} className="mt-6">Return Home</Button>
        </div>
    );
  }

  const steps = [
    { icon: <Mail className="h-5 w-5" />, title: "Domain Verification", desc: "Verify ownership via an email address matching the business website." },
    { icon: <Phone className="h-5 w-5" />, title: "Phone Verification", desc: "A verification code will be sent to the official business telephone number." },
    { icon: <FileText className="h-5 w-5" />, title: "CIPC Documentation", desc: "Upload company registration documents showing active directors." }
  ];

  return (
    <main className="bg-secondary/30 min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-3xl">
        <Button variant="ghost" className="mb-6" onClick={() => router.back()}>
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Profile
        </Button>

        <header className="mb-10 text-center">
          <BadgeCheck className="h-16 w-16 text-primary mx-auto mb-4" />
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Claim Your Business Profile</h1>
          <p className="text-muted-foreground mt-3 text-lg">Verify your identity to take control of <strong>{business.name}</strong>.</p>
        </header>

        <div className="grid gap-8">
          <Card className="border-0 shadow-xl">
            <CardHeader className="bg-primary/5 border-b">
              <CardTitle>How the process works</CardTitle>
              <CardDescription>To maintain marketplace integrity, we require one of the following verification methods.</CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <div className="space-y-8">
                {steps.map((step, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      {step.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">{step.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 p-6 bg-blue-50 border border-blue-100 rounded-2xl flex gap-4">
                <ShieldCheck className="h-6 w-6 text-blue-600 shrink-0" />
                <div className="text-sm text-blue-900 font-medium leading-relaxed">
                  Once claimed, you will be able to update your contact details, respond to customer reviews, and see detailed lead analytics. <strong>This business will also receive a "Claimed & Verified" trust badge.</strong>
                </div>
              </div>
            </CardContent>
          </Card>

          <section className="text-center space-y-4">
             <Button asChild size="lg" className="w-full h-14 text-lg font-bold shadow-lg">
                <Link href="/pro/register">I'm the owner - Create my account</Link>
             </Button>
             <p className="text-sm text-muted-foreground italic">Already have an account? <Link href="/pro/login" className="text-primary font-bold hover:underline">Log in here</Link></p>
          </section>
        </div>
      </div>
    </main>
  );
}
