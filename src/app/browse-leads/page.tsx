'use client';

import { useState, useMemo, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Clock, Search, Loader2, User, Lock, AlertCircle, CheckCircle2, Hourglass } from 'lucide-react';
import Link from 'next/link';
import { useCollection, useFirestore, useMemoFirebase, useUser } from '@/firebase';
import { collection, query, orderBy, limit, where } from 'firebase/firestore';
import { Input } from '@/components/ui/input';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";

export default function BrowseLeadsPage() {
  const [mounted, setMounted] = useState(false);
  const [serviceQuery, setServiceQuery] = useState('');
  const [locationQuery, setLocationQuery] = useState('');
  const [showLoginModal, setShowLoginModal] = useState(false);
  const firestore = useFirestore();
  const { user, profile, isUserLoading } = useUser();

  useEffect(() => {
    setMounted(true);
  }, []);

  const isAdmin = profile?.role === 'admin' || profile?.role === 'super_admin';

  const leadsQuery = useMemoFirebase(() => {
    if (!firestore || isUserLoading) return null;
    
    // If Admin, show everything. If public/Pro, only show approved.
    if (isAdmin) {
      return query(
          collection(firestore, 'leads_public'),
          orderBy('createdAt', 'desc'),
          limit(50)
      );
    }

    return query(
        collection(firestore, 'leads_public'),
        where('status', '==', 'approved'),
        orderBy('createdAt', 'desc'),
        limit(50)
    );
  }, [firestore, isUserLoading, isAdmin]);

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

  const handleViewDetails = (e: React.MouseEvent) => {
    if (!user) {
      e.preventDefault();
      setShowLoginModal(true);
    }
  };

  if (!mounted) {
    return (
        <main className="flex-grow bg-secondary/10 min-h-screen">
            <div className="container mx-auto px-4 py-20 flex justify-center">
                <Loader2 className="h-10 w-10 text-primary animate-spin" />
            </div>
        </main>
    );
  }

  const isLoggedIn = !!user;

  return (
    <main className="flex-grow bg-secondary/10 min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto mb-10">
          <div className="flex justify-between items-end mb-6">
              <h1 className="text-2xl font-normal text-foreground">Latest Customer Requests</h1>
              {isAdmin && <Badge className="bg-primary text-white">Admin View: Showing All Statuses</Badge>}
          </div>
          
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
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Marketplace Connection Error</AlertTitle>
              <AlertDescription>
                We're having trouble reaching the database. {isAdmin ? "Check your Firestore logs for permission errors." : "Please try again later."}
              </AlertDescription>
            </Alert>
          )}

          <div className="space-y-6">
            {loading ? (
                <div className="flex flex-col items-center justify-center py-20 space-y-4">
                    <Loader2 className="h-10 w-10 text-primary animate-spin" />
                    <p className="text-muted-foreground font-medium italic">Scanning for new leads...</p>
                </div>
            ) : filteredJobs.length > 0 ? (
              filteredJobs.map((job) => (
                <Card key={job.id} className={cn(
                    "bg-white border hover:shadow-md transition-shadow relative",
                    job.status !== 'approved' && "border-l-4 border-l-yellow-400 bg-yellow-50/10"
                )}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                            <Avatar className="h-10 w-10 bg-orange-500 text-white font-bold">
                                <AvatarFallback className="bg-orange-500 text-xs">PREVIEW</AvatarFallback>
                            </Avatar>
                            <div>
                                <p className="font-bold text-foreground">Customer in {job.location}</p>
                                {isAdmin && (
                                    <div className="flex items-center gap-2 mt-1">
                                        {job.status === 'approved' ? (
                                            <Badge variant="outline" className="text-[10px] text-green-600 border-green-200 bg-green-50"><CheckCircle2 className="h-2 w-2 mr-1" /> Approved</Badge>
                                        ) : (
                                            <Badge variant="outline" className="text-[10px] text-yellow-600 border-yellow-200 bg-yellow-50"><Hourglass className="h-2 w-2 mr-1" /> {job.status?.replace('_', ' ')}</Badge>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>
                        <p className="text-xs text-muted-foreground font-medium">{getPostedTime(job.createdAt)}</p>
                    </div>

                    <div className="pl-0 md:pl-13 space-y-4">
                        <h2 className="text-xl font-bold text-foreground">{job.category}</h2>
                        
                        <div className="flex items-center gap-6 text-sm text-muted-foreground font-medium">
                            <span className="flex items-center gap-1.5"><MapPin className="h-4 w-4" /> {job.location}</span>
                            <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" /> {job.dateNeeded}</span>
                        </div>

                        <div className="text-sm text-foreground/80 leading-relaxed max-w-2xl bg-secondary/20 p-4 rounded-lg border border-dashed border-muted-foreground/30">
                           <p className="line-clamp-3">
                               {job.description}
                           </p>
                        </div>

                        <div className="flex justify-end pt-2">
                             <Button asChild onClick={handleViewDetails} className="font-bold bg-primary hover:bg-primary/90 h-11 px-8">
                                <Link href={isLoggedIn ? "/browse-quotes" : "#"}>
                                    {isLoggedIn ? "View Full Details" : "Login to View Details"}
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
                  <h3 className="text-xl font-bold text-foreground mb-1">No active leads found</h3>
                  <p className="text-muted-foreground">Try adjusting your filters or checking the Admin Queue if you just posted a test lead.</p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>

      <Dialog open={showLoginModal} onOpenChange={setShowLoginModal}>
        <DialogContent className="sm:max-w-md">
            <DialogHeader>
                <DialogTitle className="text-2xl text-center font-bold">Protected Information</DialogTitle>
                <DialogDescription className="text-center pt-2 text-lg">
                    Create a free account or sign in to view customer contact details and respond to this lead.
                </DialogDescription>
            </DialogHeader>
            <div className="flex flex-col gap-3 py-6">
                <Button asChild size="lg" className="h-14 font-bold text-lg">
                    <Link href="/pro/signup">Create Free Account</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="h-14 font-bold text-lg">
                    <Link href="/pro/login">Sign In</Link>
                </Button>
            </div>
            <DialogFooter className="sm:justify-center text-xs text-muted-foreground">
                <Lock className="h-3 w-3 mr-1" /> Secure login via Gaupro Professional
            </DialogFooter>
        </DialogContent>
      </Dialog>
    </main>
  );
}
