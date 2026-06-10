'use client';

import React, { useMemo } from 'react';
import { useCollection, useFirestore, useMemoFirebase, useUser } from '@/firebase';
import { collection, query, orderBy, where, DocumentData } from 'firebase/firestore';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { ShieldCheck, Clock, XCircle, Search, FileCheck, AlertCircle } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { VerificationDetailsDialog } from '@/components/pro/admin/verification-details-dialog';

export default function VerificationQueuePage() {
  const firestore = useFirestore();
  const { isUserLoading } = useUser();
  const [searchQuery, setSearchQuery] = React.useState('');

  const verificationsQuery = useMemoFirebase(() => {
    if (!firestore || isUserLoading) return null;
    return query(collection(firestore, 'verifications'), orderBy('submittedAt', 'desc'));
  }, [firestore, isUserLoading]);

  const { data: allVerifications, loading, error } = useCollection<DocumentData>(verificationsQuery);

  const stats = useMemo(() => {
    if (!allVerifications) return { pending: 0, approved: 0, rejected: 0 };
    return {
      pending: allVerifications.filter(v => v.status === 'pending').length,
      approved: allVerifications.filter(v => v.status === 'approved').length,
      rejected: allVerifications.filter(v => v.status === 'rejected').length,
    };
  }, [allVerifications]);

  const filteredVerifications = useMemo(() => {
    if (!allVerifications) return [];
    return allVerifications.filter(v => 
      v.userId.toLowerCase().includes(searchQuery.toLowerCase()) ||
      v.documentType.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [allVerifications, searchQuery]);

  if (error) {
    return (
      <div className="container mx-auto px-4 py-12">
        <Card className="bg-destructive/10 border-destructive">
          <CardContent className="pt-6">
            <div className="flex items-center gap-2 text-destructive">
              <AlertCircle className="h-5 w-5" />
              <p>Error loading verifications: {error}</p>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="py-12 md:py-16 bg-secondary/30 min-h-screen">
      <div className="container mx-auto px-4 max-w-6xl">
        <header className="mb-10">
          <h1 className="text-3xl font-bold tracking-tight">Verification Management</h1>
          <p className="text-muted-foreground mt-2">Review and manage professional identity verifications.</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <Clock className="h-5 w-5 text-orange-500" />
                <Badge variant="secondary" className="bg-orange-100 text-orange-700">Action Required</Badge>
              </div>
              <div className="mt-4">
                <p className="text-3xl font-bold">{stats.pending}</p>
                <p className="text-xs text-muted-foreground uppercase font-semibold">Pending Requests</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <ShieldCheck className="h-5 w-5 text-green-600" />
                <Badge variant="secondary" className="bg-green-100 text-green-700">Live Pros</Badge>
              </div>
              <div className="mt-4">
                <p className="text-3xl font-bold">{stats.approved}</p>
                <p className="text-xs text-muted-foreground uppercase font-semibold">Approved Total</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <XCircle className="h-5 w-5 text-red-600" />
                <Badge variant="secondary" className="bg-red-100 text-red-700">Blocked</Badge>
              </div>
              <div className="mt-4">
                <p className="text-3xl font-bold">{stats.rejected}</p>
                <p className="text-xs text-muted-foreground uppercase font-semibold">Rejected Total</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader className="border-b">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <CardTitle>Verification Queue</CardTitle>
              <div className="relative w-full md:w-72">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input 
                  placeholder="Search by User ID..." 
                  className="pl-9 h-9"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <Tabs defaultValue="pending" className="w-full">
              <div className="px-6 border-b bg-secondary/10">
                <TabsList className="bg-transparent h-12 gap-6">
                  <TabsTrigger value="pending" className="data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none px-0">
                    Pending
                  </TabsTrigger>
                  <TabsTrigger value="approved" className="data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none px-0">
                    Approved
                  </TabsTrigger>
                  <TabsTrigger value="rejected" className="data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none px-0">
                    Rejected
                  </TabsTrigger>
                </TabsList>
              </div>

              <div className="overflow-x-auto">
                {['pending', 'approved', 'rejected'].map((tabStatus) => (
                  <TabsContent key={tabStatus} value={tabStatus} className="mt-0">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>User UID</TableHead>
                          <TableHead>Doc Type</TableHead>
                          <TableHead>Submitted At</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead className="text-right">Action</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {loading ? (
                          Array.from({ length: 5 }).map((_, i) => (
                            <TableRow key={i}>
                              <TableCell><Skeleton className="h-4 w-24" /></TableCell>
                              <TableCell><Skeleton className="h-4 w-20" /></TableCell>
                              <TableCell><Skeleton className="h-4 w-32" /></TableCell>
                              <TableCell><Skeleton className="h-6 w-16 rounded-full" /></TableCell>
                              <TableCell className="text-right"><Skeleton className="h-8 w-20 ml-auto" /></TableCell>
                            </TableRow>
                          ))
                        ) : filteredVerifications.filter(v => v.status === tabStatus).length > 0 ? (
                          filteredVerifications.filter(v => v.status === tabStatus).map((ver) => (
                            <TableRow key={ver.id}>
                              <TableCell className="font-mono text-xs">{ver.userId}</TableCell>
                              <TableCell className="capitalize">{ver.documentType.replace(/-/g, ' ')}</TableCell>
                              <TableCell className="text-muted-foreground">{new Date(ver.submittedAt).toLocaleDateString()}</TableCell>
                              <TableCell>
                                <Badge variant={
                                  ver.status === 'approved' ? 'default' : 
                                  ver.status === 'rejected' ? 'destructive' : 'secondary'
                                } className="capitalize">
                                  {ver.status}
                                </Badge>
                              </TableCell>
                              <TableCell className="text-right">
                                <VerificationDetailsDialog verification={ver}>
                                  <Button variant="outline" size="sm">
                                    <FileCheck className="mr-2 h-4 w-4" />
                                    Review
                                  </Button>
                                </VerificationDetailsDialog>
                              </TableCell>
                            </TableRow>
                          ))
                        ) : (
                          <TableRow>
                            <TableCell colSpan={5} className="h-32 text-center text-muted-foreground">
                              No {tabStatus} requests found.
                            </TableCell>
                          </TableRow>
                        )}
                      </TableBody>
                    </Table>
                  </TabsContent>
                ))}
              </div>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
