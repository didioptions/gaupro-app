'use client';

import { useCollection, useFirestore, useMemoFirebase } from '@/firebase';
import { collection, DocumentData } from 'firebase/firestore';
import { Skeleton } from '@/components/ui/skeleton';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHeader, TableHead, TableRow } from '@/components/ui/table';

export default function SeedDataViewerPage() {
  const firestore = useFirestore();
  
  const profilesQuery = useMemoFirebase(() => {
    if (!firestore) return null;
    return collection(firestore, 'professionalProfiles');
  }, [firestore]);
  
  const { data: profiles, isLoading, error } = useCollection<DocumentData>(profilesQuery);

  const renderContent = () => {
    if (isLoading) {
      return (
        <div className="space-y-4">
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-10 w-full" />
        </div>
      );
    }

    if (error) {
      return (
        <div className="text-destructive-foreground bg-destructive p-4 rounded-md">
          <p>Error loading data: {error.message}</p>
        </div>
      );
    }

    if (!profiles || profiles.length === 0) {
      return <p className="text-center text-muted-foreground">No data found in the 'professionalProfiles' collection.</p>;
    }

    return (
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Company Name</TableHead>
            <TableHead>Service Category</TableHead>
            <TableHead>Location</TableHead>
            <TableHead>Rating</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {profiles.map((profile) => (
            <TableRow key={profile.id}>
              <TableCell>{profile.name || 'N/A'}</TableCell>
              <TableCell>{profile.serviceCategory || 'N/A'}</TableCell>
              <TableCell>{profile.location || 'N/A'}</TableCell>
              <TableCell>{profile.rating || 'N/A'}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  };

  return (
    <div className="py-12 md:py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <h1 className="text-3xl md:text-4xl font-normal mb-8 text-center">Firestore Data Viewer</h1>
        <p className="text-center text-muted-foreground mb-8">
          This page displays the current data from your 'professionalProfiles' collection in Firestore. This is a read-only view to help you verify your data.
        </p>
        <Card>
          <CardHeader>
            <CardTitle>Professional Profiles</CardTitle>
          </CardHeader>
          <CardContent>
            {renderContent()}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
