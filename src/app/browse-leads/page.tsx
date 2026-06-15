
'use client';

import { useState, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Calendar, DollarSign, Users, Clock, UserPlus, Search } from 'lucide-react';
import Link from 'next/link';
import { useCollection, useFirestore, useMemoFirebase, useUser } from '@/firebase';
import { collection, query, orderBy, limit } from 'firebase/firestore';
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
              <h1 className="text-3xl md:text-4xl font-normal mb-4">Live Job Requests</h1>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                These are real, active job requests from customers in your area. Sign up for free to start quoting and winning work today.
              </p>
              <Button asChild size="lg" className="mt-6">
                  <Link href="/pro/register">
                      <UserPlus className="mr-2 h-5 w-5" />
                      Create Your Free Profile
                  </Link>
              </Button>
            </div>

            <div className="max-w-4xl mx-auto mb-10">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
                  <div className="relative md:col-span-2">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                      <Input
                          type="text"
                          placeholder="e.g. plumbing services"
                          className="h-12 pl-10 text-base"
                          value={serviceQuery}
                          onChange={(e) => setServiceQuery(e.target.value)}
                      />
                  </div>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                      <Input
                          type="text"
                          placeholder="Durban"
                          className="h-12 pl-10 text-base"
                          value={locationQuery}
                          onChange={(e) => setLocationQuery(e.target.value)}
                      />
                  </div>
                  <div className="flex gap-2">
                      <Select>
                        <SelectTrigger className="h-12">
                          <SelectValue placeholder="Radius" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="10">10 km</SelectItem>
                          <SelectItem value="25">25 km</SelectItem>
                          <SelectItem value="50">50 km</SelectItem>
                          <SelectItem value="100">100 km</SelectItem>
                        </SelectContent>
                      </Select>
                      <Button className="h-12" size="lg">GO</Button>
                  </div>
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
                  <Card key={job.id} className="bg-card hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex flex-col sm:flex-row gap-4">
                        <div className="flex-grow">
                          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                            <Badge variant="secondary" className="bg-blue-100 text-primary hover:bg-blue-200">{job.category}</Badge>
                            <MapPin className="h-4 w-4" />
                            <span>{job.location}</span>
                          </div>
                          <h2 className="text-xl font-semibold mb-2 text-foreground">Request for {job.category}</h2>
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
                          <Button asChild className="w-full sm:w-auto">
                              <Link href="/pro/register">Sign Up to Quote</Link>
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                );
              }) : (
                <Card>
                  <CardContent className="p-10 text-center text-muted-foreground">
                    {error ? `Error loading leads: ${error}` : 'No job requests found matching your criteria.'}
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
