'use client';

import React, { useMemo, useState } from 'react';
import { useCollection, useFirestore, useMemoFirebase, useUser } from '@/firebase';
import { collectionGroup, query, orderBy, limit, DocumentData } from 'firebase/firestore';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Star, 
  Search, 
  ShieldAlert, 
  BarChart3,
} from 'lucide-react';
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
} from 'recharts';
import { ReviewModerationDialog } from '@/components/pro/admin/review-moderation-dialog';

const COLORS = ['#10b981', '#f59e0b', '#ef4444', '#6366f1', '#8b5cf6'];

export default function ReviewModerationPage() {
  const firestore = useFirestore();
  const { isUserLoading } = useUser();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('pending');

  // Fetch all reviews using Collection Group Query
  const reviewsQuery = useMemoFirebase(() => {
    if (!firestore || isUserLoading) return null;
    return query(collectionGroup(firestore, 'reviews'), orderBy('dateCreated', 'desc'), limit(100));
  }, [firestore, isUserLoading]);

  const { data: reviews, loading } = useCollection<DocumentData>(reviewsQuery);

  const stats = useMemo(() => {
    if (!reviews) return { pending: 0, approved: 0, rejected: 0, flagged: 0, total: 0 };
    return {
      pending: reviews.filter(r => r.status === 'pending').length,
      approved: reviews.filter(r => r.status === 'approved').length,
      rejected: reviews.filter(r => r.status === 'rejected').length,
      flagged: reviews.filter(r => r.status === 'flagged' || (r.fraudScore && r.fraudScore > 50)).length,
      total: reviews.length
    };
  }, [reviews]);

  const chartData = [
    { name: 'Approved', value: stats.approved },
    { name: 'Pending', value: stats.pending },
    { name: 'Rejected', value: stats.rejected },
    { name: 'Flagged', value: stats.flagged },
  ];

  const filteredReviews = useMemo(() => {
    if (!reviews) return [];
    return reviews.filter(r => {
      const matchesSearch = 
        r.author?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        r.comment?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        r.proName?.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesTab = activeTab === 'all' || r.status === activeTab;
      
      return matchesSearch && matchesTab;
    });
  }, [reviews, searchQuery, activeTab]);

  return (
    <div className="py-12 md:py-16 bg-secondary/30 min-h-screen">
      <div className="container mx-auto px-4 max-w-6xl">
        <header className="mb-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Review Moderation</h1>
            <p className="text-muted-foreground mt-2">Protect marketplace trust and resolve provider disputes.</p>
          </div>
          <div className="flex gap-2">
             <Badge variant="outline" className="bg-white px-3 py-1.5 h-auto flex items-center gap-2">
                <ShieldAlert className="h-4 w-4 text-orange-500" />
                <span>{stats.flagged} High Risk</span>
             </Badge>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
           <Card className="lg:col-span-2">
             <CardHeader>
               <CardTitle className="text-lg flex items-center gap-2">
                 <BarChart3 className="h-5 w-5 text-primary" />
                 Moderation Summary
               </CardTitle>
             </CardHeader>
             <CardContent className="h-[250px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={chartData}>
                    <XAxis dataKey="name" axisLine={false} tickLine={false} />
                    <YAxis hide />
                    <Tooltip cursor={{fill: 'transparent'}} />
                    <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                      {chartData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
             </CardContent>
           </Card>

           <Card>
             <CardHeader>
               <CardTitle className="text-lg">Status Distribution</CardTitle>
             </CardHeader>
             <CardContent className="h-[250px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={chartData}
                      innerRadius={60}
                      outerRadius={80}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {chartData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
             </CardContent>
           </Card>
        </div>

        <Card>
          <CardHeader className="border-b">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <CardTitle>Review Queue</CardTitle>
              <div className="relative w-full md:w-72">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input 
                  placeholder="Search reviews..." 
                  className="pl-9 h-9"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <Tabs defaultValue="pending" onValueChange={setActiveTab} className="w-full">
              <div className="px-6 border-b bg-secondary/10">
                <TabsList className="bg-transparent h-12 gap-6">
                  <TabsTrigger value="pending" className="data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none px-0">
                    Pending
                  </TabsTrigger>
                  <TabsTrigger value="approved" className="data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none px-0">
                    Approved
                  </TabsTrigger>
                  <TabsTrigger value="flagged" className="data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none px-0">
                    Flagged
                  </TabsTrigger>
                  <TabsTrigger value="rejected" className="data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none px-0">
                    Rejected
                  </TabsTrigger>
                </TabsList>
              </div>

              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Reviewer</TableHead>
                      <TableHead>Rating</TableHead>
                      <TableHead className="w-1/3">Comment</TableHead>
                      <TableHead>Professional</TableHead>
                      <TableHead>Risk</TableHead>
                      <TableHead className="text-right">Action</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {loading ? (
                      Array.from({ length: 5 }).map((_, i) => (
                        <TableRow key={i}>
                          <TableCell><Skeleton className="h-4 w-24" /></TableCell>
                          <TableCell><Skeleton className="h-4 w-12" /></TableCell>
                          <TableCell><Skeleton className="h-4 w-full" /></TableCell>
                          <TableCell><Skeleton className="h-4 w-24" /></TableCell>
                          <TableCell><Skeleton className="h-4 w-12" /></TableCell>
                          <TableCell className="text-right"><Skeleton className="h-8 w-20 ml-auto" /></TableCell>
                        </TableRow>
                      ))
                    ) : filteredReviews.length > 0 ? (
                      filteredReviews.map((review) => (
                        <TableRow key={review.id}>
                          <TableCell>
                            <p className="font-medium">{review.author}</p>
                            <p className="text-[10px] text-muted-foreground uppercase">{review.dateCreated ? new Date(review.dateCreated).toLocaleDateString() : 'N/A'}</p>
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center gap-1">
                                <Star className="h-3 w-3 text-yellow-500 fill-yellow-500" />
                                <span className="font-bold">{review.rating}</span>
                            </div>
                          </TableCell>
                          <TableCell>
                            <p className="text-sm line-clamp-2 italic">"{review.comment}"</p>
                          </TableCell>
                          <TableCell>
                             <p className="text-xs font-semibold">{review.proName || 'Unknown Pro'}</p>
                          </TableCell>
                          <TableCell>
                            <Badge variant={(review.fraudScore || 0) > 70 ? 'destructive' : (review.fraudScore || 0) > 40 ? 'secondary' : 'outline'} className="text-[10px]">
                               {review.fraudScore || 0}%
                            </Badge>
                          </TableCell>
                          <TableCell className="text-right">
                             <ReviewModerationDialog review={review}>
                                <Button size="sm" variant="outline">Review</Button>
                             </ReviewModerationDialog>
                          </TableCell>
                        </TableRow>
                      ))
                    ) : (
                      <TableRow>
                        <TableCell colSpan={6} className="h-32 text-center text-muted-foreground italic">
                          No reviews found for this status.
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </div>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}