
'use client';

import { useEffect, useState } from 'react';
import { AlertCircle, Star, UserPlus, Image as ImageIcon } from 'lucide-react';
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
import { collection, query, where, getDocs } from 'firebase/firestore';
import { Skeleton } from '@/components/ui/skeleton';
import Image from 'next/image';

export default function ProDashboardPage() {
  const { user, isUserLoading } = useUser();
  const firestore = useFirestore();
  const [profileData, setProfileData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isUserLoading) return;
    if (!user) {
      setIsLoading(false);
      return;
    }

    const fetchProfile = async () => {
      try {
        const q = query(collection(firestore, "professionals"), where("userId", "==", user.uid));
        const querySnapshot = await getDocs(q);
        if (!querySnapshot.empty) {
          const profileDoc = querySnapshot.docs[0];
          setProfileData(profileDoc.data());
        }
      } catch (error) {
        console.error("Error fetching profile:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProfile();
  }, [user, isUserLoading, firestore]);

  if (isLoading) {
    return (
      <div className="py-12 md:py-16">
        <div className="container mx-auto px-4 space-y-8">
          <Skeleton className="h-10 w-1/3" />
          <Skeleton className="h-24 w-full" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Skeleton className="h-48 lg:col-span-2" />
            <Skeleton className="h-48" />
            <Skeleton className="h-32" />
            <Skeleton className="h-32" />
            <Skeleton className="h-32" />
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <>
      <div className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-normal mb-8">Dashboard</h1>

          <div className="space-y-8">
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
                  trusted workplace. We need your ID and utility bill.
                </AlertDescription>
                <Button asChild className="bg-white text-red-800 hover:bg-white/90 border border-red-500 flex-shrink-0 ml-4">
                  <Link href="/pro/verify">Verify your ID</Link>
                </Button>
              </div>
            </Alert>

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
                        <Star className="w-4 h-4" />
                        <Star className="w-4 h-4" />
                        <Star className="w-4 h-4" />
                        <Star className="w-4 h-4" />
                        <Star className="w-4 h-4" />
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">{profileData?.reviews || 0} reviews</p>
                     <Link
                        href="#"
                        className="text-primary text-sm font-medium hover:underline mt-1 inline-block"
                      >
                        Get Customer Reviews
                      </Link>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg font-normal">
                    Customer Requests Summary
                  </CardTitle>
                  <CardDescription>Last 30 Days</CardDescription>
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
                    View your Latest Customer Requests
                  </Link>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg text-center font-normal">
                    Credits Available
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-5xl font-extrabold text-primary">25</p>
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

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg font-normal">
                    <ImageIcon className="h-6 w-6 text-primary" />
                    Media Manager
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col items-center text-center">
                  <p className="text-sm text-muted-foreground mb-4">
                    Upload new images for your site and get their URLs here. This is your personal tool to manage all media assets.
                  </p>
                  <Button asChild variant="secondary" className="w-full">
                    <Link href="/pro/admin/media-manager">
                      Open Media Manager
                    </Link>
                  </Button>
                </CardContent>
              </Card>
              
            </div>
          </div>
        </div>
      </div>
      <SupportChatWidget />
    </>
  );
}
