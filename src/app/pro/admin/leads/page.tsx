'use client';

import React, { useMemo, useState, useEffect, useCallback } from 'react';
import { useFirestore, useUser } from '@/firebase';
import { 
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
    MapPin,
    XCircle,
    HelpCircle,
    Edit3,
    Clock
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
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

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
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState<any>({});

  const fetchLeads = useCallback(async (isInitial = true) => {
    if (!firestore || isUserLoading) return;
    
    if (isInitial) setLoading(true);
    else setLoadingMore(true);

    try {
        const baseQuery = query(
            collection(firestore, 'leads_public'),
            orderBy('createdAt', 'desc'),
            limit(PAGE_SIZE)
        );

        const finalQuery = isInitial ? baseQuery : query(baseQuery, startAfter(lastDoc));
        const snapshot = await getDocs(finalQuery);
        
        const newLeads = snapshot.docs.map(d => ({ 
            id: d.id, 
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
        toast({ variant: 'destructive', title: 'Error', description: "Failed to load leads." });
    } finally {
        setLoading(false);
        setLoadingMore(false);
    }
  }, [firestore, isUserLoading, lastDoc, toast]);

  useEffect(() => {
    fetchLeads(true);
  }, [firestore, isUserLoading]);

  const stats = useMemo(() => {
    if (!leads.length) return { total: 0, pending: 0, approved: 0, quality: 0 };
    return {
      total: leads.length,
      pending: leads.filter(l => l.status === 'pending_review').length,
      approved: leads.filter(l => l.status === 'approved').length,
      quality: Math.round(leads.reduce((acc, l) => acc + (l.qualityScore || 70), 0) / (leads.length || 1))
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

  const handleAction = async (leadId: string, action: 'approved' | 'rejected' | 'needs_info' | 'flagged', extraData = {}) => {
    if (!adminUser || !firestore) return;
    try {
      const leadRef = doc(firestore, 'leads_public', leadId);
      const updateObj = { 
        status: action, 
        updatedAt: serverTimestamp(),
        ...extraData 
      };
      
      await updateDoc(leadRef, updateObj);
      
      await addDoc(collection(firestore, 'marketplace_audit_logs'), {
        adminUid: adminUser.uid,
        action: `LEAD_${action.toUpperCase()}`,
        targetId: leadId,
        targetType: 'lead',
        timestamp: serverTimestamp()
      });

      setLeads(prev => prev.map(l => l.id === leadId ? { ...l, ...updateObj } : l));

      toast({ title: 'Success', description: `Lead marked as ${action.replace('_', ' ')}.` });
      setViewLead(null);
      setIsEditing(false);
    } catch (e: any) {
      toast({ variant: 'destructive', title: 'Error', description: e.message });
    }
  };

  const startEdit = (lead: any) => {
      setEditData({
          qualityScore: lead.qualityScore || 70,
          credits: lead.credits || 3,
          description: lead.description
      });
      setIsEditing(true);
  };

  const getStatusBadge = (status: string) => {
      switch(status) {
          case 'pending_review': return <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200">Pending Review</Badge>;
          case 'approved': return <Badge variant="secondary" className="bg-green-100 text-green-700 border-green-200">Approved</Badge>;
          case 'rejected': return <Badge variant="destructive">Rejected</Badge>;
          case 'needs_info': return <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">Needs Info</Badge>;
          default: return <Badge variant="outline">{status}</Badge>;
      }
  };

  return (
    <div className="py-12 md:py-16 bg-secondary/30 min-h-screen">
      <div className="container mx-auto px-4 max-w-6xl">
        <header className="mb-10">
          <h1 className="text-3xl font-bold tracking-tight">Lead Approval Queue</h1>
          <p className="text-muted-foreground mt-2">Verify and score marketplace job requests before distribution.</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between mb-2">
                <Briefcase className="h-5 w-5 text-primary" />
                <Badge variant="secondary">Total</Badge>
              </div>
              <p className="text-2xl font-bold">{stats.total}</p>
            </CardContent>
          </Card>
          <Card className="border-yellow-200 bg-yellow-50/50">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between mb-2">
                <Clock className="h-5 w-5 text-yellow-600" />
                <Badge variant="outline" className="border-yellow-300 text-yellow-700">Action Required</Badge>
              </div>
              <p className="text-2xl font-bold">{stats.pending}</p>
            </CardContent>
          </Card>
          <Card className="border-green-200 bg-green-50/50">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between mb-2">
                <CheckCircle2 className="h-5 w-5 text-green-600" />
                <Badge variant="outline" className="border-green-300 text-green-700">Live</Badge>
              </div>
              <p className="text-2xl font-bold">{stats.approved}</p>
            </CardContent>
          </Card>
          <Card className="bg-primary text-primary-foreground border-0">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between mb-2">
                <TrendingUp className="h-5 w-5 opacity-80" />
                <Badge variant="outline" className="text-white border-white/30">Quality</Badge>
              </div>
              <p className="text-2xl font-bold">{stats.quality}%</p>
              <p className="text-[10px] uppercase font-bold opacity-70">Average Market Score</p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader className="border-b">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <CardTitle className="text-xl">Marketplace Intake</CardTitle>
              <div className="relative w-full md:w-72">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input 
                  placeholder="Search lead data..." 
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
                  <TableHead>Category / Suburb</TableHead>
                  <TableHead>Customer</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Value</TableHead>
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
                  <TableRow key={lead.id} className={lead.status === 'pending_review' ? 'bg-yellow-50/20' : ''}>
                    <TableCell>
                      <p className="font-medium">{lead.category}</p>
                      <p className="text-xs text-muted-foreground">{lead.location}</p>
                    </TableCell>
                    <TableCell>
                        <p className="text-sm font-medium">{lead.customerName || 'Anonymous'}</p>
                        <p className="text-[10px] text-muted-foreground">{new Date(lead.createdAt?.seconds * 1000).toLocaleDateString()}</p>
                    </TableCell>
                    <TableCell>
                      {getStatusBadge(lead.status)}
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline" className="font-mono">{lead.credits || 3} CR</Badge>
                    </TableCell>
                    <TableCell className="text-right space-x-1">
                      <button className="p-2 hover:bg-secondary rounded-full text-muted-foreground" onClick={() => setViewLead(lead)}><Eye className="h-4 w-4" /></button>
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
                        Load More leads
                    </Button>
                </div>
            )}
          </CardContent>
        </Card>
      </div>

      <Dialog open={!!viewLead} onOpenChange={() => { setViewLead(null); setIsEditing(false); }}>
        <DialogContent className="max-w-2xl overflow-y-auto max-h-[90vh]">
          <DialogHeader>
            <DialogTitle>Verify Lead: {viewLead?.id?.substring(0,8)}</DialogTitle>
            <DialogDescription>Review details and assign marketplace value.</DialogDescription>
          </DialogHeader>
          
          <div className="py-4 space-y-6">
            {!isEditing ? (
              <>
                <div className="p-4 bg-secondary/30 rounded-lg">
                  <h3 className="font-bold text-sm text-primary mb-2 uppercase tracking-widest flex justify-between">
                      Project Description
                      <Button variant="ghost" size="sm" onClick={() => startEdit(viewLead)}><Edit3 className="h-3 w-3" /></Button>
                  </h3>
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

                <div className="p-4 border rounded-lg flex justify-between items-center bg-blue-50/30">
                    <div>
                        <p className="text-xs font-bold text-blue-900 uppercase">Marketplace Configuration</p>
                        <p className="text-sm text-blue-800">Quality Score: <strong>{viewLead?.qualityScore || 0}%</strong> | Price: <strong>{viewLead?.credits || 3} Credits</strong></p>
                    </div>
                    <Button variant="outline" size="sm" onClick={() => startEdit(viewLead)}>Adjust</Button>
                </div>
              </>
            ) : (
                <div className="space-y-4">
                    <div className="space-y-2">
                        <Label>Edit Description</Label>
                        <Textarea 
                            value={editData.description} 
                            onChange={(e) => setEditData({...editData, description: e.target.value})}
                            rows={4}
                        />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label>Quality Score (0-100%)</Label>
                            <Input 
                                type="number" 
                                value={editData.qualityScore} 
                                onChange={(e) => setEditData({...editData, qualityScore: parseInt(e.target.value)})}
                            />
                        </div>
                        <div className="space-y-2">
                            <Label>Lead Price (Credits)</Label>
                            <Input 
                                type="number" 
                                value={editData.credits} 
                                onChange={(e) => setEditData({...editData, credits: parseInt(e.target.value)})}
                            />
                        </div>
                    </div>
                    <div className="flex gap-2 justify-end">
                        <Button variant="ghost" onClick={() => setIsEditing(false)}>Cancel</Button>
                        <Button onClick={() => setViewLead({...viewLead, ...editData, isStale: true})}>Save Changes</Button>
                    </div>
                </div>
            )}
          </div>

          {!isEditing && (
            <DialogFooter className="flex-col sm:flex-row gap-2">
                <div className="flex flex-1 gap-2">
                    <Button variant="outline" className="flex-1 text-red-600" onClick={() => handleAction(viewLead.id, 'rejected')}><XCircle className="h-4 w-4 mr-2" /> Reject</Button>
                    <Button variant="outline" className="flex-1 text-blue-600" onClick={() => handleAction(viewLead.id, 'needs_info')}><HelpCircle className="h-4 w-4 mr-2" /> Needs Info</Button>
                </div>
                <Button className="flex-1 bg-green-600 hover:bg-green-700" onClick={() => handleAction(viewLead.id, 'approved', { ...editData })}><CheckCircle2 className="h-4 w-4 mr-2" /> Approve & Distribute</Button>
            </DialogFooter>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}