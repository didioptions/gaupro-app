'use client';

import { useEffect, useState } from 'react';
import { AlertCircle, Users, MapPin, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
} from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/alert';
import { Progress } from '@/components/ui/progress';
import Link from 'next/link';
import Image from 'next/image';
import { useUser, useFirestore } from '@/firebase';
import { collection, query, where, onSnapshot } from 'firebase/firestore';
import { Skeleton } from '@/components/ui/skeleton';
import { useToast } from '@/hooks/use-toast';

interface BusinessProfile {
  id: string;
  name?: string;
  location?: string;
  avatarSeed?: string;
  isProVerified?: boolean;
  description?: string;
  photos?: string[];
  reviews?: number;
  [key: string]: any;
}

export default function ProProfilePage() {
  const { user, isUserLoading } = useUser();
  const firestore = useFirestore();
  const { toast } = useToast();
  const [profiles, setProfiles] = useState<BusinessProfile[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (isUserLoading) return;
    if (!user || !firestore) {
      setLoading(false);
      return;
    }

    const q = query(
      collection(firestore, 'professionalProfiles'),
      where('userId', '==', user.uid)
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const profileData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as BusinessProfile[];
      setProfiles(profileData);
      setLoading(false);
    }, (error) => {
      // Silently fail profile listening for production
      setLoading(false);
    });

    return () => unsubscribe();
  }, [user, isUserLoading, firestore]);

  const calculateProfileStrength = (profile: BusinessProfile) => {
    let score = 0;
    const totalPossible = 5;
    
    if (profile.name) score++;
    if (profile.location) score++;
    if (profile.description) score++;
    if (profile.avatarSeed) score++;
    if (profile.photos && profile.photos.length >= 5) score++;
    
    return Math.round((score / totalPossible) * 100);
  };

  const handleAddNewBusiness = () => {
    toast({
        title: 'Feature Restricted',
        description: 'The current version of Gaupro is limited to one business profile per account.',
    });
  }

  if (isUserLoading || loading) {
    return (
      <div className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl space-y-8">
          <Skeleton className="h-10 w-1/3" />
          <Skeleton className="h-24 w-full" />
          <Skeleton className="h-48 w-full" />
        </div>
      </div>
    );
  }

  const hasUnverifiedProfile = profiles.some(p => !p.isProVerified);

  return (
    <div className="py-12 md:py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-3xl md:text-4xl mb-8 font-normal">
          Business Profiles
        </h1>

        <div className="space-y-8">
          {hasUnverifiedProfile && (
            <Alert variant="destructive" className="bg-red-100 border-red-500 text-red-800">
              <AlertCircle className="h-4 w-4 !text-red-800" />
              <AlertTitle className="font-bold">Action Required</AlertTitle>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <AlertDescription className="text-red-700">
                      Your account has limited access. Before we activate your account, we need you to verify your profile to maintain a trusted and safe marketplace for everyone.
                  </AlertDescription>
                  <Button asChild className="bg-white text-red-800 hover:bg-white/90 border border-red-500 flex-shrink-0">
                    <Link href="/pro/verify">Verify your ID</Link>
                  </Button>
              </div>
            </Alert>
          )}

          {profiles.length > 0 ? (
            profiles.map((profile) => {
              const strength = calculateProfileStrength(profile);
              return (
                <Card key={profile.id}>
                  <CardContent className="p-6">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                          <div className="md:col-span-2">
                              <div className="flex gap-4">
                                  <div className="relative w-24 h-24 rounded-md border overflow-hidden bg-secondary/30 shrink-0">
                                    {profile.avatarSeed ? (
                                      <Image
                                        src={profile.avatarSeed}
                                        alt={`${profile.name} logo`}
                                        fill
                                        className="object-cover"
                                        unoptimized
                                      />
                                    ) : (
                                      <div className="w-full h-full flex items-center justify-center">
                                        <Users className="h-8 w-8 text-muted-foreground/30" />
                                      </div>
                                    )}
                                  </div>
                                  <div>
                                      <h2 className="text-xl font-bold flex items-center gap-2">
                                          {profile.name || 'Untitled Business'} 
                                          <span className="text-green-600 text-sm font-medium">(Active)</span>
                                      </h2>
                                      <p className="text-muted-foreground flex items-center gap-1 text-sm mt-1">
                                        <MapPin className="h-3.5 w-3.5" />
                                        {profile.location || 'Location not set'}
                                      </p>
                                      <Link href="/pro/dashboard" className="text-primary text-sm font-medium hover:underline mt-2 inline-block">
                                          Get Customer Reviews
                                      </Link>
                                  </div>
                              </div>
                               <div className="mt-6 flex flex-wrap gap-2">
                                  {!profile.isProVerified && (
                                    <Button variant="outline" asChild size="sm">
                                      <Link href="/pro/verify">Get Verified</Link>
                                    </Button>
                                  )}
                                  <Button variant="outline" asChild size="sm">
                                      <Link href="/pro/profile/edit">Edit Profile</Link>
                                  </Button>
                              </div>
                          </div>
                          <div className="border-t md:border-t-0 md:border-l md:pl-6 pt-6 md:pt-0">
                              <h3 className="font-bold text-sm text-foreground uppercase tracking-wider">Profile Strength</h3>
                              <div className="flex items-center gap-3 mt-3">
                                  <Progress value={strength} className="h-2 flex-grow" />
                                  <span className="text-sm font-bold text-foreground w-10 text-right">{strength}%</span>
                              </div>
                              <div className="mt-6 bg-secondary/20 p-3 rounded-lg">
                                  <h4 className="font-bold text-xs text-foreground uppercase tracking-widest mb-2">Next Steps</h4>
                                  <ul className="text-xs text-muted-foreground space-y-2">
                                      {!profile.photos?.length && (
                                        <li className="flex items-start gap-2">
                                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1" />
                                          Upload 5+ photos of your work
                                        </li>
                                      )}
                                      {!profile.reviews && (
                                        <li className="flex items-start gap-2">
                                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1" />
                                          Request your first reviews
                                        </li>
                                      )}
                                      {!profile.description && (
                                        <li className="flex items-start gap-2">
                                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1" />
                                          Add a business description
                                        </li>
                                      )}
                                  </ul>
                                  <Link href="/pro/profile/edit" className="text-primary text-[11px] font-bold hover:underline mt-3 block">
                                      Improve your profile →
                                  </Link>
                              </div>
                          </div>
                      </div>
                  </CardContent>
                </Card>
              );
            })
          ) : (
            <Card className="border-dashed">
                <CardContent className="p-12 text-center">
                    <Users className="h-12 w-12 text-muted-foreground/30 mx-auto mb-4" />
                    <p className="text-lg font-medium text-muted-foreground">No business profiles found.</p>
                    <Button className="mt-4" asChild>
                        <Link href="/pro/profile/edit">Create Your First Profile</Link>
                    </Button>
                </CardContent>
            </Card>
          )}

          <Card className="bg-secondary/30">
            <CardContent className="p-8 flex flex-col items-center justify-center text-center">
                <Users className="h-10 w-10 text-muted-foreground/50 mb-4"/>
                <p className="text-lg font-medium mb-4">Need to manage multiple businesses?</p>
                <Button className="bg-red-600 hover:bg-red-700 font-bold" onClick={handleAddNewBusiness}>
                  Add a new Business
                </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
