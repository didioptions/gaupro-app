'use client';

import React, { useState, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Search, MapPin, Calendar, DollarSign, Users, Clock, Lock, CreditCard, Briefcase } from 'lucide-react';
import Link from 'next/link';
import { useUser, useFirestore, useCollection, useMemoFirebase } from '@/firebase';
import { collection, query, orderBy, limit, where } from 'firebase/firestore';
import { useRouter } from 'next/navigation';
import { useToast } from '@/hooks/use-toast';
import { QuoteDialog } from '@/components/pro/quote-dialog';
import { Skeleton } from '@/components/ui/skeleton';

const MAX_QUOTES_ALLOWED = 5;

export default function BrowseQuotesPage() {
  const [creditBalance, setCreditBalance] = useState(25);
  const [selectedJob, setSelectedJob] = useState<any>(null);
  const { user, isUserLoading } = useUser();
  const firestore = useFirestore();
  const router = useRouter();
  const { toast } = useToast();

  const leadsQuery = useMemoFirebase(() => {
    if (!firestore || isUserLoading) return null;
    return query(
        collection(firestore, 'serviceRequests'),
        where('status', '==', 'approved'),
        orderBy('createdAt', 'desc'),
        limit(50)
    );
  }, [firestore, isUserLoading]);

  const { data: leads, loading, error } = useCollection(leadsQuery);

  const handleUnlockClick = (job: any) => {
    if (!user) {
      router.push('/pro/login');
      return;
    }
    const cost = job.credits || 3;
    if (creditBalance >= cost) {
      setCreditBalance(prevBalance => prevBalance - cost);
      setSelectedJob(job);
    } else {
      toast({
        variant: 'destructive',
        title: 'Insufficient Credits',
        description: 'You do not have enough credits to unlock this job. Please buy more credits.',
      });
    }
  };

  const getPostedTime = (createdAt: any) => {
    if (!createdAt) return 'Recently';
    const date = createdAt.seconds ? new Date(createdAt.seconds * 1000) : new Date(createdAt);
    const diffInHours = Math.floor((new Date().getTime() - date.getTime()) / (1000 * 60 * 60));
    if (diffInHours < 1) return 'Just now';
    if (diffInHours < 24) return `${diffInHours}h ago`;
    return `${Math.floor(diffInHours / 24)}d ago`;
  };

  return (
    <main className="flex-grow">
      <div className="bg-secondary/30">
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Latest Job Requests</h1>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Browse verified opportunities from real customers. Unlock leads to access contact details and send your quote.
              </p>
            </div>

            <div className="max-w-3xl mx-auto mb-8">
              {user && (
                <Card className="bg-card shadow-sm mb-8 border-l-4 border-l-primary">
                  <CardContent className="p-6 flex justify-between items-center">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-primary/10 rounded-full">
                        <CreditCard className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wider">Your Balance</h3>
                        <p className="text-3xl font-black text-primary">{creditBalance} Credits</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <Button asChild variant="outline" className="font-bold">
                        <Link href="/pro/buy-credits">Buy Credits</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}

              <form className="flex gap-2 bg-white p-2 rounded-xl shadow-sm border" onSubmit={(e) => e.preventDefault()}>
                <Input
                  type="search"
                  placeholder="Filter by category (e.g. Plumbing)..."
                  className="h-12 flex-grow text-base border-0 focus-visible:ring-0 shadow-none"
                />
                <Button type="submit" size="lg" className="h-12 px-6">
                  <Search className="h-5 w-5" />
                </Button>
              </form>
            </div>

            <div className="space-y-6 max-w-3xl mx-auto">
              {loading ? (
                   Array.from({ length: 3 }).map((_, i) => (
                    <Card key={i}><CardContent className="p-6 space-y-4"><Skeleton className="h-6 w-1/3" /><Skeleton className="h-20 w-full" /></CardContent></Card>
                ))
              ) : leads && leads.length > 0 ? leads.map((job) => {
                const quoteCount = job.quoteCount || 0;
                const isClosed = quoteCount >= MAX_QUOTES_ALLOWED;
                const cost = job.credits || 3;

                return (
                  <Card key={job.id} className="bg-card hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex flex-col sm:flex-row gap-6">
                        <div className="flex-grow">
                          <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3 font-bold uppercase tracking-wider">
                            <Badge variant="secondary" className="bg-blue-50 text-primary border-blue-100">{job.category}</Badge>
                            <span className="flex items-center gap-1"><MapPin className="h-3 w-3" /> {job.location}</span>
                          </div>
                          <h2 className="text-xl font-bold mb-3 text-foreground">Need {job.category} Professional</h2>
                          <p className="text-muted-foreground text-sm mb-4 line-clamp-3 leading-relaxed">{job.description}</p>
                          <div className="flex gap-3">
                              <Badge variant="outline" className="text-[10px] font-bold">QUALITY: {job.qualityScore || 80}%</Badge>
                              <Badge variant="outline" className="text-[10px] font-bold">VERIFIED LEAD</Badge>
                          </div>
                        </div>
                        <div className="flex-shrink-0 w-full sm:w-52 text-sm space-y-3 bg-secondary/10 p-4 rounded-lg">
                          <div className="flex items-center gap-2 text-muted-foreground"><Clock className="h-4 w-4" /> <span>{getPostedTime(job.createdAt)}</span></div>
                          <div className="flex items-center gap-2 text-muted-foreground"><Calendar className="h-4 w-4" /> <span>Req. {job.dateNeeded}</span></div>
                          <div className="flex items-center gap-2 text-muted-foreground"><DollarSign className="h-4 w-4" /> <span>Budget: {job.budget}</span></div>
                          <div className="flex items-center gap-2 font-bold text-primary"><Users className="h-4 w-4" /> <span>{quoteCount} quotes</span></div>
                        </div>
                      </div>
                      <div className="mt-6 pt-4 border-t">
                        {isClosed ? (
                          <Badge variant="destructive" className="px-6 py-2">Lead Closed</Badge>
                        ) : (
                          <Button
                            className="w-full sm:w-auto h-12 px-10 font-bold"
                            onClick={() => handleUnlockClick(job)}
                          >
                            <Lock className="mr-2 h-4 w-4" />
                            Unlock Contact Details ({cost} Credits)
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                );
              }) : (
                <Card className="border-dashed">
                    <CardContent className="p-16 text-center">
                        <Briefcase className="h-12 w-12 text-muted-foreground mx-auto mb-4 opacity-10" />
                        <p className="text-muted-foreground">There are currently no job requests waiting for quotes.</p>
                    </CardContent>
                </Card>
              )}
            </div>
          </div>
        </section>
      </div>
      <QuoteDialog
        job={selectedJob}
        isOpen={!!selectedJob}
        onClose={() => setSelectedJob(null)}
      />
    </main>
  );
}
