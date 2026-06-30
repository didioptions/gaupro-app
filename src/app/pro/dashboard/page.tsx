'use client';

import { useEffect, useState, useMemo } from 'react';
import { 
  AlertCircle, 
  Star, 
  UserPlus, 
  ShieldCheck, 
  Briefcase, 
  Activity, 
  FileCheck, 
  Wallet, 
  MessageSquare, 
  Users, 
  ShieldAlert, 
  LayoutDashboard, 
  ExternalLink, 
  RefreshCcw, 
  LogOut, 
  MapPin, 
  Clock 
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
import { useUser, useFirestore, useAuth, useCollection, useMemoFirebase } from '@/firebase';
import { collection, query, where, limit, orderBy, onSnapshot, doc } from 'firebase/firestore';
import { Skeleton } from '@/components/ui/skeleton';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { allServices } from '@/lib/service-questions';
import { signOut } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { InviteFriendsDialog } from '@/components/pro/invite-friends-dialog';
import { SupportChatWidget } from '@/components/pro/support-chat-widget';

interface ProfessionalProfile {
  id?: string;
  name?: string;
  location?: string;
  avatarSeed?: string;
  rating?: number;
  reviews?: number;
  tags?: string[];
  serviceCategory?: string;
  isProVerified?: boolean;
  creditBalance?: number;
  leadCount?: number;
  userId?: string;
}

export default function ProDashboardPage() {
  const { user, profile, isUserLoading, userError } = useUser();
  const firestore = useFirestore();
  const auth = useAuth();
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
    }, (error) => {
      console.error("Profile listener error:", error);
      setIsLoading(false);
    });

    const nQ = query(
        collection(firestore, 'users', user.uid, 'notifications'),
        orderBy('createdAt', 'desc'),
        limit(3)
    );
    const unsubscribeNotifications = onSnapshot(nQ, (snapshot) => {
        setNotifications(snapshot.docs.map(d => ({ id: d.id, ...d.data() })));
    }, (error) => {
        console.error("Notifications listener error:", error);
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
          limit(50)
      );
  }, [firestore, isUserLoading]);

  const { data: allLeads, loading: loadingLeads } = useCollection(leadsQuery);

  const matchingLeads = useMemo(() => {
    if (!profileData || !allLeads) return [];
    const categoryLabel = allServices.find(s => s.value === profileData.serviceCategory)?.label || '';
    const proServices = [...(profileData.tags || []), categoryLabel].filter(Boolean).map(s => s.toLowerCase());
    
    if (proServices.length === 0) return [];

    return allLeads.filter(job => 
      proServices.some((service: string) => job.category.toLowerCase().includes(service))
    );
  }, [profileData, allLeads]);

  const relevantLeads = useMemo(() => matchingLeads.slice(0, 3), [matchingLeads]);

  const handleLogout = async () => {
    if (auth) {
      try {
        await signOut(auth);
        window.location.href = '/';
      } catch (error) {
        console.error("Logout error:", error);
      }
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
                  <Card key={n.id} className="border-l-4 border-l-primary">
                    <CardContent className="p-4 flex justify-between items-center">
                      <div>
                        <p className="font-bold text-sm">{n.title}</p>
                        <p className="text-xs text-muted-foreground">{n.message}</p>
                      </div>
                      <Badge variant="outline" className="text-[10px]">{n.createdAt?.seconds ? new Date(n.createdAt.seconds * 1000).toLocaleDateString() : 'Recently'}</Badge>
                    </CardContent>
                  </Card>
                ))}
             </div>
          )}

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="lg:col-span-2">
              <CardContent className="p-6 flex items-start justify-between">
                <div className="flex gap-4">
                  <Link href="/pro/profile/edit">
                    <div className="w-16 h-16 bg-gray-100 rounded-md flex items-center justify-center text-xs text-muted-foreground border relative overflow-hidden">
                      {profileData?.avatarSeed ? (
                         <Image src={profileData.avatarSeed} alt={`${profileData.name} logo`} fill className="object-cover" />
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
                    <p className="text-sm text-muted-foreground">{profileData?.location || 'Your Location'}</p>
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
                    <div className="flex items-center gap-1 text-gray-400">
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

            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-normal">Quote Status</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-around text-center">
                  <div>
                    <p className="text-3xl font-bold text-primary">{matchingLeads.length}</p>
                    <p className="text-sm text-muted-foreground">Received</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-primary">{profileData?.leadCount || 0}</p>
                    <p className="text-sm text-muted-foreground">Purchased</p>
                  </div>
                </div>
                <Link href="/browse-quotes" className="text-primary text-sm font-medium hover:underline mt-4 block text-center">
                  View your Latest Requests
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle className="text-lg text-center font-normal">Credits</CardTitle></CardHeader>
              <CardContent className="text-center">
                  <p className="text-5xl font-extrabold text-primary">
                      {profileData?.creditBalance ?? 0}
                  </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <InviteFriendsDialog user={user}>
                  <Button variant="outline" className="w-full h-16 text-lg">
                    <UserPlus className="mr-2 h-6 w-6" />
                    Invite Friends
                  </Button>
                </InviteFriendsDialog>
              </CardContent>
            </Card>

            {isAdmin && (
              <>
                <Card className="lg:col-span-3 border-primary/50 bg-primary/5 relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-6 opacity-5">
                     <LayoutDashboard className="h-32 w-32" />
                  </div>
                  <CardHeader className="flex flex-row items-center justify-between">
                    <div>
                      <CardTitle className="flex items-center gap-2 text-2xl font-bold text-primary">
                        <ShieldCheck className="h-6 w-6" />
                        Admin command center
                      </CardTitle>
                      <p className="text-sm text-muted-foreground mt-1">
                        Consolidated oversight for marketplace operations and risk management.
                      </p>
                    </div>
                    <Button asChild size="lg">
                      <Link href="/pro/admin">
                        Open Admin Hub <ExternalLink className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardHeader>
                </Card>

                <Card className="border-red-200 bg-red-50">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg font-bold text-red-800">
                      <ShieldAlert className="h-6 w-6 text-red-600" />
                      Risk Center
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-xs text-red-700 mb-4">
                      Review identity fraud alerts and behavior flags.
                    </p>
                    <Button asChild variant="destructive" className="w-full">
                      <Link href="/pro/admin/fraud">View Alerts</Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="border-primary/50 bg-primary/5">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg font-normal">
                      <Users className="h-6 w-6 text-primary" />
                      Customers
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Manage user accounts, view histories, and handle support.
                    </p>
                    <Button asChild variant="secondary" className="w-full">
                      <Link href="/pro/admin/customers">CRM Center</Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="border-primary/50 bg-primary/5">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg font-normal">
                      <Briefcase className="h-6 w-6 text-primary" />
                      Leads & Quality
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Oversight of job requests and automated quality scoring.
                    </p>
                    <Button asChild variant="secondary" className="w-full">
                      <Link href="/pro/admin/leads">Manage Flow</Link>
                    </Button>
                  </CardContent>
                </Card>
              </>
            )}
          </div>

          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle className="flex items-center gap-2 text-lg font-normal">
                  <Briefcase className="h-6 w-6 text-primary" />
                  New Leads Matching Your Profile
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
                    <p className="text-muted-foreground">No new matching leads found.</p>
                    <p className="text-xs text-muted-foreground mt-1">Try adding more service keywords to your profile to see more leads.</p>
                </div>
              )}
            </CardContent>
          </Card>
          
          <Card className="bg-yellow-50 border-yellow-200">
              <CardHeader>
                  <CardTitle className="text-sm font-bold text-yellow-800 uppercase tracking-widest flex items-center gap-2">
                      <RefreshCcw className="h-4 w-4" /> Admin Access Diagnostic
                  </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div className="p-3 bg-white rounded border">
                          <p className="text-xs text-muted-foreground uppercase font-bold">Your Auth UID</p>
                          <p className="font-mono text-xs break-all mt-1">{user?.uid}</p>
                          <p className="text-[10px] text-blue-600 mt-1 italic">Make sure this matches the Document ID in your 'users' collection exactly.</p>
                      </div>
                      <div className="p-3 bg-white rounded border">
                          <p className="text-xs text-muted-foreground uppercase font-bold">Role Found</p>
                          <p className="font-bold text-foreground mt-1 capitalize">{profile?.role || 'None Found'}</p>
                          {userError && <p className="text-xs text-red-600 mt-1 font-bold">Error: {userError.message}</p>}
                          <p className="text-[10px] text-blue-600 mt-1 italic">If this says 'None', the app can't see your admin document.</p>
                      </div>
                  </div>
                  
                  {!isAdmin && (
                      <div className="p-4 bg-white rounded border border-yellow-300 text-sm text-yellow-900">
                          <p className="font-bold mb-2">Still can't see the Admin Hub?</p>
                          <ol className="list-decimal list-inside space-y-1">
                              <li>Check that the collection is named <b>users</b> (lowercase, with an 's').</li>
                              <li>Verify your UID above exactly matches the Document ID in Firestore.</li>
                              <li>Make sure the `users` folder is at the <b>TOP LEVEL</b> of your database.</li>
                              <li>If you just added it, click the button below to force a refresh.</li>
                          </ol>
                          <Button variant="outline" className="mt-4 w-full gap-2 border-yellow-400 text-yellow-900 hover:bg-yellow-100" onClick={handleLogout}>
                              <LogOut className="h-4 w-4" /> Force Refresh (Sign Out)
                          </Button>
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