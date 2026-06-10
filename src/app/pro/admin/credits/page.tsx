'use client';

import React, { useMemo, useState } from 'react';
import { useCollection, useFirestore, useMemoFirebase, useUser } from '@/firebase';
import { collection, query, orderBy, limit, DocumentData } from 'firebase/firestore';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
    Search, 
    Wallet, 
    TrendingUp, 
    RotateCcw, 
    ShoppingBag, 
    History,
    MoreVertical
} from 'lucide-react';
import { CreditAdjustmentDialog } from '@/components/pro/admin/credit-adjustment-dialog';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export default function CreditManagementPage() {
  const firestore = useFirestore();
  const { isUserLoading } = useUser();
  const [searchQuery, setSearchQuery] = useState('');

  // 1. Fetch Professionals for search
  const prosQuery = useMemoFirebase(() => {
    if (!firestore || isUserLoading) return null;
    return collection(firestore, 'professionalProfiles');
  }, [firestore, isUserLoading]);

  const { data: professionals, loading: loadingPros } = useCollection<DocumentData>(prosQuery);

  // 2. Fetch Recent Transactions
  const txQuery = useMemoFirebase(() => {
    if (!firestore || isUserLoading) return null;
    return query(collection(firestore, 'transactions'), orderBy('timestamp', 'desc'), limit(20));
  }, [firestore, isUserLoading]);

  const { data: transactions, loading: loadingTx } = useCollection<DocumentData>(txQuery);

  const filteredPros = useMemo(() => {
    if (!professionals) return [];
    return professionals.filter(pro => 
      pro.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pro.email?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pro.phone?.includes(searchQuery)
    ).slice(0, 10);
  }, [professionals, searchQuery]);

  const stats = useMemo(() => {
    if (!transactions) return { granted: 0, refunded: 0, purchased: 0 };
    return {
        granted: transactions.filter(t => t.type === 'grant' || t.type === 'promo').reduce((acc, t) => acc + (t.amount || 0), 0),
        refunded: transactions.filter(t => t.type === 'refund').reduce((acc, t) => acc + (t.amount || 0), 0),
        purchased: transactions.filter(t => t.type === 'purchase').reduce((acc, t) => acc + (t.amount || 0), 0),
    }
  }, [transactions]);

  const outstandingCredits = useMemo(() => {
      if (!professionals) return 0;
      return professionals.reduce((acc, pro) => acc + (pro.creditBalance || 0), 0);
  }, [professionals]);

  return (
    <div className="py-12 md:py-16 bg-secondary/30 min-h-screen">
      <div className="container mx-auto px-4 max-w-6xl">
        <header className="mb-10">
          <h1 className="text-3xl font-bold tracking-tight">Credit Management</h1>
          <p className="text-muted-foreground mt-2">Monitor marketplace liquidity and adjust professional balances.</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between mb-4">
                <TrendingUp className="h-5 w-5 text-green-600" />
                <Badge variant="secondary" className="bg-green-100 text-green-700">Total Granted</Badge>
              </div>
              <p className="text-2xl font-bold">{stats.granted}</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between mb-4">
                <RotateCcw className="h-5 w-5 text-blue-600" />
                <Badge variant="secondary" className="bg-blue-100 text-blue-700">Refunded</Badge>
              </div>
              <p className="text-2xl font-bold">{stats.refunded}</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between mb-4">
                <ShoppingBag className="h-5 w-5 text-orange-600" />
                <Badge variant="secondary" className="bg-orange-100 text-orange-700">Purchased</Badge>
              </div>
              <p className="text-2xl font-bold">{stats.purchased}</p>
            </CardContent>
          </Card>
          <Card className="bg-primary text-primary-foreground border-0">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between mb-4">
                <Wallet className="h-5 w-5 opacity-80" />
                <Badge variant="outline" className="text-white border-white/30">Liability</Badge>
              </div>
              <p className="text-2xl font-bold">{outstandingCredits}</p>
              <p className="text-[10px] uppercase font-bold opacity-70">Credits Outstanding</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
                <Card>
                    <CardHeader className="border-b">
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                            <CardTitle className="text-xl">Search Professionals</CardTitle>
                            <div className="relative w-full md:w-72">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                <Input 
                                    placeholder="Name, Email, or Phone..." 
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
                                    <TableHead>Professional / Business</TableHead>
                                    <TableHead>Current Balance</TableHead>
                                    <TableHead className="text-right">Action</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {loadingPros ? (
                                    Array.from({ length: 3 }).map((_, i) => (
                                        <TableRow key={i}>
                                            <TableCell><Skeleton className="h-4 w-32" /></TableCell>
                                            <TableCell><Skeleton className="h-4 w-12" /></TableCell>
                                            <TableCell className="text-right"><Skeleton className="h-8 w-20 ml-auto" /></TableCell>
                                        </TableRow>
                                    ))
                                ) : searchQuery.length > 0 ? (
                                    filteredPros.map(pro => (
                                        <TableRow key={pro.id}>
                                            <TableCell>
                                                <p className="font-medium">{pro.name}</p>
                                                <p className="text-xs text-muted-foreground">{pro.email}</p>
                                            </TableCell>
                                            <TableCell>
                                                <Badge variant="secondary" className="font-mono">{pro.creditBalance || 0}</Badge>
                                            </TableCell>
                                            <TableCell className="text-right">
                                                <CreditAdjustmentDialog professional={pro}>
                                                    <Button size="sm" variant="outline">Adjust</Button>
                                                </CreditAdjustmentDialog>
                                            </TableCell>
                                        </TableRow>
                                    ))
                                ) : (
                                    <TableRow>
                                        <TableCell colSpan={3} className="h-32 text-center text-muted-foreground italic">
                                            Type in the search box to find a professional.
                                        </TableCell>
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="border-b">
                        <CardTitle className="flex items-center gap-2">
                            <History className="h-5 w-5 text-muted-foreground" />
                            Recent Credit Activity
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="p-0">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Type</TableHead>
                                    <TableHead>Amount</TableHead>
                                    <TableHead>Professional ID</TableHead>
                                    <TableHead>Date</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {loadingTx ? (
                                    Array.from({ length: 5 }).map((_, i) => (
                                        <TableRow key={i}><TableCell colSpan={4}><Skeleton className="h-4 w-full" /></TableCell></TableRow>
                                    ))
                                ) : transactions?.length > 0 ? (
                                    transactions.map(tx => (
                                        <TableRow key={tx.id}>
                                            <TableCell className="capitalize">
                                                <Badge variant={tx.amount > 0 ? 'default' : 'destructive'} className="text-[10px] py-0">
                                                    {tx.type}
                                                </Badge>
                                            </TableCell>
                                            <TableCell className={`font-mono font-bold ${tx.amount > 0 ? 'text-green-600' : 'text-red-600'}`}>
                                                {tx.amount > 0 ? '+' : ''}{tx.amount}
                                            </TableCell>
                                            <TableCell className="text-xs font-mono">{tx.proUid.substring(0, 8)}...</TableCell>
                                            <TableCell className="text-xs text-muted-foreground">{new Date(tx.timestamp).toLocaleDateString()}</TableCell>
                                        </TableRow>
                                    ))
                                ) : (
                                    <TableRow>
                                        <TableCell colSpan={4} className="h-32 text-center text-muted-foreground">No recent transactions.</TableCell>
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
            </div>

            <aside className="space-y-6">
                <Card className="bg-yellow-50 border-yellow-200">
                    <CardHeader>
                        <CardTitle className="text-sm font-bold text-yellow-800 uppercase tracking-wider">Policy reminder</CardTitle>
                    </CardHeader>
                    <CardContent className="text-xs text-yellow-700 leading-relaxed space-y-2">
                        <p>• Only grant credits for valid support issues or approved marketing campaigns.</p>
                        <p>• Refunds must be accompanied by a valid Lead Dispute reference.</p>
                        <p>• All adjustments are logged and visible to the Super Admin.</p>
                        <p>• Professionals are notified immediately of any manual balance changes.</p>
                    </CardContent>
                </Card>
            </aside>
        </div>
      </div>
    </div>
  );
}