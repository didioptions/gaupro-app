'use client';

import { useEffect, useState, useMemo } from 'react';
import { AlertCircle, Star, UserPlus, Image as ImageIcon, Briefcase, Activity, ShieldCheck, FileCheck, Wallet, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import Link from 'next/link';
import { useUser, useFirestore } from '@/firebase';
import { InviteFriendsDialog } from '@/components/pro/invite-friends-dialog';
import { SupportChatWidget } from '@/components/pro/support-chat-widget';
import { collection, query, where, getDocs, limit, orderBy } from 'firebase/firestore';
import { Skeleton } from '@/components/ui/skeleton';
import Image from 'next/image';
import { jobRequests } from '@/lib/job-requests-data';
import { Badge } from '@/components/ui/badge';
import { allServices } from '@/lib/service-questions';

interface ProfessionalProfile {
  name?: string;
  location?: string;
  avatarSeed?: string;
  rating?: number;
  reviews?: number;
  tags?: string[];
  serviceCategory?: string;
  isProVerified?: boolean;
}

export default function ProDashboardPage() {
  const { user, profile, isUserLoading } = useUser();
  const firestore = useFirestore();
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

    const fetchData = async () => {
      try {
        // Fetch Profile
        const q = query(collection(firestore, "professionalProfiles"), where("userId", "==", user.uid));
        const querySnapshot = await getDocs(q);
        if (!querySnapshot.empty) {
          const profileDoc = querySnapshot.docs[0];
          setProfileData(profileDoc.data() as ProfessionalProfile);
        }

        // Fetch Notifications
        const nQ = query(
          collection(firestore, 'users', user.uid, 'notifications'),
          orderBy('createdAt', 'desc'),
          limit(3)
        );
        const nSnap = await getDocs(nQ);
        setNotifications(nSnap.docs.map(d => ({ id: d.id, ...d.data() })));

      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [user, isUserLoading, firestore]);

  const relevantLeads = useMemo(() => {
    if (!profileData) return [];
    
    const proServices = profileData.tags || [allServices.find(s => s.value === profileData.serviceCategory)?.label || ''];
    
    return jobRequests.filter(job => 
      proServices.some((service: string) => service && job.category.toLowerCase().includes(service.toLowerCase()))
    ).slice(0, 3);

  }, [profileData]);

  if (isLoading || isUserLoading) {
    return (
      <div className="py-12 md:py-16">
        <div className="container mx-auto px-4 space-y-8">
          <Skeleton className="h-10 w-1/3" />
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
    <>
      <div className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl md:text-4xl font-normal">Dashboard</h1>
            {profileData?.isProVerified && (
               <Badge className="bg-green-100 text-green-800 hover:bg-green-100 px-3 py-1 flex items-center gap-1.5 border-green-200">
                  <ShieldCheck className="h-4 w-4" />
                  GauPro Verified
               </Badge>
            )}
          </div>

          <div className="space-y-8">
            {!profileData?.isProVerified && (
              <Alert
                variant="destructive"
                className="bg-red-100 border-red-500 text-red-800"
              >
                <AlertCircle className="h-4 w-4 !text-red-800" />
                <AlertTitle className="font-normal">Action Required</AlertTitle>
                <div className="flex justify-between items-center">
                  <AlertDescription className="text-red-700">
                    Your account has limited access. Before we activate your
                    account, we need you to verify your profile to maintain a
                    trusted marketplace. We need your identification such as ID or Passport.
                  </AlertDescription>
                  <Button asChild className="bg-white text-red-800 hover:bg-white/90 border border-red-500 flex-shrink-0 ml-4">
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
                        <Badge variant="outline" className="text-[10px]">{new Date(n.createdAt?.seconds * 1000).toLocaleDateString()}</Badge>
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
                      <Link
                        href="/pro/profile/edit"
                        className="text-primary text-sm font-medium hover:underline mt-1 inline-block"
                      >
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
                  <CardTitle className="text-lg font-normal">
                    Quote Status
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-around text-center">
                    <div>
                      <p className="text-3xl font-bold text-primary">88</p>
                      <p className="text-sm text-muted-foreground">Received</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-primary">0</p>
                      <p className="text-sm text-muted-foreground">Purchased</p>
                    </div>
                  </div>
                  <Link
                    href="/browse-quotes"
                    className="text-primary text-sm font-medium hover:underline mt-4 block text-center"
                  >
                    View your Latest Requests
                  </Link>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg text-center font-normal">
                    Credits
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-5xl font-extrabold text-primary">25</p>
                </CardContent>

              <Card>
                <CardContent className="p-6">
                  <InviteFriendsDialog user={user}>
                    <Button variant="outline" className="w-full h-16 text-lg">
                      <UserPlus className="mr-2 h-6 w-6" />
                      Invite Friends
                    </Button>
                  </InviteFriendsDialog>
                </CardContent>

              {/* Admin Only Tools */}
              {isAdmin && (
                <>
                  <Card className="border-primary/50 bg-primary/5">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-lg font-normal">
                        <FileCheck className="h-6 w-6 text-primary" />
                        Verification Queue
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        Review identity documents and approve verified pros.
                      </p>
                      <Button asChild variant="secondary" className="w-full">
                        <Link href="/pro/admin/verifications">
                          Manage Requests
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="border-primary/50 bg-primary/5">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-lg font-normal">
                        <MessageSquare className="h-6 w-6 text-primary" />
                        Review Moderation
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        Approve, reject, or flag reviews and resolve disputes.
                      </p>
                      <Button asChild variant="secondary" className="w-full">
                        <Link href="/pro/admin/reviews">
                          Moderation Hub
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="border-primary/50 bg-primary/5">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-lg font-normal">
                        <Wallet className="h-6 w-6 text-primary" />
                        Credit Manager
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        Adjust professional balances and view transaction history.
                      </p>
                      <Button asChild variant="secondary" className="w-full">
                        <Link href="/pro/admin/credits">
                          Financial Tools
                        </Link>
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
                    New Leads
                  </CardTitle>
                  <Button variant="secondary" asChild>
                    <Link href="/browse-quotes">View all leads</Link>
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                {relevantLeads.length > 0 ? (
                  <div className="space-y-4">
                    {relevantLeads.map(job => (
                      <div key={job.id} className="p-3 border rounded-md flex justify-between items-center">
                        <div>
                          <p className="font-semibold">{job.title}</p>
                          <p className="text-sm text-muted-foreground">{job.location} &bull; {job.posted}</p>
                        </div>
                        <Badge variant="outline">{job.category}</Badge>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-muted-foreground text-center py-4">No new leads right now.</p>
                )}
              </CardContent>
            </Card>

          </div>
        </div>
      </div>
      <SupportChatWidget />
    </>
  );
}