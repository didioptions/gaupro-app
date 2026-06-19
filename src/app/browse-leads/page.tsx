'use client';

import { useState, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Calendar, DollarSign, Users, Clock, UserPlus, Search, Briefcase } from 'lucide-react';
import Link from 'next/link';
import { useCollection, useFirestore, useMemoFirebase, useUser } from '@/firebase';
import { collection, query, orderBy, limit, where } from 'firebase/firestore';
import { Input } from '@/components/ui/input';
import { Skeleton } from '@/components/ui/skeleton';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const MAX_QUOTES_ALLOWED = 5;

export default function BrowseLeadsPage() {
  const [serviceQuery, setServiceQuery] = useState('');
  const [locationQuery, setLocationQuery] = useState('');
  const firestore = useFirestore();
  const { isUserLoading } = useUser();

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
  
  const filteredJobs = useMemo(() => {
    if (!leads) return [];
    return leads.filter((job) => {
      const serviceMatch = !serviceQuery || 
        job.category.toLowerCase().includes(serviceQuery.toLowerCase()) ||
        job.description.toLowerCase().includes(serviceQuery.toLowerCase());
      const locationMatch = !locationQuery || 
        job.location.toLowerCase().includes(locationQuery.toLowerCase());
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

  return (
    <main className="flex-grow">
      <div className="bg-secondary/30">
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl font-normal mb-4 text-primary">Live Job Requests</h1>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                These are verified, active job requests from customers across South Africa. Join our network to start quoting.
              </p>
              <Button asChild size="lg" className="mt-6 h-14 px-8 text-lg shadow-lg">
                  <Link href="/pro/register">
                      <UserPlus className="mr-2 h-5 w-5" />
                      Create My Free Pro Profile
                  </Link>
              </Button>
            </div>

            <div className="max-w-4xl mx-auto mb-10">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-2 bg-white p-3 rounded-xl shadow-sm border">
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
                  <Button className="h-12 w-full" size="lg">Filter</Button>
              </div>
            </div>

            <div className="space-y-6 max-w-3xl mx-auto">
              {loading ? (
                  Array.from({ length: 3 }).map((_, i) => (
                      <Card key={i}><CardContent className="p-6 space-y-4"><Skeleton className="h-6 w-1/3" /><Skeleton className="h-20 w-full" /></CardContent></Card>
                  ))
              ) : filteredJobs.length > 0 ? filteredJobs.map((job) => {
                const quoteCount = job.quoteCount || 0;
                const isClosed = quoteCount >= MAX_QUOTES_ALLOWED;

                return (
                  <Card key={job.id} className="bg-card hover:shadow-md transition-shadow border-l-4 border-l-primary">
                    <CardContent className="p-6">
                      <div className="flex flex-col sm:flex-row gap-6">
                        <div className="flex-grow">
                          <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3 font-bold uppercase tracking-wider">
                            <Badge variant="secondary" className="bg-blue-50 text-primary border-blue-100">{job.category}</Badge>
                            <span className="flex items-center gap-1"><MapPin className="h-3 w-3" /> {job.location}</span>
                          </div>
                          <h2 className="text-xl font-bold mb-3 text-foreground">Need {job.category} Specialist</h2>
                          <p className="text-muted-foreground text-sm mb-4 line-clamp-3 leading-relaxed">{job.description}</p>
                          <div className="flex gap-4">
                             <div className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded">Quality Score: {job.qualityScore || 85}%</div>
                          </div>
                        </div>
                        <div className="flex-shrink-0 w-full sm:w-52 text-sm space-y-3 bg-secondary/20 p-4 rounded-lg">
                          <div className="flex items-center gap-2 text-muted-foreground"><Clock className="h-4 w-4" /> <span>{getPostedTime(job.createdAt)}</span></div>
                          <div className="flex items-center gap-2 text-muted-foreground"><Calendar className="h-4 w-4" /> <span>Req. {job.dateNeeded}</span></div>
                          <div className="flex items-center gap-2 text-muted-foreground"><DollarSign className="h-4 w-4" /> <span>Budget: {job.budget}</span></div>
                          <div className="flex items-center gap-2 font-semibold text-primary"><Users className="h-4 w-4" /> <span>{quoteCount} quotes</span></div>
                        </div>
                      </div>
                      <div className="mt-6 pt-4 border-t flex justify-between items-center">
                        {isClosed ? (
                          <Badge variant="destructive" className="px-4 py-1">Job Capacity Reached</Badge>
                        ) : (
                          <Button asChild className="w-full sm:w-auto font-bold h-11 px-8">
                              <Link href="/pro/register">Send Quote for {job.credits || 3} CR</Link>
                          </Button>
                        )}
                        <p className="text-[10px] text-muted-foreground uppercase font-bold hidden sm:block">Ref: {job.id.substring(0,6)}</p>
                      </div>
                    </CardContent>
                  </Card>
                );
              }) : (
                <Card className="border-dashed">
                  <CardContent className="p-16 text-center">
                    <Briefcase className="h-12 w-12 text-muted-foreground mx-auto mb-4 opacity-20" />
                    <p className="text-muted-foreground">No active job requests match your current filters.</p>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
