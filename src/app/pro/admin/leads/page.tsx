'use client';

import React, { useMemo, useState, useEffect, useCallback } from 'react';
import { useFirestore, useUser } from '@/firebase';
import { 
    collectionGroup, 
    query, 
    orderBy, 
    limit, 
    DocumentData, 
    doc, 
    updateDoc, 
    serverTimestamp, 
    addDoc, 
    collection,
    getDocs,
    startAfter,
    QueryDocumentSnapshot
} from 'firebase/firestore';
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
    ChevronDown,
    Loader2,
    Calendar,
    DollarSign,
    Phone,
    Mail,
    User,
    MapPin
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogDescription
} from '@/components/ui/dialog';

const PAGE_SIZE = 25;

export default function LeadOversightPage() {
  const firestore = useFirestore();
  const { user: adminUser, isUserLoading } = useUser();
  const { toast } = useToast();

  const [leads, setLeads] = useState<any[]>([]);
  const [lastDoc, setLastDoc] = useState<QueryDocumentSnapshot | null>(null);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const [searchQuery, setSearchQuery] = useState('');
  const [viewLead, setViewLead] = useState<any>(null);

  const fetchLeads = useCallback(async (isInitial = true) => {
    if (!firestore || isUserLoading) return;
    
    if (isInitial) setLoading(true);
    else setLoadingMore(true);

    try {
        const baseQuery = query(
            collectionGroup(firestore, 'serviceRequests'),
            orderBy('createdAt', 'desc'),
            limit(PAGE_SIZE)
        );

        const finalQuery = isInitial ? baseQuery : query(baseQuery, startAfter(lastDoc));
        const snapshot = await getDocs(finalQuery);
        
        const newLeads = snapshot.docs.map(d => ({ 
            id: d.id, 
            userId: d.ref.parent.parent?.id || 'guest', 
            ...d.data() 
        }));
        
        if (isInitial) {
            setLeads(newLeads);
        } else {
            setLeads(prev => [...prev, ...newLeads]);
        }

        setLastDoc(snapshot.docs[snapshot.docs.length - 1] || null);
        setHasMore(snapshot.docs.length === PAGE_SIZE);
    } catch (e: any) {
        console.error("Fetch leads error:", e);
        toast({ variant: 'destructive', title: 'Error', description: "Failed to load leads. Make sure you have the collection group index for 'serviceRequests' (createdAt descending) active." });
    } finally {
        setLoading(false);
        setLoadingMore(false);
    }
  }, [firestore, isUserLoading, lastDoc, toast]);

  useEffect(() => {
    fetchLeads(true);
  }, [firestore, isUserLoading]);

  const stats = useMemo(() => {
    if (!leads.length) return { total: 0, open: 0, quoted: 0, quality: 0 };
    return {
      total: leads.length,
      open: leads.filter(l => l.status === 'Open').length,
      quoted: leads.filter(l => l.status === 'Quoted').length,
      quality: Math.round(leads.reduce((acc, l) => acc + (l.leadQualityScore || 70), 0) / (leads.length || 1))
    };
  }, [leads]);

  const filteredLeads = useMemo(() => {
    return leads.filter(l => 
      l.category?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      l.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      l.location?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      l.customerName?.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [leads, searchQuery]);

  const getQualityBadge = (score: number) => {
    if (score >= 80) return <Badge className="bg-green-100 text-green-700">{score}%</Badge>;
    if (score >= 50) return <Badge className="bg-yellow-100 text-yellow-700">{score}%</Badge>;
    return <Badge variant="destructive">{score}%</Badge>;
  };

  const handleAction = async (lead: any, action: string) => {
    if (!adminUser || !lead || !firestore || !lead.userId || lead.userId === 'guest') {
        toast({ title: 'Action restricted', description: "Cannot update status for guest leads yet." });
        return;
    }
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

      setLeads(prev => prev.map(l => l.id === lead.id ? { ...l, status: action } : l));

      toast({ title: 'Lead Updated', description: `Lead status set to ${action}.` });
      setViewLead(null);
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
                <Badge variant="secondary">Loaded</Badge>
              </div>
              <p className="text-2xl font-bold">{stats.total}</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between mb-2">
                <Zap className="h-5 w-5 text-orange-500" />
                <Badge variant="secondary" className="bg-orange-100 text-orange-700">Live</Badge>
              </div>
              <p className="text-2xl font-bold">{stats.open}</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between mb-2">
                <CheckCircle2 className="h-5 w-5 text-green-600" />
                <Badge variant="secondary" className="bg-green-100 text-green-700">Converted</Badge>
              </div>
              <p className="text-2xl font-bold">{stats.quoted}</p>
            </CardContent>
          </Card>
          <Card className="bg-primary text-primary-foreground border-0">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between mb-2">
                <TrendingUp className="h-5 w-5 opacity-80" />
                <Badge variant="outline" className="text-white border-white/30">Quality</Badge>
              </div>
              <p className="text-2xl font-bold">{stats.quality}%</p>
              <p className="text-[10px] uppercase font-bold opacity-70">Avg Score (Loaded)</p>
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
                  placeholder="Search loaded leads..." 
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
                  <TableHead>Customer</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Quality</TableHead>
                  <TableHead className="text-right">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {loading ? (
                   Array.from({ length: 5 }).map((_, i) => (
                    <TableRow key={i}>
                      <TableCell><Skeleton className="h-4 w-40" /></TableCell>
                      <TableCell><Skeleton className="h-4 w-32" /></TableCell>
                      <TableCell><Skeleton className="h-4 w-16" /></TableCell>
                      <TableCell><Skeleton className="h-4 w-12" /></TableCell>
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
                        <p className="text-sm font-medium">{lead.customerName || 'Anonymous'}</p>
                        <p className="text-[10px] text-muted-foreground">{lead.customerEmail || 'No email'}</p>
                    </TableCell>
                    <TableCell>
                      <Badge variant={lead.status === 'Open' ? 'secondary' : 'default'}>{lead.status}</Badge>
                    </TableCell>
                    <TableCell>
                      {getQualityBadge(lead.leadQualityScore || 70)}
                    </TableCell>
                    <TableCell className="text-right space-x-1">
                      <button className="p-2 hover:bg-secondary rounded-full text-muted-foreground" onClick={() => setViewLead(lead)}><Eye className="h-4 w-4" /></button>
                      <button className="p-2 hover:bg-red-50 rounded-full text-red-600" onClick={() => handleAction(lead, 'Flagged')}><AlertTriangle className="h-4 w-4" /></button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            
            {hasMore && (
                <div className="p-4 border-t flex justify-center">
                    <Button 
                        variant="ghost" 
                        size="sm" 
                        onClick={() => fetchLeads(false)} 
                        disabled={loadingMore}
                        className="text-xs gap-2"
                    >
                        {loadingMore ? <Loader2 className="h-4 w-4 animate-spin" /> : <ChevronDown className="h-4 w-4" />}
                        Load More Leads
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
            <DialogDescription>Full data for this marketplace request.</DialogDescription>
          </DialogHeader>
          <div className="py-4 space-y-6">
            <div className="p-4 bg-secondary/30 rounded-lg">
              <h3 className="font-bold text-sm text-primary mb-2 uppercase tracking-widest">Project Description</h3>
              <p className="text-sm leading-relaxed">{viewLead?.description}</p>
            </div>
            
            <div className="grid grid-cols-2 gap-8">
                <div className="space-y-4">
                    <h4 className="text-xs font-bold text-muted-foreground uppercase">Project Info</h4>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm"><Briefcase className="h-4 w-4 text-muted-foreground" /> <span>{viewLead?.category}</span></div>
                        <div className="flex items-center gap-2 text-sm"><MapPin className="h-4 w-4 text-muted-foreground" /> <span>{viewLead?.location}</span></div>
                        <div className="flex items-center gap-2 text-sm"><Calendar className="h-4 w-4 text-muted-foreground" /> <span>{viewLead?.dateNeeded}</span></div>
                        <div className="flex items-center gap-2 text-sm"><DollarSign className="h-4 w-4 text-muted-foreground" /> <span>{viewLead?.budget}</span></div>
                    </div>
                </div>
                <div className="space-y-4">
                    <h4 className="text-xs font-bold text-muted-foreground uppercase">Customer Contact</h4>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm"><User className="h-4 w-4 text-muted-foreground" /> <span>{viewLead?.customerName}</span></div>
                        <div className="flex items-center gap-2 text-sm"><Phone className="h-4 w-4 text-muted-foreground" /> <span>{viewLead?.customerPhone}</span></div>
                        <div className="flex items-center gap-2 text-sm"><Mail className="h-4 w-4 text-muted-foreground" /> <span className="truncate">{viewLead?.customerEmail}</span></div>
                    </div>
                </div>
            </div>
          </div>
          <DialogFooter>
             <Button variant="outline" onClick={() => setViewLead(null)}>Close</Button>
             {viewLead?.userId !== 'guest' && (
                <Button variant="destructive" onClick={() => handleAction(viewLead, 'Closed')}>Close Lead</Button>
             )}
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
