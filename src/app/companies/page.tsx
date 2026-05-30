'use client';

import { useCollection, useFirestore, useMemoFirebase, useUser } from '@/firebase';
import { collection, DocumentData } from 'firebase/firestore';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

export default function CompaniesPage() {
  const firestore = useFirestore();
  const { isUserLoading } = useUser();
  
  const companiesQuery = useMemoFirebase(() => {
    // Wait for both firestore and auth state to be determined before creating the query.
    if (!firestore || isUserLoading) return null;
    // This query is for the 'companies' collection.
    return collection(firestore, 'companies');
  }, [firestore, isUserLoading]);
  
  const { data: companies, isLoading, error } = useCollection<DocumentData>(companiesQuery);

  const showLoadingSkeleton = isLoading || isUserLoading;

  const renderContent = () => {
    if (showLoadingSkeleton) {
      return (
        <div className="space-y-4">
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-10 w-full" />
        </div>
      );
    }

    if (error) {
      // The useCollection hook now throws the error, which is caught by Next.js error boundaries.
      // This is for graceful UI feedback if needed.
      return (
        <div className="text-destructive-foreground bg-destructive p-4 rounded-md">
          <p>An error occurred while fetching data. The permission error has been logged to the console and should now be resolved.</p>
        </div>
      );
    }

    if (!companies || companies.length === 0) {
      return <p className="text-center text-muted-foreground">No companies found in the database. The query was successful.</p>;
    }

    return (
      <ul className="space-y-2">
        {companies.map((company) => (
          <li key={company.id} className="p-3 border rounded-md bg-secondary">
            <p className="font-semibold text-secondary-foreground">{company.companyName || 'Unnamed Company'}</p>
            <p className="text-sm text-muted-foreground">{company.id}</p>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <main className="flex-grow bg-background">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <Card>
          <CardHeader>
            <CardTitle>Companies from Firestore</CardTitle>
          </CardHeader>
          <CardContent>
            {renderContent()}
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
