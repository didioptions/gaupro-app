'use client';

import React, { useMemo, useState } from 'react';
import { useCollection, useFirestore, useMemoFirebase, useUser } from '@/firebase';
import { 
  collection, 
  query, 
  orderBy, 
  limit, 
  DocumentData, 
  doc, 
  runTransaction, 
  serverTimestamp, 
  increment 
} from 'firebase/firestore';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { Button } from '@/components/ui/button';
import { 
  Scale, 
  CheckCircle2, 
  XCircle, 
  Clock, 
  Search, 
  Loader2, 
  AlertTriangle,
  History
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Input } from '@/components/ui/input';

export default function LeadDisputeAdminPage() {
  const firestore = useFirestore();
  const { user: adminUser, isUserLoading } = useUser();
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState('');
  const [isProcessing, setIsProcessing] = useState<string | null>(null);

  const disputesQuery = useMemoFirebase(() => {
    if (!firestore || isUserLoading) return null;
    return query(collection(firestore, 'lead_disputes'), orderBy('createdAt', 'desc'), limit(50));
  }, [firestore, isUserLoading]);

  const { data: disputes, loading } = useCollection<DocumentData>(disputesQuery);

  const handleResolveDispute = async (dispute: any, action: 'approved' | 'rejected') => {
    if (!firestore || !adminUser) return;
    setIsProcessing(dispute.id);

    try {
      await runTransaction(firestore, async (transaction) => {
        const disputeRef = doc(firestore, 'lead_disputes', dispute.id);
        const proRef = doc(firestore, 'professionalProfiles', dispute.proUid);
        const notificationRef = doc(collection(firestore, 'users', dispute.proUid, 'notifications'));
        const txRef = doc(collection(firestore, 'transactions'));

        const disputeSnap = await transaction.get(disputeRef);
        if (!disputeSnap.exists()) throw "Dispute missing";

        // 1. Update Dispute Status
        transaction.update(disputeRef, {
          status: action,
          resolvedAt: serverTimestamp(),
          resolvedBy: adminUser.uid
        });

        if (action === 'approved') {
          // 2. Refund Credits
          transaction.update(proRef, {
            creditBalance: increment(dispute.credits)
          });

          // 3. Log Transaction
          transaction.set(txRef, {
            proUid: dispute.proUid,
            adminUid: adminUser.uid,
            type: 'refund',
            amount: dispute.credits,
            reason: `Refund for disputed lead: ${dispute.leadCategory}`,
            timestamp: new Date().toISOString()
          });
        }

        // 4. Notify Professional
        transaction.set(notificationRef, {
          title: action === 'approved' ? 'Credit Refund Approved' : 'Dispute Rejected',
          message: action === 'approved' 
            ? `Your dispute for lead "${dispute.leadCategory}" was approved. ${dispute.credits} credits have been returned to your account.`
            : `Your dispute for lead "${dispute.leadCategory}" was reviewed and rejected. Please refer to our refund policy for details.`,
          type: 'credit',
          status: 'unread',
          createdAt: serverTimestamp()
        });
      });

      toast({ title: 'Success', description: `Dispute ${action}.` });
    } catch (e: any) {
      toast({ variant: 'destructive', title: 'Error', description: e.message });
    } finally {
      setIsProcessing(null);
    }
  };

  const filteredDisputes = useMemo(() => {
    if (!disputes) return [];
    return disputes.filter(d => 
      d.reason?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      d.leadCategory?.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [disputes, searchTerm]);

  const stats = useMemo(() => {
    if (!disputes) return { pending: 0, approved: 0, rejected: 0 };
    return {
      pending: disputes.filter(d => d.status === 'pending').length,
      approved: disputes.filter(d => d.status === 'approved').length,
      rejected: disputes.filter(d => d.status === 'rejected').length,
    };
  }, [disputes]);

  return (
    <div className="py-12 md:py-16 bg-secondary/30 min-h-screen">
      <div className="container mx-auto px-4 max-w-6xl">
        <header className="mb-10">
          <h1 className="text-3xl font-bold tracking-tight">Lead Disputes & Refunds</h1>
          <p className="text-muted-foreground mt-2">Manage professional claims for credit reimbursements on invalid leads.</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between mb-2">
                <Clock className="h-5 w-5 text-orange-500" />
                <Badge variant="outline" className="bg-orange-50 text-orange-700">Open</Badge>
              </div>
              <p className="text-2xl font-bold">{stats.pending}</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between mb-2">
                <CheckCircle2 className="h-5 w-5 text-green-600" />
                <Badge variant="outline" className="bg-green-50 text-green-700">Refunded</Badge>
              </div>
              <p className="text-2xl font-bold">{stats.approved}</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between mb-2">
                <XCircle className="h-5 w-5 text-red-600" />
                <Badge variant="outline" className="bg-red-50 text-red-700">Rejected</Badge>
              </div>
              <p className="text-2xl font-bold">{stats.rejected}</p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader className="border-b">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <CardTitle className="text-xl">Dispute Queue</CardTitle>
              <div className="relative w-full md:w-72">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input 
                  placeholder="Filter disputes..." 
                  className="pl-9 h-9"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Lead Info</TableHead>
                  <TableHead>Reason for Dispute</TableHead>
                  <TableHead>Professional</TableHead>
                  <TableHead>Credits</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {loading ? (
                  Array.from({ length: 5 }).map((_, i) => (
                    <TableRow key={i}><TableCell colSpan={5}><Skeleton className="h-10 w-full" /></TableCell></TableRow>
                  ))
                ) : filteredDisputes.length > 0 ? (
                  filteredDisputes.map(dispute => (
                    <TableRow key={dispute.id}>
                      <TableCell>
                        <p className="font-bold text-xs uppercase tracking-wider">{dispute.leadCategory}</p>
                        <p className="text-[10px] text-muted-foreground font-mono">{dispute.leadId}</p>
                      </TableCell>
                      <TableCell>
                        <p className="text-sm font-medium">{dispute.reason}</p>
                        <p className="text-xs text-muted-foreground italic mt-1">"{dispute.details}"</p>
                      </TableCell>
                      <TableCell>
                        <p className="text-xs font-mono">{dispute.proUid.substring(0,8)}...</p>
                      </TableCell>
                      <TableCell>
                        <Badge variant="secondary">{dispute.credits} CR</Badge>
                      </TableCell>
                      <TableCell className="text-right space-x-2">
                        {dispute.status === 'pending' ? (
                          <>
                            <Button 
                              size="sm" 
                              variant="outline" 
                              className="text-red-600 border-red-200 hover:bg-red-50"
                              onClick={() => handleResolveDispute(dispute, 'rejected')}
                              disabled={!!isProcessing}
                            >
                              {isProcessing === dispute.id ? <Loader2 className="h-4 w-4 animate-spin" /> : <XCircle className="h-4 w-4" />}
                            </Button>
                            <Button 
                              size="sm" 
                              className="bg-green-600 hover:bg-green-700"
                              onClick={() => handleResolveDispute(dispute, 'approved')}
                              disabled={!!isProcessing}
                            >
                              {isProcessing === dispute.id ? <Loader2 className="h-4 w-4 animate-spin" /> : <CheckCircle2 className="h-4 w-4" />}
                            </Button>
                          </>
                        ) : (
                          <Badge variant={dispute.status === 'approved' ? 'default' : 'destructive'} className="capitalize">
                            {dispute.status}
                          </Badge>
                        )}
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={5} className="h-32 text-center text-muted-foreground italic">No disputes matching your search.</TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}