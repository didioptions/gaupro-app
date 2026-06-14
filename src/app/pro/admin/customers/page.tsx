'use client';

import React, { useMemo, useState } from 'react';
import { useCollection, useFirestore, useMemoFirebase, useUser } from '@/firebase';
import { collection, query, orderBy, limit, DocumentData, doc, updateDoc, serverTimestamp, addDoc } from 'firebase/firestore';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { 
    Search, 
    Users, 
    UserCheck, 
    UserMinus, 
    History,
    MapPin,
    Mail,
    Phone,
    ShieldAlert,
    ChevronDown
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

export default function CustomerManagementPage() {
  const firestore = useFirestore();
  const { user: adminUser, isUserLoading } = useUser();
  const { toast } = useToast();
  const [searchQuery, setSearchQuery] = useState('');
  const [displayLimit, setDisplayLimit] = useState(25);
  const [selectedUser, setSelectedUser] = useState<any>(null);
  const [actionType, setActionType] = useState<'suspend' | 'reactivate' | null>(null);
  const [notes, setAdminNotes] = useState('');

  // Fetch users with an increasing limit (simple pagination for initial scale)
  const usersQuery = useMemoFirebase(() => {
    if (!firestore || isUserLoading) return null;
    return query(collection(firestore, 'users'), orderBy('createdAt', 'desc'), limit(displayLimit));
  }, [firestore, isUserLoading, displayLimit]);

  const { data: users, loading } = useCollection<DocumentData>(usersQuery);

  const stats = useMemo(() => {
    if (!users) return { total: 0, active: 0, suspended: 0, newThisMonth: 0 };
    const now = new Date();
    const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
    
    return {
      total: users.length,
      active: users.filter(u => u.status !== 'suspended').length,
      suspended: users.filter(u => u.status === 'suspended').length,
      newThisMonth: users.filter(u => {
        const d = u.createdAt?.seconds ? new Date(u.createdAt.seconds * 1000) : new Date(u.createdAt);
        return !isNaN(d.getTime()) && d >= startOfMonth;
      }).length
    };
  }, [users]);

  const filteredUsers = useMemo(() => {
    if (!users) return [];
    return users.filter(u => 
      (u.fullName || u.name || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
      (u.email || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
      (u.phone || '').includes(searchQuery)
    );
  }, [users, searchQuery]);

  const handleStatusUpdate = async () => {
    if (!selectedUser || !actionType || !notes || !adminUser) return;

    try {
      const userRef = doc(firestore!, 'users', selectedUser.id);
      const newStatus = actionType === 'suspend' ? 'suspended' : 'active';
      
      await updateDoc(userRef, { 
        status: newStatus,
        updatedAt: serverTimestamp()
      });

      await addDoc(collection(firestore!, 'marketplace_audit_logs'), {
        adminUid: adminUser.uid,
        action: actionType.toUpperCase(),
        targetId: selectedUser.id,
        targetType: 'user',
        notes,
        timestamp: serverTimestamp()
      });

      toast({ title: 'Success', description: `User account ${newStatus}.` });
      setSelectedUser(null);
      setAdminNotes('');
    } catch (error: any) {
      toast({ variant: 'destructive', title: 'Error', description: error.message });
    }
  };

  const getFormattedDate = (date: any) => {
    if (!date) return 'N/A';
    if (date.seconds) return new Date(date.seconds * 1000).toLocaleDateString();
    const d = new Date(date);
    return isNaN(d.getTime()) ? 'N/A' : d.toLocaleDateString();
  };

  return (
    <div className="py-12 md:py-16 bg-secondary/30 min-h-screen">
      <div className="container mx-auto px-4 max-w-6xl">
        <header className="mb-10">
          <h1 className="text-3xl font-bold tracking-tight">Customer Management</h1>
          <p className="text-muted-foreground mt-2">Manage user accounts and monitor customer activity.</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between mb-2">
                <Users className="h-5 w-5 text-primary" />
                <Badge variant="secondary">In View</Badge>
              </div>
              <p className="text-2xl font-bold">{stats.total}</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between mb-2">
                <UserCheck className="h-5 w-5 text-green-600" />
                <Badge variant="secondary" className="bg-green-100 text-green-700">Active</Badge>
              </div>
              <p className="text-2xl font-bold">{stats.active}</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between mb-2">
                <ShieldAlert className="h-5 w-5 text-red-600" />
                <Badge variant="secondary" className="bg-red-100 text-red-700">Suspended</Badge>
              </div>
              <p className="text-2xl font-bold">{stats.suspended}</p>
            </CardContent>
          </Card>
          <Card className="bg-primary text-primary-foreground border-0">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between mb-2">
                <History className="h-5 w-5 opacity-80" />
                <Badge variant="outline" className="text-white border-white/30">Recent</Badge>
              </div>
              <p className="text-2xl font-bold">+{stats.newThisMonth}</p>
              <p className="text-[10px] uppercase font-bold opacity-70">New This Month</p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader className="border-b">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <CardTitle className="text-xl">User Directory</CardTitle>
              <div className="flex gap-2 w-full md:w-auto">
                  <div className="relative flex-grow md:w-72">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input 
                      placeholder="Name, Email, or Phone..." 
                      className="pl-9 h-9"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>User / Info</TableHead>
                  <TableHead>Location</TableHead>
                  <TableHead>Joined</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {loading && users.length === 0 ? (
                  Array.from({ length: 5 }).map((_, i) => (
                    <TableRow key={i}>
                      <TableCell><Skeleton className="h-4 w-32" /></TableCell>
                      <TableCell><Skeleton className="h-4 w-24" /></TableCell>
                      <TableCell><Skeleton className="h-4 w-20" /></TableCell>
                      <TableCell><Skeleton className="h-4 w-12" /></TableCell>
                      <TableCell className="text-right"><Skeleton className="h-8 w-20 ml-auto" /></TableCell>
                    </TableRow>
                  ))
                ) : filteredUsers.map(user => (
                  <TableRow key={user.id}>
                    <TableCell>
                      <p className="font-medium">{user.fullName || user.name || 'Unnamed'}</p>
                      <div className="flex flex-col gap-1 mt-1">
                        <span className="text-xs text-muted-foreground flex items-center gap-1"><Mail className="h-3 w-3" /> {user.email}</span>
                        <span className="text-xs text-muted-foreground flex items-center gap-1"><Phone className="h-3 w-3" /> {user.phone || 'N/A'}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1 text-sm">
                        <MapPin className="h-3 w-3 text-muted-foreground" />
                        <span className="capitalize">{user.location || 'Unknown'}</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-xs text-muted-foreground">
                      {getFormattedDate(user.createdAt)}
                    </TableCell>
                    <TableCell>
                      <Badge variant={user.status === 'suspended' ? 'destructive' : 'secondary'}>
                        {user.status || 'Active'}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      {user.status === 'suspended' ? (
                        <Button 
                          size="sm" 
                          variant="outline" 
                          className="text-green-600 hover:text-green-700"
                          onClick={() => { setSelectedUser(user); setActionType('reactivate'); }}
                        >
                          <UserCheck className="h-4 w-4" />
                        </Button>
                      ) : (
                        <Button 
                          size="sm" 
                          variant="outline" 
                          className="text-red-600 hover:text-red-700"
                          onClick={() => { setSelectedUser(user); setActionType('suspend'); }}
                        >
                          <UserMinus className="h-4 w-4" />
                        </Button>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            {users && users.length >= displayLimit && (
                <div className="p-4 border-t flex justify-center">
                    <Button variant="ghost" size="sm" onClick={() => setDisplayLimit(prev => prev + 25)} className="text-xs gap-2">
                        <ChevronDown className="h-4 w-4" /> Load More Users
                    </Button>
                </div>
            )}
          </CardContent>
        </Card>
      </div>

      <Dialog open={!!selectedUser} onOpenChange={() => setSelectedUser(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="capitalize">{actionType} Account: {selectedUser?.fullName}</DialogTitle>
            <DialogDescription>
              This action will be logged. The user will be notified of their status change.
            </DialogDescription>
          </DialogHeader>
          <div className="py-4 space-y-4">
            <div className="space-y-2">
              <Label>Internal Audit Notes (Required)</Label>
              <Input 
                placeholder="Reason for this action..." 
                value={notes} 
                onChange={(e) => setAdminNotes(e.target.value)}
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setSelectedUser(null)}>Cancel</Button>
            <Button 
              disabled={!notes}
              variant={actionType === 'suspend' ? 'destructive' : 'default'}
              onClick={handleStatusUpdate}
            >
              Confirm {actionType}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}