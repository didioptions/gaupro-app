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
    Users, 
    ShieldCheck, 
    MapPin, 
    Briefcase,
    ExternalLink,
    Filter,
    CheckCircle2,
    XCircle,
    Loader2
} from 'lucide-react';
import Link from 'next/link';
import { allServices } from '@/lib/services-list';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

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

  const filteredPros = useMemo(() => {
    if (!professionals) return [];
    return professionals.filter(pro => {
      const matchesSearch = 
        (pro.name || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
        (pro.email || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
        (pro.location || '').toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = categoryFilter === 'all' || pro.serviceCategory === categoryFilter;
      
      const matchesStatus = statusFilter === 'all' || 
        (statusFilter === 'verified' && pro.isProVerified) ||
        (statusFilter === 'unverified' && !pro.isProVerified);

      return matchesSearch && matchesCategory && matchesStatus;
    });
  }, [professionals, searchQuery, categoryFilter, statusFilter]);

  const stats = useMemo(() => {
    if (!professionals) return { total: 0, verified: 0, active: 0 };
    return {
        total: professionals.length,
        verified: professionals.filter(p => p.isProVerified).length,
        active: professionals.filter(p => p.creditBalance > 0 || p.leadCount > 0).length
    };
  }, [professionals]);

  return (
    <div className="py-12 md:py-16 bg-secondary/30 min-h-screen">
      <div className="container mx-auto px-4 max-w-7xl">
        <header className="mb-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Professional Directory</h1>
            <p className="text-muted-foreground mt-2">Monitor and manage all service providers on the GauPro network.</p>
          </div>
          <div className="flex items-center gap-2">
             <Badge variant="outline" className="bg-white px-4 py-2 text-sm">Total: {stats.total}</Badge>
             <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200 px-4 py-2 text-sm">Verified: {stats.verified}</Badge>
          </div>
        </header>

        <Card className="mb-8 border-border/50 shadow-sm">
            <CardContent className="p-4 flex flex-col md:flex-row gap-4">
                <div className="relative flex-grow">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input 
                        placeholder="Search by business name, email, or city..." 
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
                    <TableHead className="w-[250px]">Business / Name</TableHead>
                    <TableHead>Main Service</TableHead>
                    <TableHead>Location</TableHead>
                    <TableHead>Activity</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Manage</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {loading ? (
                    Array.from({ length: 5 }).map((_, i) => (
                      <TableRow key={i}>
                        <TableCell><Skeleton className="h-4 w-32" /></TableCell>
                        <TableCell><Skeleton className="h-4 w-24" /></TableCell>
                        <TableCell><Skeleton className="h-4 w-20" /></TableCell>
                        <TableCell><Skeleton className="h-4 w-16" /></TableCell>
                        <TableCell><Skeleton className="h-4 w-12" /></TableCell>
                        <TableCell className="text-right"><Skeleton className="h-8 w-20 ml-auto" /></TableCell>
                      </TableRow>
                    ))
                  ) : filteredPros.length > 0 ? (
                    filteredPros.map((pro) => (
                      <TableRow key={pro.id} className="hover:bg-secondary/10 transition-colors">
                        <TableCell>
                          <p className="font-bold text-sm text-foreground">{pro.name || 'No Name'}</p>
                          <p className="text-xs text-muted-foreground truncate">{pro.email}</p>
                        </TableCell>
                        <TableCell>
                          <Badge variant="secondary" className="font-normal">{pro.serviceCategory || 'Not Set'}</Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-1 text-xs">
                            <MapPin className="h-3 w-3 text-muted-foreground" />
                            <span className="capitalize">{pro.location || 'Unknown'}</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex flex-col gap-1">
                             <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Leads: {pro.leadCount || 0}</span>
                             <span className="text-[10px] font-bold uppercase tracking-wider text-primary">Balance: {pro.creditBalance || 0}</span>
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
                                View Details <ExternalLink className="h-3 w-3" />
                             </Link>
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan={6} className="h-32 text-center text-muted-foreground italic">
                        No service providers found matching your filters.
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
