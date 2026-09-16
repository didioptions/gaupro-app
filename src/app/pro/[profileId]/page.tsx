
'use client';

import { useParams, useSearchParams, notFound } from 'next/navigation';
import { useDoc, useFirestore, useCollection, useMemoFirebase } from '@/firebase';
import { doc, DocumentData, collection, query, where, orderBy, limit } from 'firebase/firestore';
import { useMemo, Suspense } from 'react';

import ProfileDisplay from '@/components/pro/profile-display';
import type { Professional } from '@/components/pro/profile-display';
import { Skeleton } from '@/components/ui/skeleton';
import { Card, CardContent } from '@/components/ui/card';

// Metadata is handled by a separate server component or refined client side if needed.
// In Next.js App Router, for dynamic routes, we use generateMetadata in a server component.
// Since this is a client component, we'll keep the layout logic and ensure the parent handles metadata.

function ProfilePageContent() {
  const params = useParams();
  const searchParams = useSearchParams();
  const firestore = useFirestore();

  const profileId = typeof params.profileId === 'string' ? params.profileId : '';

  const professionalDocRef = useMemo(() => {
    if (!firestore || !profileId) return null;
    return doc(firestore, 'professionalProfiles', profileId);
  }, [firestore, profileId]);

  const { data: professionalData, isLoading, error } = useDoc<DocumentData>(professionalDocRef);

  const reviewsQuery = useMemoFirebase(() => {
    if (!firestore || !profileId) return null;
    return query(
      collection(firestore, 'professionalProfiles', profileId, 'reviews'),
      where('status', '==', 'approved'),
      orderBy('dateCreated', 'desc'),
      limit(20)
    );
  }, [firestore, profileId]);

  const { data: reviews, loading: isLoadingReviews } = useCollection(reviewsQuery);

  const serviceQuery = searchParams.get('service') || 'general services';
  
  if (isLoading) {
    return (
      <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
                <Card>
                    <CardContent className="p-6">
                        <div className="flex flex-col sm:flex-row gap-6">
                            <Skeleton className="h-28 w-28 rounded-md" />
                            <div className="space-y-3 flex-grow">
                                <Skeleton className="h-8 w-3/4" />
                                <Skeleton className="h-5 w-1/4" />
                                <Skeleton className="h-5 w-full" />
                            </div>
                            <div className="space-y-3 text-center">
                                  <Skeleton className="h-16 w-16 mx-auto" />
                                  <Skeleton className="h-4 w-20 mx-auto" />
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="p-6">
                          <Skeleton className="h-40 w-full" />
                    </CardContent>
                </Card>
            </div>
            <div className="space-y-6">
                <Card><CardContent className="p-6"><Skeleton className="h-24 w-full" /></CardContent></Card>
                <Card><CardContent className="p-6"><Skeleton className="h-24 w-full" /></CardContent></Card>
            </div>
        </div>
      </div>
    );
  }

  if (error) {
     return (
        <div className="text-center py-20">
            <p className="text-destructive font-bold">Error loading profile</p>
        </div>
     )
  }

  if (!professionalData) {
    notFound();
  }

  const singularOrPluralLowercase = serviceQuery.endsWith('s') ? serviceQuery.toLowerCase() : `${serviceQuery.toLowerCase()}s`;
  
  let description = professionalData.description || '';
  description = description.replace('{service}', singularOrPluralLowercase);

  const processedProfessional: Professional = {
    ...(professionalData as unknown as Omit<Professional, 'id'>),
    id: profileId,
    description: description,
    tags: professionalData.tags || [singularOrPluralLowercase],
    reviewData: reviews || [],
    serviceCategory: professionalData.serviceCategory || 'Professional Service',
  };

  return (
    <ProfileDisplay professional={processedProfessional} />
  );
}

export default function ProfessionalProfilePage() {
  return (
    <main className="bg-secondary/50 py-12 min-h-screen">
      <Suspense fallback={<div className="container mx-auto px-4"><Skeleton className="h-96 w-full" /></div>}>
        <ProfilePageContent />
      </Suspense>
    </main>
  );
}
