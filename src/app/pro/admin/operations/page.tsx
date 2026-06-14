'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { useFirestore, useUser } from '@/firebase';
import { 
    collection, 
    query, 
    orderBy, 
    limit, 
    DocumentData,
    getDocs,
    startAfter,
    QueryDocumentSnapshot
} from 'firebase/firestore';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { 
    Activity, 
    PlusCircle, 
    ShoppingBag, 
    Star, 
    UserPlus, 
    ShieldCheck, 
    Wallet,
    Clock,
    ChevronDown,
    Loader2
} from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Button } from '@/components/ui/button';

const PAGE_SIZE = 50;

export default function MarketplaceOperationsPage() {
  const firestore = useFirestore();
  const { isUserLoading } = useUser();
  
  const [events, setEvents] = useState<any[]>([]);
  const [lastDoc, setLastDoc] = useState<QueryDocumentSnapshot | null>(null);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const fetchEvents = useCallback(async (isInitial = true) => {
    if (!firestore || isUserLoading) return;
    
    if (isInitial) setLoading(true);
    else setLoadingMore(true);

    try {
        const baseQuery = query(
            collection(firestore, 'marketplace_audit_logs'),
            orderBy('timestamp', 'desc'),
            limit(PAGE_SIZE)
        );

        const finalQuery = isInitial ? baseQuery : query(baseQuery, startAfter(lastDoc));
        const snapshot = await getDocs(finalQuery);
        
        const newEvents = snapshot.docs.map(d => ({ id: d.id, ...d.data() }));
        
        if (isInitial) {
            setEvents(newEvents);
        } else {
            setEvents(prev => [...prev, ...newEvents]);
        }

        setLastDoc(snapshot.docs[snapshot.docs.length - 1] || null);
        setHasMore(snapshot.docs.length === PAGE_SIZE);
    } catch (e: any) {
        console.error("Fetch operations error:", e);
    } finally {
        setLoading(false);
        setLoadingMore(false);
    }
  }, [firestore, isUserLoading, lastDoc]);

  useEffect(() => {
    fetchEvents(true);
  }, [firestore, isUserLoading]);

  const getEventIcon = (action: string) => {
    if (!action) return <Activity className="h-4 w-4 text-gray-500" />;
    if (action.includes('USER_REGISTER')) return <UserPlus className="h-4 w-4 text-blue-500" />;
    if (action.includes('LEAD_CREATE')) return <PlusCircle className="h-4 w-4 text-green-500" />;
    if (action.includes('LEAD_PURCHASE')) return <ShoppingBag className="h-4 w-4 text-orange-500" />;
    if (action.includes('REVIEW')) return <Star className="h-4 w-4 text-yellow-500" />;
    if (action.includes('VERIFICATION')) return <ShieldCheck className="h-4 w-4 text-purple-500" />;
    if (action.includes('CREDIT')) return <Wallet className="h-4 w-4 text-teal-500" />;
    return <Activity className="h-4 w-4 text-gray-500" />;
  };

  const getFormattedTime = (timestamp: any) => {
    if (!timestamp) return 'Just now';
    if (timestamp.seconds) return new Date(timestamp.seconds * 1000).toLocaleTimeString();
    const d = new Date(timestamp);
    return isNaN(d.getTime()) ? 'Just now' : d.toLocaleTimeString();
  };

  return (
    <div className="py-12 md:py-16 bg-secondary/30 min-h-screen">
      <div className="container mx-auto px-4 max-w-4xl">
        <header className="mb-10 text-center">
          <Badge className="mb-2 bg-red-100 text-red-700 animate-pulse">LIVE</Badge>
          <h1 className="text-3xl font-bold tracking-tight">Marketplace Pulse</h1>
          <p className="text-muted-foreground mt-2">Real-time marketplace activity across all user segments.</p>
        </header>

        <Card className="shadow-xl border-t-4 border-t-primary">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
                <Activity className="h-5 w-5 text-primary" />
                Global Activity Feed
            </CardTitle>
            <CardDescription>Newest events appear first. Feed refreshes on every system action.</CardDescription>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[600px] pr-4">
              <div className="space-y-4">
                {loading && events.length === 0 ? (
                  Array.from({ length: 8 }).map((_, i) => (
                    <div key={i} className="flex gap-4 p-4 border rounded-lg bg-card">
                      <Skeleton className="h-8 w-8 rounded-full" />
                      <div className="space-y-2 flex-grow">
                        <Skeleton className="h-4 w-1/3" />
                        <Skeleton className="h-3 w-full" />
                      </div>
                    </div>
                  ))
                ) : events.length > 0 ? (
                  <>
                    {events.map((event) => (
                      <div key={event.id} className="flex gap-4 p-4 border rounded-lg bg-card hover:shadow-md transition-shadow relative overflow-hidden">
                         <div className="absolute top-0 left-0 w-1 h-full bg-primary/20" />
                         <div className="flex-shrink-0 p-2 bg-secondary rounded-full h-fit mt-1">
                            {getEventIcon(event.action)}
                         </div>
                         <div className="flex-grow">
                            <div className="flex justify-between items-start">
                               <h4 className="font-bold text-sm capitalize">{event.action?.replace(/_/g, ' ') || 'Marketplace Activity'}</h4>
                               <span className="text-[10px] text-muted-foreground flex items-center gap-1">
                                  <Clock className="h-3 w-3" />
                                  {getFormattedTime(event.timestamp)}
                                </span>
                            </div>
                            <p className="text-xs text-muted-foreground mt-1">
                               Target ID: <span className="font-mono text-primary">{(event.targetId || 'SYSTEM').substring(0, 12)}</span> 
                               {event.notes && ` • ${event.notes}`}
                            </p>
                            <div className="mt-2 flex items-center gap-2">
                               <Badge variant="outline" className="text-[10px] py-0">Admin: {(event.adminUid || 'AUTO').substring(0, 8)}</Badge>
                            </div>
                         </div>
                      </div>
                    ))}
                    
                    {hasMore && (
                        <div className="pt-4 flex justify-center">
                            <Button 
                                variant="ghost" 
                                size="sm" 
                                onClick={() => fetchEvents(false)} 
                                disabled={loadingMore}
                                className="text-xs gap-2"
                            >
                                {loadingMore ? <Loader2 className="h-4 w-4 animate-spin" /> : <ChevronDown className="h-4 w-4" />}
                                Load More History
                            </Button>
                        </div>
                    )}
                  </>
                ) : (
                  <div className="text-center py-20 text-muted-foreground italic">
                     Waiting for marketplace activity...
                  </div>
                )}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>

        <div className="mt-8 grid md:grid-cols-3 gap-6">
           <Card className="bg-blue-50 border-blue-200">
              <CardContent className="p-4 flex items-center gap-4">
                 <UserPlus className="h-8 w-8 text-blue-600" />
                 <div><p className="text-xs text-blue-800 font-bold uppercase">System Tip</p><p className="text-[11px] text-blue-700">Monitor registrations to identify emerging city hubs.</p></div>
              </CardContent>
           </Card>
           <Card className="bg-green-50 border-green-200">
              <CardContent className="p-4 flex items-center gap-4">
                 <PlusCircle className="h-8 w-8 text-green-600" />
                 <div><p className="text-xs text-green-800 font-bold uppercase">Healthy Flow</p><p className="text-[11px] text-green-700">New leads are being scored and distributed in real-time.</p></div>
              </CardContent>
           </Card>
           <Card className="bg-purple-50 border-purple-200">
              <CardContent className="p-4 flex items-center gap-4">
                 <ShieldCheck className="h-8 w-8 text-purple-600" />
                 <div><p className="text-xs text-purple-800 font-bold uppercase">Security</p><p className="text-[11px] text-purple-700">Role-based access is being enforced for all actions.</p></div>
              </CardContent>
           </Card>
        </div>
      </div>
    </div>
  );
}