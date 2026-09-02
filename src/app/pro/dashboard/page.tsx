'use client';

import { useEffect, useState, useMemo } from 'react';
import { 
  AlertCircle, 
  Star, 
  UserPlus, 
  ShieldCheck, 
  Briefcase, 
  LayoutDashboard, 
  ExternalLink, 
  MapPin, 
  Clock,
  CheckCircle2,
  Wallet
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import Link from 'next/link';
import { useUser, useFirestore, useCollection, useMemoFirebase } from '@/firebase';
import { collection, query, where, limit, orderBy, onSnapshot, doc, updateDoc } from 'firebase/firestore';
import { Skeleton } from '@/components/ui/skeleton';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { allServices } from '@/lib/service-questions';
import { useRouter } from 'next/navigation';
import { InviteFriendsDialog } from '@/components/pro/invite-friends-dialog';
import { SupportChatWidget } from '@/components/pro/support-chat-widget';
import { cn } from '@/lib/utils';

interface ProfessionalProfile {
  id?: string;
  name?: string;
  location?: string;
  suburb?: string;
  avatarSeed?: string;
  rating?: number;
  reviews?: number;
  tags?: string[];
  serviceCategory?: string;
  isProVerified?: boolean;
  creditBalance?: number;
  leadCount?: number;
  userId?: string;
  serviceAreas?: string[];
}

export default function ProDashboardPage() {
  const { user, profile, isUserLoading } = useUser();
  const firestore = useFirestore();
  const router = useRouter();
  
  const [profileData, setProfileData] = useState<ProfessionalProfile | null>(null);
  const [notifications, setNotifications] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const isAdmin = profile?.role === 'admin' || profile?.role === 'super_admin';

  useEffect(() => {
    if (isUserLoading) return;
    if (!user || !firestore) {
      setIsLoading(false);
      return;
    }

    const profileDocRef = doc(firestore, "professionalProfiles", user.uid);
    const unsubscribeProfile = onSnapshot(profileDocRef, (snapshot) => {
      if (snapshot.exists()) {
        setProfileData({ id: snapshot.id, ...snapshot.data() } as ProfessionalProfile);
      }
      setIsLoading(false);
    }, () => {
      setIsLoading(false);
    });

    const nQ = query(
        collection(firestore, 'users', user.uid, 'notifications'),
        orderBy('createdAt', 'desc'),
        limit(5)
    );
    const unsubscribeNotifications = onSnapshot(nQ, (snapshot) => {
        setNotifications(snapshot.docs.map(d => ({ id: d.id, ...d.data() })));
    }, () => {
        // Silently fail
    });

    return () => {
        unsubscribeProfile();
        unsubscribeNotifications();
    };
  }, [user, isUserLoading, firestore]);

  const leadsQuery = useMemoFirebase(() => {
      if (!firestore || isUserLoading) return null;
      return query(
          collection(firestore, 'leads_public'),
          where('status', '==', 'approved'),
          orderBy('createdAt', 'desc'),
          limit(100)
      );
  }, [firestore, isUserLoading]);

  const { data: allLeads, loading: loadingLeads } = useCollection(leadsQuery);

  const matchingLeads = useMemo(() => {
    if (!profileData || !allLeads) return [];
    
    const proServices = [...(profileData.tags || []), profileData.serviceCategory].filter(Boolean).map(s => s?.toLowerCase());
    const proLocation = profileData.location?.toLowerCase();
    const proSuburb = profileData.suburb?.toLowerCase();
    const proAreas = (profileData.serviceAreas || []).map(a => a.toLowerCase());

    if (proServices.length === 0) return [];

    return allLeads.filter(job => {
      // 1. Service Matching
      const isServiceMatch = proServices.some(service => job.category.toLowerCase().includes(service!));
      
      // 2. Location Matching (City OR Suburb OR Service Area)
      const leadLoc = job.location?.toLowerCase();
      const leadLocSlug = job.locationSlug?.toLowerCase();
      
      const isLocationMatch = 
        !leadLocSlug || 
        leadLocSlug === proLocation || 
        leadLocSlug === proSuburb || 
        proAreas.includes(leadLocSlug) ||
        (leadLoc && (leadLoc.includes(proLocation!) || leadLoc.includes(proSuburb!)));

      return isServiceMatch && isLocationMatch;
    });
  }, [profileData, allLeads]);

  const relevantLeads = useMemo(() => matchingLeads.slice(0, 5), [matchingLeads]);

  const markAsRead = async (notificationId: string) => {
    if (!user || !firestore) return;
    try {
        const notifRef = doc(firestore, 'users', user.uid, 'notifications', notificationId);
        await updateDoc(notifRef, { status: 'read' });
    } catch (err) {}
  };

  const getPostedTime = (createdAt: any) => {
    if (!createdAt) return 'Recently';
    const date = createdAt.seconds ? new Date(createdAt.seconds * 1000) : new Date(createdAt);
    const diffInHours = Math.floor((new Date().getTime() - date.getTime()) / (1000 * 60 * 60));
    if (diffInHours < 1) return 'Just now';
    if (diffInHours < 24) return `${diffInHours}h ago`;
    return `${Math.floor(diffInHours / 24)}d ago`;
  };

  if (isLoading || isUserLoading) {
    return (
      <div className="py-12 md:py-16">
        <div className="container mx-auto px-4 space-y-8">
          <Skeleton className="h-10 w-1/4" />
          <Skeleton className="h-24 w-full" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Skeleton className="h-48 lg:col-span-2" />
            <Skeleton className="h-48" />
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl md:text-4xl font-normal text-foreground">Dashboard</h1>
          {profileData?.isProVerified && (
             <Badge className="bg-green-100 text-green-800 hover:bg-green-100 px-3 py-1 flex items-center gap-1.5 border-green-200">
                <ShieldCheck className="h-4 w-4" />
                GauPro Verified
             </Badge>
          )}
        </div>

        <div className="space-y-8">
          {!profileData?.isProVerified && (
            <Alert variant="destructive" className="bg-red-100 border-red-500 text-red-800">
              <AlertCircle className="h-4 w-4 !text-red-800" />
              <AlertTitle className="font-normal">Action Required</AlertTitle>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <AlertDescription className="text-red-700">
                  Your account has limited access. Before we activate your
                  account, we need you to verify your profile.
                </AlertDescription>
                <Button asChild className="bg-white text-red-800 hover:bg-white/90 border border-red-500 flex-shrink-0">
                  <Link href="/pro/verify">Verify your ID</Link>
                </Button>
              </div>
            </Alert>
          )}

          {notifications.length > 0 && (
             <div className="space-y-3">
                <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Recent Notifications</p>
                {notifications.map(n => (
                  <Card key={n.id} className={cn(
                    "border-l-4 transition-colors",
                    n.status === 'unread' ? "border-l-primary bg-primary/5" : "border-l-muted bg-card"
                  )}>
                    <CardContent className="p-4 flex justify-between items-center">
                      <div className="flex-grow">
                        <div className="flex items-center gap-2">
                           <p className="font-bold text-sm">{n.title}</p>
                           {n.status === 'unread' && <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />}
                        </div>
                        <p className="text-xs text-muted-foreground mt-0.5">{n.message}</p>
                      </div>
                      <div className="flex items-center gap-4">
                          <Badge variant="outline" className="text-[10px] hidden sm:inline-flex">{n.createdAt?.seconds ? new Date(n.createdAt.seconds * 1000).toLocaleDateString() : 'Recently'}</Badge>
                          {n.status === 'unread' && (
                              <Button variant="ghost" size="sm" onClick={() => markAsRead(n.id)} className="h-8 text-[10px] font-bold uppercase tracking-wider text-primary hover:text-primary/80">
                                <CheckCircle2 className="h-3 w-3 mr-1" /> Mark as Read
                              </Button>
                          )}
                          {n.targetId && (
                              <Button asChild variant="secondary" size="sm" className="h-8 text-[10px] font-bold uppercase tracking-wider">
                                <Link href="/browse-quotes">View Lead</Link>
                              </Button>
                          )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
             </div>
          )}

          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="lg:col-span-2">
              <CardContent className="p-6 flex items-start justify-between">
                <div className="flex gap-4">
                  <Link href="/pro/profile/edit">
                    <div className="w-16 h-16 bg-gray-100 rounded-md flex items-center justify-center text-xs text-muted-foreground border relative overflow-hidden">
                      {profileData?.avatarSeed ? (
                         <Image src={profileData.avatarSeed} alt={`${profileData.name} logo`} fill className="object-cover" unoptimized />
                      ) : (
                         <span className="text-center">No Logo</span>
                      )}
                    </div>
                  </Link>
                  <div>
                    <h2 className="text-lg font-normal">
                      {profileData?.name || 'Your Business'}{' '}
                      <span className="text-green-600 text-sm font-medium">
                        (Active)
                      </span>
                    </h2>
                    <p className="text-sm text-muted-foreground capitalize">{profileData?.suburb ? `${profileData.suburb}, ` : ''}{profileData?.location || 'Your Location'}</p>
                    <Link href="/pro/profile/edit" className="text-primary text-sm font-medium hover:underline mt-1 inline-block">
                      Improve your business profile
                    </Link>
                  </div>
                </div>
                <div className="text-right flex-shrink-0">
                  <div className="flex items-center gap-2 justify-end">
                    <div className="bg-green-100 text-green-800 font-bold px-2 py-1 rounded text-sm">
                      {profileData?.rating?.toFixed(1) || '0.0'}
                    </div>
                    <div className="flex items-center gap-1 text-yellow-500 fill-yellow-500">
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4" />
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">{profileData?.reviews || 0} reviews</p>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg font-normal">Matching Requests</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-around text-center">
                    <div>
                      <p className="text-3xl font-bold text-primary">{matchingLeads.length}</p>
                      <p className="text-sm text-muted-foreground">Available</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-primary">{profileData?.leadCount || 0}</p>
                      <p className="text-sm text-muted-foreground">Purchased</p>
                    </div>
                  </div>
                  <Link href="/browse-quotes" className="text-primary text-sm font-medium hover:underline mt-4 block text-center">
                    Browse Marketplace
                  </Link>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-center gap-2">
                  <Wallet className="h-5 w-5 text-primary" />
                  <CardTitle className="text-lg font-normal">Credits</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                    <p className="text-5xl font-extrabold text-primary">
                        {profileData?.creditBalance ?? 0}
                    </p>
                    <Button variant="link" className="mt-2" asChild>
                      <Link href="/pro/buy-credits">Top up balance →</Link>
                    </Button>
                </CardContent>
              </Card>
            </div>

            {isAdmin && (
              <Card className="lg:col-span-3 border-primary/50 bg-primary/5 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-6 opacity-5">
                   <LayoutDashboard className="h-32 w-32" />
                </div>
                <CardHeader className="flex flex-row items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center gap-2 text-2xl font-bold text-primary">
                      <ShieldCheck className="h-6 w-6" />
                      Admin Hub
                    </CardTitle>
                    <p className="text-sm text-muted-foreground mt-1">
                      Consolidated oversight for marketplace operations and risk management.
                    </p>
                  </div>
                  <Button asChild size="lg">
                    <Link href="/pro/admin">
                      Open Command Center <ExternalLink className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardHeader>
              </Card>
            )}
          </div>

          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle className="flex items-center gap-2 text-lg font-normal">
                  <Briefcase className="h-6 w-6 text-primary" />
                  Top Job Matches in Your Area
                </CardTitle>
                <Button variant="secondary" asChild>
                  <Link href="/browse-quotes">View all leads</Link>
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              {loadingLeads ? (
                  <div className="space-y-4">
                      <Skeleton className="h-16 w-full" />
                      <Skeleton className="h-16 w-full" />
                  </div>
              ) : relevantLeads.length > 0 ? (
                <div className="space-y-4">
                  {relevantLeads.map(job => (
                    <div key={job.id} className="p-3 border rounded-md flex justify-between items-center hover:bg-secondary/50 transition-colors">
                      <div>
                        <p className="font-semibold text-foreground">Request for {job.category}</p>
                        <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                            <MapPin className="h-3 w-3" /> {job.location} • <Clock className="h-3 w-3 ml-1" /> {getPostedTime(job.createdAt)}
                        </p>
                      </div>
                      <Badge variant="outline">{job.category}</Badge>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                    <p className="text-muted-foreground">No leads found matching your specific category and service areas.</p>
                    <p className="text-xs text-muted-foreground mt-1">Check your <strong>Service Areas</strong> in profile settings to ensure you cover more suburbs.</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
      <SupportChatWidget />
    </div>
  );
}
