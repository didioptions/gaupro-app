'use client';

import React, { useMemo, useState } from 'react';
import { useCollection, useFirestore, useMemoFirebase, useUser } from '@/firebase';
import { collectionGroup, query, orderBy, limit, DocumentData, doc, updateDoc, serverTimestamp, addDoc, collection } from 'firebase/firestore';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
    Search, 
    Briefcase, 
    Zap, 
    AlertTriangle, 
    CheckCircle2, 
    Eye,
    TrendingUp,
    ChevronDown
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter
} from '@/components/ui/dialog';

export default function LeadOversightPage() {
  const firestore = useFirestore();
  const { user: adminUser, isUserLoading } = useUser();
  const { toast } = useToast();
  const [searchQuery, setSearchQuery] = useState('');
  const [displayLimit, setDisplayLimit] = useState(25);
  const [viewLead, setViewLead] = useState<any>(null);

  // Fetch all service requests using Collection Group Query
  const leadsQuery = useMemoFirebase(() => {
    if (!firestore || isUserLoading) return null;
    return query(collectionGroup(firestore, 'serviceRequests'), orderBy('dateNeeded', 'desc'), limit(displayLimit));
  }, [firestore, isUserLoading, displayLimit]);

  const { data: leads, loading } = useCollection<DocumentData>(leadsQuery);

  const stats = useMemo(() => {
    if (!leads) return { total: 0, open: 0, quoted: 0, quality: 0 };
    return {
      total: leads.length,
      open: leads.filter(l => l.status === 'Open').length,
      quoted: leads.filter(l => l.status === 'Quoted').length,
      quality: Math.round(leads.reduce((acc, l) => acc + (l.leadQualityScore || 70), 0) / (leads.length || 1))
    };
  }, [leads]);

  const filteredLeads = useMemo(() => {
    if (!leads) return [];
    return leads.filter(l => 
      l.category?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      l.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      l.location?.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [leads, searchQuery]);

  const getQualityBadge = (score: number) => {
    if (score >= 80) return <Badge className="bg-green-100 text-green-700">{score}%</Badge>;
    if (score >= 50) return <Badge className="bg-yellow-100 text-yellow-700">{score}%</Badge>;
    return <Badge variant="destructive">{score}%</Badge>;
  };

  const handleAction = async (lead: any, action: string) => {
    if (!adminUser || !lead || !firestore || !lead.userId) return;
    try {
      const leadRef = doc(firestore, 'users', lead.userId, 'serviceRequests', lead.id);
      await updateDoc(leadRef, { status: action, updatedAt: serverTimestamp() });
      
      await addDoc(collection(firestore, 'marketplace_audit_logs'), {
        adminUid: adminUser.uid,
        action: `LEAD_${action.toUpperCase()}`,
        targetId: lead.id,
        targetType: 'lead',
        timestamp: serverTimestamp()
      });

      toast({ title: 'Lead Updated', description: `Lead status set to ${action}.` });
    } catch (e: any) {
      toast({ variant: 'destructive', title: 'Error', description: e.message });
    }
  };

  return (
    <div className="py-12 md:py-16 bg-secondary/30 min-h-screen">
      <div className="container mx-auto px-4 max-w-6xl">
        <header className="mb-10">
          <h1 className="text-3xl font-bold tracking-tight">Lead Oversight</h1>
          <p className="text-muted-foreground mt-2">Monitor marketplace liquidity and lead quality.</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between mb-2">
                <Briefcase className="h-5 w-5 text-primary" />
                <Badge variant="secondary">Volume</Badge>
              </div>
              <p className="text-2xl font-bold">{stats.total}</p>
              <p className="text-xs text-muted-foreground">Total Requests</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between mb-2">
                <Zap className="h-5 w-5 text-orange-500" />
                <Badge variant="secondary" className="bg-orange-100 text-orange-700">Live</Badge>
              </div>
              <p className="text-2xl font-bold">{stats.open}</p>
              <p className="text-xs text-muted-foreground">Open Requests</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between mb-2">
                <CheckCircle2 className="h-5 w-5 text-green-600" />
                <Badge variant="secondary" className="bg-green-100 text-green-700">Converted</Badge>
              </div>
              <p className="text-2xl font-bold">{stats.quoted}</p>
              <p className="text-xs text-muted-foreground">Quoted Requests</p>
            </CardContent>
          </Card>
          <Card className="bg-primary text-primary-foreground border-0">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between mb-2">
                <TrendingUp className="h-5 w-5 opacity-80" />
                <Badge variant="outline" className="text-white border-white/30">Quality</Badge>
              </div>
              <p className="text-2xl font-bold">{stats.quality}%</p>
              <p className="text-[10px] uppercase font-bold opacity-70">Avg Lead Score</p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader className="border-b">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <CardTitle className="text-xl">Marketplace Lead Feed</CardTitle>
              <div className="relative w-full md:w-72">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input 
                  placeholder="Search categories or cities..." 
                  className="pl-9 h-9"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Category / City</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Quality</TableHead>
                  <TableHead>Quotes</TableHead>
                  <TableHead className="text-right">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {loading && leads.length === 0 ? (
                   Array.from({ length: 5 }).map((_, i) => (
                    <TableRow key={i}>
                      <TableCell><Skeleton className="h-4 w-40" /></TableCell>
                      <TableCell><Skeleton className="h-4 w-16" /></TableCell>
                      <TableCell><Skeleton className="h-4 w-12" /></TableCell>
                      <TableCell><Skeleton className="h-4 w-8" /></TableCell>
                      <TableCell className="text-right"><Skeleton className="h-8 w-24 ml-auto" /></TableCell>
                    </TableRow>
                  ))
                ) : filteredLeads.map(lead => (
                  <TableRow key={lead.id}>
                    <TableCell>
                      <p className="font-medium">{lead.category}</p>
                      <p className="text-xs text-muted-foreground">{lead.location}</p>
                    </TableCell>
                    <TableCell>
                      <Badge variant={lead.status === 'Open' ? 'secondary' : 'default'}>{lead.status}</Badge>
                    </TableCell>
                    <TableCell>
                      {getQualityBadge(lead.leadQualityScore || 70)}
                    </TableCell>
                    <TableCell className="text-center font-mono">
                      {lead.quotesCount || 0}
                    </TableCell>
                    <TableCell className="text-right space-x-1">
                      <Button size="sm" variant="ghost" onClick={() => setViewLead(lead)}><Eye className="h-4 w-4" /></Button>
                      <Button size="sm" variant="outline" className="text-red-600" onClick={() => handleAction(lead, 'Flagged')}><AlertTriangle className="h-4 w-4" /></Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            {leads && leads.length >= displayLimit && (
                <div className="p-4 border-t flex justify-center">
                    <Button variant="ghost" size="sm" onClick={() => setDisplayLimit(prev => prev + 25)} className="text-xs gap-2">
                        <ChevronDown className="h-4 w-4" /> Load More Leads
                    </Button>
                </div>
            )}
          </CardContent>
        </Card>
      </div>

      <Dialog open={!!viewLead} onOpenChange={() => setViewLead(null)}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Lead Details: {viewLead?.id?.substring(0,8) || 'Unknown'}</DialogTitle>
          </DialogHeader>
          <div className="py-4 space-y-6">
            <div className="p-4 bg-secondary/30 rounded-lg">
              <h3 className="font-bold text-sm text-primary mb-2">Project Description</h3>
              <p className="text-sm leading-relaxed">{viewLead?.description}</p>
            </div>
            <div className="grid grid-cols-2 gap-4 text-sm">
               <div><p className="text-muted-foreground">Category</p><p className="font-bold">{viewLead?.category}</p></div>
               <div><p className="text-muted-foreground">City</p><p className="font-bold">{viewLead?.location}</p></div>
               <div><p className="text-muted-foreground">Urgency</p><p className="font-bold">{viewLead?.urgency || 'Flexible'}</p></div>
               <div><p className="text-muted-foreground">Budget</p><p className="font-bold">{viewLead?.budget || 'Quote Required'}</p></div>
            </div>
          </div>
          <DialogFooter>
             <Button variant="outline" onClick={() => setViewLead(null)}>Close</Button>
             <Button variant="destructive" onClick={() => handleAction(viewLead, 'Closed')}>Close Lead</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}