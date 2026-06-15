
'use client';

import React, { useState, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Search, MapPin, Calendar, DollarSign, Users, Clock, Lock, CreditCard } from 'lucide-react';
import Link from 'next/link';
import { useUser, useFirestore, useCollection, useMemoFirebase } from '@/firebase';
import { collection, query, orderBy, limit } from 'firebase/firestore';
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
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl font-normal mb-4">Latest Job Requests</h1>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Browse the latest opportunities from customers in your area. Unlock leads to get contact details and submit your quote.
              </p>
            </div>

            <div className="max-w-3xl mx-auto mb-8">
              {user && (
                <Card className="bg-card shadow-sm mb-8">
                  <CardContent className="p-4 flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <CreditCard className="h-6 w-6 text-primary" />
                      <h3 className="text-lg font-semibold">Credit Balance</h3>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-primary">{creditBalance}</p>
                      <Button variant="link" asChild className="h-auto p-0 text-sm">
                        <Link href="/pro/buy-credits">Buy more credits</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}

              <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
                <Input
                  type="search"
                  placeholder="Search for job titles or categories..."
                  className="h-12 flex-grow text-base bg-card"
                />
                <Button type="submit" size="lg" className="h-12">
                  <Search className="mr-2 h-5 w-5 md:hidden" />
                  <span className="hidden md:inline">Search</span>
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
                      <div className="flex flex-col sm:flex-row gap-4">
                        <div className="flex-grow">
                          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                            <Badge variant="secondary" className="bg-blue-100 text-primary hover:bg-blue-200">{job.category}</Badge>
                            <MapPin className="h-4 w-4" />
                            <span>{job.location}</span>
                          </div>
                          <h2 className="text-xl font-bold mb-2 text-foreground">Request for {job.category}</h2>
                          <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{job.description}</p>
                        </div>
                        <div className="flex-shrink-0 w-full sm:w-56 text-sm space-y-2 text-muted-foreground">
                          <div className="flex items-center gap-2"><Clock className="h-4 w-4" /> <span>Posted {getPostedTime(job.createdAt)}</span></div>
                          <div className="flex items-center gap-2"><Calendar className="h-4 w-4" /> <span>Needed: {job.dateNeeded}</span></div>
                          <div className="flex items-center gap-2"><DollarSign className="h-4 w-4" /> <span>Budget: {job.budget || 'Quote required'}</span></div>
                          <div className="flex items-center gap-2"><Users className="h-4 w-4" /> <span>{quoteCount} quotes submitted</span></div>
                        </div>
                      </div>
                      <div className="mt-4 pt-4 border-t">
                        {isClosed ? (
                          <Badge variant="destructive">Job Closed</Badge>
                        ) : (
                          <Button
                            className="w-full sm:w-auto"
                            onClick={() => handleUnlockClick(job)}
                          >
                            <Lock className="mr-2 h-4 w-4" />
                            Unlock & Quote ({cost} Credits)
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                );
              }) : (
                <Card>
                    <CardContent className="p-10 text-center text-muted-foreground">
                        {error ? `Error: ${error}` : 'No active job requests found.'}
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
