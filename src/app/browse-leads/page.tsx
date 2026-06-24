'use client';

import { useState, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Clock, Search, Loader2, User, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { useCollection, useFirestore, useMemoFirebase, useUser } from '@/firebase';
import { collection, query, orderBy, limit, where } from 'firebase/firestore';
import { Input } from '@/components/ui/input';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

export default function BrowseLeadsPage() {
  const [serviceQuery, setServiceQuery] = useState('');
  const [locationQuery, setLocationQuery] = useState('');
  const firestore = useFirestore();
  const { user } = useUser();

  const leadsQuery = useMemoFirebase(() => {
    if (!firestore) return null;
    // Strictly filter by status='approved' for public access
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
    const diffInMinutes = Math.floor((new Date().getTime() - date.getTime()) / (1000 * 60));
    if (diffInMinutes < 1) return 'Just now';
    if (diffInMinutes < 60) return `${diffInMinutes} mins ago`;
    const diffInHours = Math.floor(diffInMinutes / 60);
    if (diffInHours < 24) return `${diffInHours} hours ago`;
    return `${Math.floor(diffInHours / 24)} days ago`;
  };

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase()
      .substring(0, 2);
  };

  const isLoggedIn = !!user;

  return (
    <main className="flex-grow bg-secondary/10 min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto mb-10">
          <h1 className="text-2xl font-normal mb-6 text-foreground">Latest Customer Requests</h1>
          
          <form onSubmit={(e) => e.preventDefault()} className="grid grid-cols-1 md:grid-cols-12 gap-2 bg-white p-3 rounded-lg shadow-sm border mb-8">
              <div className="relative md:col-span-5">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                      type="text"
                      placeholder="e.g. plumbing services"
                      className="h-10 pl-10 border-0 focus-visible:ring-0 shadow-none bg-transparent"
                      value={serviceQuery}
                      onChange={(e) => setServiceQuery(e.target.value)}
                  />
              </div>
                <div className="relative md:col-span-5 border-l md:pl-2">
                  <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                      type="text"
                      placeholder="Location"
                      className="h-10 pl-10 border-0 focus-visible:ring-0 shadow-none bg-transparent"
                      value={locationQuery}
                      onChange={(e) => setLocationQuery(e.target.value)}
                  />
              </div>
              <Button type="button" className="md:col-span-2 h-10 font-bold bg-primary hover:bg-primary/90" size="sm">GO</Button>
          </form>

          {error && (
            <Alert variant="destructive" className="mb-8">
              <AlertTitle>Connection Error</AlertTitle>
              <AlertDescription>
                We encountered an error loading the leads. Please ensure your Firestore Rules are deployed.
              </AlertDescription>
            </Alert>
          )}

          <div className="space-y-6">
            {loading ? (
                <div className="flex flex-col items-center justify-center py-20 space-y-4">
                    <Loader2 className="h-10 w-10 text-primary animate-spin" />
                    <p className="text-muted-foreground font-medium italic">Finding the latest requests...</p>
                </div>
            ) : filteredJobs.length > 0 ? (
              filteredJobs.map((job) => (
                <Card key={job.id} className="bg-white border hover:shadow-md transition-shadow relative">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                            <Avatar className="h-10 w-10 bg-orange-500 text-white font-bold">
                                <AvatarFallback className="bg-orange-500">{getInitials(job.customerName || 'Customer')}</AvatarFallback>
                            </Avatar>
                            <div>
                                <p className="font-semibold text-foreground">{job.customerName || 'Anonymous'}</p>
                            </div>
                        </div>
                        <p className="text-xs text-muted-foreground font-medium">{getPostedTime(job.createdAt)}</p>
                    </div>

                    <div className="pl-13 space-y-4 ml-13">
                        <h2 className="text-xl font-medium text-foreground">{job.category}</h2>
                        
                        <div className="flex items-center gap-6 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1.5"><MapPin className="h-4 w-4 text-muted-foreground" /> {job.location}</span>
                            <span className="flex items-center gap-1.5"><Clock className="h-4 w-4 text-muted-foreground" /> {job.dateNeeded}</span>
                        </div>

                        <div className="text-sm text-foreground/80 leading-relaxed max-w-2xl">
                           <p className={!isLoggedIn ? 'line-clamp-2' : ''}>
                               Request for {job.category}. - {job.description}
                           </p>
                        </div>

                        <div className="flex justify-end pt-2">
                             <Button asChild variant="outline" className="font-bold border-gray-300">
                                <Link href={isLoggedIn ? "/browse-quotes" : "/pro/login"}>
                                    View Details
                                </Link>
                             </Button>
                        </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            ) : (
              <Card className="border-dashed border-2 py-20 bg-secondary/5">
                <CardContent className="text-center">
                  <User className="h-16 w-16 text-muted-foreground mx-auto mb-4 opacity-10" />
                  <h3 className="text-xl font-bold text-foreground mb-1">No active requests matching your search</h3>
                  <p className="text-muted-foreground">Try adjusting your filters or check back later.</p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}