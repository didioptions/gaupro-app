'use client';

import React, { useMemo, useState } from 'react';
import { useCollection, useFirestore, useMemoFirebase, useUser } from '@/firebase';
import { collection, query, orderBy, limit, DocumentData, doc, updateDoc, serverTimestamp, where } from 'firebase/firestore';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { Button } from '@/components/ui/button';
import { 
    ShieldAlert, 
    AlertTriangle, 
    CheckCircle2, 
    User, 
    Clock, 
    Search,
    Filter,
    ArrowRight
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import Link from 'next/link';

export default function FraudDashboardPage() {
  const firestore = useFirestore();
  const { isUserLoading } = useUser();
  const { toast } = useToast();
  const [filter, setFilter] = useState<'all' | 'open' | 'resolved'>('open');

  const alertsQuery = useMemoFirebase(() => {
    if (!firestore || isUserLoading) return null;
    let base = collection(firestore, 'fraud_alerts');
    if (filter === 'all') return query(base, orderBy('createdAt', 'desc'), limit(50));
    return query(base, where('resolved', '==', filter === 'resolved'), orderBy('createdAt', 'desc'), limit(50));
  }, [firestore, isUserLoading, filter]);

  const { data: alerts, loading } = useCollection<DocumentData>(alertsQuery);

  const stats = useMemo(() => {
    if (!alerts) return { critical: 0, high: 0, open: 0 };
    return {
      critical: alerts.filter(a => a.severity === 'critical' && !a.resolved).length,
      high: alerts.filter(a => a.severity === 'high' && !a.resolved).length,
      open: alerts.filter(a => !a.resolved).length
    };
  }, [alerts]);

  const resolveAlert = async (id: string) => {
    try {
      await updateDoc(doc(firestore!, 'fraud_alerts', id), { 
        resolved: true, 
        resolvedAt: serverTimestamp() 
      });
      toast({ title: "Alert Resolved", description: "Marketplace trust score updated." });
    } catch (e: any) {
      toast({ variant: 'destructive', title: "Error", description: e.message });
    }
  };

  return (
    <div className="py-12 md:py-16 bg-secondary/30 min-h-screen">
      <div className="container mx-auto px-4 max-w-6xl">
        <header className="mb-10 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Fraud & Risk Center</h1>
            <p className="text-muted-foreground mt-2">Automated threat detection and identity risk management.</p>
          </div>
          <div className="flex gap-2">
            <Button 
                variant={filter === 'open' ? 'default' : 'outline'} 
                onClick={() => setFilter('open')}
                size="sm"
            >
                Open
            </Button>
            <Button 
                variant={filter === 'resolved' ? 'default' : 'outline'} 
                onClick={() => setFilter('resolved')}
                size="sm"
            >
                Resolved
            </Button>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <Card className="border-red-200 bg-red-50">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between mb-2">
                <ShieldAlert className="h-5 w-5 text-red-600" />
                <Badge variant="destructive">Immediate Action</Badge>
              </div>
              <p className="text-3xl font-bold text-red-700">{stats.critical}</p>
              <p className="text-xs text-red-600 font-bold uppercase mt-1">Critical Alerts</p>
            </CardContent>
          </Card>
          <Card className="border-orange-200 bg-orange-50">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between mb-2">
                <AlertTriangle className="h-5 w-5 text-orange-600" />
                <Badge variant="secondary" className="bg-orange-200 text-orange-800">Review Needed</Badge>
              </div>
              <p className="text-3xl font-bold text-orange-700">{stats.high}</p>
              <p className="text-xs text-orange-600 font-bold uppercase mt-1">High Risk Items</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between mb-2">
                <Clock className="h-5 w-5 text-muted-foreground" />
                <Badge variant="outline">Total Open</Badge>
              </div>
              <p className="text-3xl font-bold">{stats.open}</p>
              <p className="text-xs text-muted-foreground font-bold uppercase mt-1">Pending Resolution</p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader className="border-b">
            <CardTitle>Threat Feed</CardTitle>
            <CardDescription>Real-time system-generated alerts based on user behavior patterns.</CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Risk Type</TableHead>
                  <TableHead>User ID</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead>Severity</TableHead>
                  <TableHead className="text-right">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {loading ? (
                   Array.from({ length: 5 }).map((_, i) => (
                    <TableRow key={i}>
                      <TableCell><Skeleton className="h-4 w-24" /></TableCell>
                      <TableCell><Skeleton className="h-4 w-32" /></TableCell>
                      <TableCell><Skeleton className="h-4 w-full" /></TableCell>
                      <TableCell><Skeleton className="h-6 w-16" /></TableCell>
                      <TableCell className="text-right"><Skeleton className="h-8 w-20 ml-auto" /></TableCell>
                    </TableRow>
                  ))
                ) : alerts?.length > 0 ? (
                  alerts.map(alert => (
                    <TableRow key={alert.id}>
                      <TableCell className="font-bold text-xs uppercase tracking-wider">{alert.type}</TableCell>
                      <TableCell className="font-mono text-[10px]">{alert.userId?.substring(0,12)}...</TableCell>
                      <TableCell className="text-sm">{alert.description}</TableCell>
                      <TableCell>
                        <Badge variant={alert.severity === 'critical' ? 'destructive' : 'secondary'} className="capitalize">
                          {alert.severity}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right space-x-2">
                        {!alert.resolved && (
                          <Button size="sm" variant="ghost" className="text-green-600" onClick={() => resolveAlert(alert.id)}>
                            <CheckCircle2 className="h-4 w-4" />
                          </Button>
                        )}
                        <Button size="sm" variant="outline" asChild>
                          <Link href={`/pro/admin/customers?search=${alert.userId}`}>
                            <User className="h-4 w-4" />
                          </Link>
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={5} className="h-32 text-center text-muted-foreground italic">
                      No active threats detected. Marketplace is healthy.
                    </TableCell>
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
