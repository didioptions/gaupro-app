'use client';

import { useState, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Calendar, DollarSign, Users, Clock, UserPlus, Search, Briefcase, Lock, AlertCircle, Loader2 } from 'lucide-react';
import Link from 'next/link';
import { useCollection, useFirestore, useMemoFirebase, useUser } from '@/firebase';
import { collection, query, orderBy, limit, where } from 'firebase/firestore';
import { Input } from '@/components/ui/input';
import { Skeleton } from '@/components/ui/skeleton';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

const MAX_QUOTES_ALLOWED = 5;

export default function BrowseLeadsPage() {
  const [serviceQuery, setServiceQuery] = useState('');
  const [locationQuery, setLocationQuery] = useState('');
  const firestore = useFirestore();
  const { user } = useUser();

  const leadsQuery = useMemoFirebase(() => {
    if (!firestore) return null;
    // We strictly filter by status='approved' to match the security rules
    return query(
        collection(firestore, 'serviceRequests'),
        where('status', '==', 'approved'),
        orderBy('createdAt', 'desc'),
        limit(50)
    );
  }, [firestore]);

  const { data: leads, loading, error } = useCollection(leadsQuery);
  
  const filteredJobs = useMemo(() => {
    if (!leads) return [];
    return leads.filter((job) => {
      const serviceMatch = !serviceQuery || 
        job.category?.toLowerCase().includes(serviceQuery.toLowerCase()) ||
        job.description?.toLowerCase().includes(serviceQuery.toLowerCase());
      const locationMatch = !locationQuery || 
        job.location?.toLowerCase().includes(locationQuery.toLowerCase());
      return serviceMatch && locationMatch;
    });
  }, [leads, serviceQuery, locationQuery]);

  const getPostedTime = (createdAt: any) => {
    if (!createdAt) return 'Recently';
    const date = createdAt.seconds ? new Date(createdAt.seconds * 1000) : new Date(createdAt);
    const diffInHours = Math.floor((new Date().getTime() - date.getTime()) / (1000 * 60 * 60));
    if (diffInHours < 1) return 'Just now';
    if (diffInHours < 24) return `${diffInHours}h ago`;
    return `${Math.floor(diffInHours / 24)}d ago`;
  };

  const isLoggedIn = !!user;

  return (
    <main className="flex-grow bg-secondary/10">
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 text-primary">Live Job Requests</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            These are verified, active job requests from customers across South Africa. 
            Join our network to see full details and start quoting.
          </p>
          {!isLoggedIn && (
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="h-14 px-8 text-lg shadow-lg">
                  <Link href="/pro/register">
                      <UserPlus className="mr-2 h-5 w-5" />
                      Create My Free Pro Profile
                  </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-14 px-8 text-lg">
                  <Link href="/pro/login">Login as Pro</Link>
              </Button>
            </div>
          )}
        </div>

        <div className="max-w-4xl mx-auto mb-10">
          <form onSubmit={(e) => e.preventDefault()} className="grid grid-cols-1 md:grid-cols-4 gap-2 bg-white p-3 rounded-xl shadow-md border">
              <div className="relative md:col-span-2">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                      type="text"
                      placeholder="What service do you provide?"
                      className="h-12 pl-10 text-base border-0 focus-visible:ring-0 shadow-none"
                      value={serviceQuery}
                      onChange={(e) => setServiceQuery(e.target.value)}
                  />
              </div>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                      type="text"
                      placeholder="Location"
                      className="h-12 pl-10 text-base border-0 focus-visible:ring-0 shadow-none"
                      value={locationQuery}
                      onChange={(e) => setLocationQuery(e.target.value)}
                  />
              </div>
              <Button type="button" className="h-12 w-full font-bold" size="lg">Filter</Button>
          </form>
        </div>

        {error && (
          <div className="max-w-3xl mx-auto mb-8">
            <Alert variant="destructive" className="border-red-500 bg-red-50 text-red-900">
              <AlertCircle className="h-5 w-5" />
              <AlertTitle className="font-bold">Access Issue</AlertTitle>
              <AlertDescription className="mt-1">
                {error.includes('permission-denied') 
                  ? "Your request was blocked. Please ensure you have deployed the latest firestore.rules using 'firebase deploy --only firestore:rules'." 
                  : "We encountered an error loading the leads. Please check your internet connection and try refreshing."}
              </AlertDescription>
            </Alert>
          </div>
        )}

        <div className="space-y-6 max-w-3xl mx-auto">
          {loading ? (
              <div className="flex flex-col items-center justify-center py-20 space-y-4">
                  <Loader2 className="h-10 w-10 text-primary animate-spin" />
                  <p className="text-muted-foreground font-medium">Scanning for live job requests...</p>
              </div>
          ) : filteredJobs.length > 0 ? (
            filteredJobs.map((job) => {
              const quoteCount = job.quoteCount || 0;
              const isClosed = quoteCount >= MAX_QUOTES_ALLOWED;

              return (
                <Card key={job.id} className="bg-card hover:shadow-xl transition-all border-l-4 border-l-primary animate-in fade-in slide-in-from-bottom-2 duration-300">
                  <CardContent className="p-6">
                    <div className="flex flex-col sm:flex-row gap-6">
                      <div className="flex-grow">
                        <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3 font-bold uppercase tracking-wider">
                          <Badge variant="secondary" className="bg-blue-50 text-primary border-blue-100">{job.category}</Badge>
                          <span className="flex items-center gap-1"><MapPin className="h-3 w-3" /> {job.location}</span>
                        </div>
                        <h2 className="text-xl font-bold mb-3 text-foreground">Need {job.category} Specialist</h2>
                        
                        <div className="relative">
                          <p className={`text-muted-foreground text-sm mb-4 leading-relaxed ${!isLoggedIn ? 'line-clamp-2 blur-[1px] select-none' : ''}`}>
                              {job.description}
                          </p>
                          {!isLoggedIn && (
                              <div className="absolute inset-0 flex items-center justify-center">
                                  <div className="bg-white/95 px-4 py-2 rounded-lg shadow-md border border-primary/20 flex items-center gap-2">
                                      <Lock className="h-4 w-4 text-primary" />
                                      <Link href="/pro/login" className="text-xs font-bold text-primary hover:underline">Login to see full details</Link>
                                  </div>
                              </div>
                          )}
                        </div>

                        <div className="flex gap-4">
                           <div className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded border border-green-100">Quality Score: {job.qualityScore || 85}%</div>
                        </div>
                      </div>
                      <div className="flex-shrink-0 w-full sm:w-52 text-sm space-y-3 bg-secondary/20 p-4 rounded-xl border border-secondary/50">
                        <div className="flex items-center gap-2 text-muted-foreground"><Clock className="h-4 w-4" /> <span>{getPostedTime(job.createdAt)}</span></div>
                        <div className="flex items-center gap-2 text-muted-foreground"><Calendar className="h-4 w-4" /> <span>Req: {job.dateNeeded}</span></div>
                        <div className="flex items-center gap-2 text-muted-foreground"><DollarSign className="h-4 w-4" /> <span>Budget: {job.budget}</span></div>
                        <div className="flex items-center gap-2 font-black text-primary"><Users className="h-4 w-4" /> <span>{quoteCount} quotes</span></div>
                      </div>
                    </div>
                    <div className="mt-6 pt-4 border-t flex flex-col sm:flex-row justify-between items-center gap-4">
                      {isClosed ? (
                        <Badge variant="destructive" className="px-6 py-2 text-sm">Job Capacity Reached</Badge>
                      ) : (
                        <Button asChild className="w-full sm:w-auto font-black h-12 px-10 text-base shadow-lg">
                            <Link href={isLoggedIn ? "/browse-quotes" : "/pro/register"}>
                              {isLoggedIn ? 'Unlock & Quote' : `Join to Quote`}
                            </Link>
                        </Button>
                      )}
                      <p className="text-[10px] text-muted-foreground uppercase font-black tracking-widest opacity-50">Ref: {job.id.substring(0,8)}</p>
                    </div>
                  </CardContent>
                </Card>
              );
            })
          ) : (
            <Card className="border-dashed border-2 py-20 bg-secondary/5">
              <CardContent className="text-center">
                <Briefcase className="h-16 w-16 text-muted-foreground mx-auto mb-4 opacity-10" />
                <h3 className="text-xl font-bold text-foreground mb-1">No active job requests found</h3>
                <p className="text-muted-foreground">Try adjusting your search or check back later.</p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </main>
  );
}