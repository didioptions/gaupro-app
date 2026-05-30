'use client';

import { useMemo } from 'react';
import { useCollection, useFirestore, useMemoFirebase, useUser } from '@/firebase';
import { collection, query, orderBy, limit } from 'firebase/firestore';
import ProfessionalCard, { Professional } from '@/components/services/professional-card';
import { Card, CardContent } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function FeaturedProfessionals() {
  const firestore = useFirestore();
  const { isUserLoading } = useUser();

  const professionalsQuery = useMemoFirebase(() => {
    // Wait for both firestore and auth state to be determined before creating the query.
    if (!firestore || isUserLoading) return null;
    return query(
      collection(firestore, 'professionalProfiles'),
      orderBy('rating', 'desc'),
      orderBy('priorityRank', 'desc'),
      limit(4)
    );
  }, [firestore, isUserLoading]);

  const { data: professionals, loading: isLoading } = useCollection<Professional>(professionalsQuery);

  const showLoadingSkeleton = isLoading || isUserLoading;

  return (
    <section className="py-20 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-normal mb-4">
            Meet Some of Our Top-Rated Professionals
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Thousands of happy customers have rated these pros among the best in South Africa for their quality, service, and reliability.
          </p>
        </div>

        {showLoadingSkeleton ? (
          <div className="grid md:grid-cols-2 gap-8">
            {Array.from({ length: 4 }).map((_, index) => (
               <Card key={index}>
                    <CardContent className="p-6">
                        <div className="grid sm:grid-cols-4 gap-6">
                            <div className="sm:col-span-3 flex items-start gap-4">
                                <Skeleton className="h-20 w-20 rounded-md" />
                                <div className="space-y-2 flex-grow">
                                    <Skeleton className="h-6 w-3/4" />
                                    <Skeleton className="h-4 w-1/4" />
                                    <Skeleton className="h-4 w-full" />
                                    <Skeleton className="h-4 w-5/6" />
                                </div>
                            </div>
                            <div className="space-y-2 text-left sm:text-right">
                                <Skeleton className="h-6 w-16 ml-auto" />
                                <Skeleton className="h-4 w-20 ml-auto" />
                                <Skeleton className="h-10 w-32 mt-4 ml-auto" />
                            </div>
                        </div>
                    </CardContent>
                </Card>
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-8">
            {professionals?.map((pro) => (
              <ProfessionalCard key={pro.id} professional={pro} service={pro.serviceCategory} />
            ))}
          </div>
        )}
        
        <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg">
                <Link href="/browse-categories">Find More Professionals</Link>
            </Button>
        </div>
      </div>
    </section>
  );
}
