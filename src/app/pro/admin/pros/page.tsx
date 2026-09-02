'use client';

import React, { useMemo, useState } from 'react';
import { useCollection, useFirestore, useMemoFirebase, useUser } from '@/firebase';
import { collection, DocumentData, query, orderBy, limit } from 'firebase/firestore';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
    Search, 
    MapPin, 
    ExternalLink,
    Calendar,
    Star,
    CircleCheck,
    AlertCircle
} from 'lucide-react';
import Link from 'next/link';
import { allServices } from '@/lib/services-list';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Progress } from '@/components/ui/progress';

export default function AdminProsManagementPage() {
  const firestore = useFirestore();
  const { isUserLoading } = useUser();
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');

  const prosQuery = useMemoFirebase(() => {
    if (!firestore || isUserLoading) return null;
    return query(collection(firestore, 'professionalProfiles'), orderBy('createdAt', 'desc'), limit(100));
  }, [firestore, isUserLoading]);

  const { data: professionals, loading } = useCollection<DocumentData>(prosQuery);

  const calculateCompleteness = (pro: any) => {
      let score = 0;
      const fields = ['name', 'firstName', 'phone', 'email', 'serviceCategory', 'tags', 'province', 'location', 'suburb', 'serviceAreas', 'description'];
      fields.forEach(f => {
          if (pro[f] && (Array.isArray(pro[f]) ? pro[f].length > 0 : true)) score++;
      });
      return Math.round((score / fields.length) * 100);
  };

  const filteredPros = useMemo(() => {
    if (!professionals) return [];
    return professionals.filter(pro => {
      const matchesSearch = 
        (pro.name || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
        (pro.email || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
        (pro.location || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
        (pro.suburb || '').toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = categoryFilter === 'all' || pro.serviceCategory === categoryFilter;
      const matchesStatus = statusFilter === 'all' || 
        (statusFilter === 'verified' && pro.isProVerified) ||
        (statusFilter === 'unverified' && !pro.isProVerified);

      return matchesSearch && matchesCategory && matchesStatus;
    });
  }, [professionals, searchQuery, categoryFilter, statusFilter]);

  const stats = useMemo(() => {
    if (!professionals) return { total: 0, verified: 0 };
    return {
        total: professionals.length,
        verified: professionals.filter(p => p.isProVerified).length,
    };
  }, [professionals]);

  return (
    <div className="py-12 md:py-16 bg-secondary/30 min-h-screen">
      <div className="container mx-auto px-4 max-w-7xl">
        <header className="mb-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Professional Directory</h1>
            <p className="text-muted-foreground mt-2">Manage and audit service providers in the network.</p>
          </div>
          <div className="flex items-center gap-2">
             <Badge variant="outline" className="bg-white px-4 py-2 text-sm font-bold">Total: {stats.total}</Badge>
             <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200 px-4 py-2 text-sm font-bold">Verified: {stats.verified}</Badge>
          </div>
        </header>

        <Card className="mb-8 border-border/50 shadow-sm">
            <CardContent className="p-4 flex flex-col md:flex-row gap-4">
                <div className="relative flex-grow">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input 
                        placeholder="Search by business, email, city or suburb..." 
                        className="pl-9 h-11"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
                <div className="flex gap-2">
                    <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                        <SelectTrigger className="w-[180px] h-11">
                            <SelectValue placeholder="All Categories" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">All Categories</SelectItem>
                            {allServices.map(s => (
                                <SelectItem key={s.value} value={s.label}>{s.label}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                    <Select value={statusFilter} onValueChange={setStatusFilter}>
                        <SelectTrigger className="w-[150px] h-11">
                            <SelectValue placeholder="All Status" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">All Status</SelectItem>
                            <SelectItem value="verified">Verified</SelectItem>
                            <SelectItem value="unverified">Unverified</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </CardContent>
        </Card>

        <Card className="border-border/50 shadow-lg overflow-hidden">
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader className="bg-secondary/20">
                  <TableRow>
                    <TableHead className="w-[250px]">Business / Contact</TableHead>
                    <TableHead>Location</TableHead>
                    <TableHead>Completeness</TableHead>
                    <TableHead>Performance</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {loading ? (
                    Array.from({ length: 5 }).map((_, i) => (
                      <TableRow key={i}>
                        <TableCell colSpan={6}><Skeleton className="h-10 w-full" /></TableCell>
                      </TableRow>
                    ))
                  ) : filteredPros.map((pro) => {
                    const completeness = calculateCompleteness(pro);
                    return (
                      <TableRow key={pro.id} className="hover:bg-secondary/10 transition-colors">
                        <TableCell>
                          <p className="font-bold text-sm text-foreground">{pro.name || 'No Name'}</p>
                          <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest">{pro.firstName} {pro.lastName}</p>
                          <p className="text-[10px] text-muted-foreground truncate mt-1">{pro.email}</p>
                        </TableCell>
                        <TableCell>
                          <div className="flex flex-col gap-1">
                             <div className="flex items-center gap-1 text-xs font-bold capitalize">
                                <MapPin className="h-3 w-3 text-primary" />
                                {pro.location || 'Unknown'}
                             </div>
                             <p className="text-[10px] text-muted-foreground capitalize pl-4">{pro.suburb || 'No Suburb'}</p>
                          </div>
                        </TableCell>
                        <TableCell>
                            <div className="w-24 space-y-1">
                                <div className="flex justify-between text-[10px] font-bold">
                                    <span>{completeness}%</span>
                                </div>
                                <Progress value={completeness} className="h-1" />
                            </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex flex-col gap-1">
                             <div className="flex items-center gap-1">
                                <Star className="h-3 w-3 text-yellow-500 fill-yellow-500" />
                                <span className="text-[10px] font-bold">{pro.rating?.toFixed(1) || '0.0'}</span>
                                <span className="text-[9px] text-muted-foreground">({pro.reviews || 0} rev)</span>
                             </div>
                             <span className="text-[10px] font-bold uppercase text-primary">Leads: {pro.leadCount || 0}</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          {pro.isProVerified ? (
                            <Badge className="bg-green-100 text-green-700 hover:bg-green-100 border-green-200">Verified</Badge>
                          ) : (
                            <Badge variant="outline" className="text-muted-foreground">Unverified</Badge>
                          )}
                        </TableCell>
                        <TableCell className="text-right">
                          <Button asChild size="sm" variant="outline" className="gap-2">
                             <Link href={`/pro/admin/pros/${pro.id}`}>
                                Audit <ExternalLink className="h-3 w-3" />
                             </Link>
                          </Button>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
