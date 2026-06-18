
'use client';

import React, { useState, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { useFirestore } from '@/firebase';
import { doc, setDoc, serverTimestamp, getDocs, collection, query, where } from 'firebase/firestore';
import { seedPros, SeedProfile } from '@/lib/seed-pros-data';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Database, CheckCircle2, AlertTriangle, ExternalLink, Trash2, ShieldCheck, Search } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';

export default function SeedProsPage() {
  const [profiles, setProfiles] = useState<SeedProfile[]>(seedPros);
  const [isSeeding, setIsSeeding] = useState(false);
  const [progress, setProgress] = useState(0);
  const [logs, setLogs] = useState<string[]>([]);
  const [searchTerm, setSearchQuery] = useState('');
  const firestore = useFirestore();
  const { toast } = useToast();

  const addLog = (msg: string) => setLogs(prev => [`${new Date().toLocaleTimeString()}: ${msg}`, ...prev]);

  const removeProfile = (id: string) => {
    setProfiles(prev => prev.filter(p => p.id !== id));
    addLog(`Removed profile: ${id}`);
  };

  const filteredProfiles = useMemo(() => {
    return profiles.filter(p => 
      p.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      p.serviceCategory.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [profiles, searchTerm]);

  const handleSeed = async () => {
    if (!firestore) return;
    setIsSeeding(true);
    setLogs([]);
    addLog(`🚀 Starting verified deployment of ${profiles.length} real businesses...`);

    let successCount = 0;
    let duplicateCount = 0;

    for (let i = 0; i < profiles.length; i++) {
      const pro = profiles[i];
      
      try {
        // Duplicate detection: Check if name already exists
        const q = query(collection(firestore, 'professionalProfiles'), where('name', '==', pro.name));
        const snap = await getDocs(q);
        
        if (!snap.empty) {
          duplicateCount++;
          addLog(`⚠️ Skipped Duplicate: ${pro.name}`);
          continue;
        }

        const proRef = doc(firestore, 'professionalProfiles', pro.id);
        await setDoc(proRef, {
          ...pro,
          createdAt: serverTimestamp(),
          updatedAt: serverTimestamp(),
          source: 'manual_seed_v3_real_verified',
          verificationStatus: 'unclaimed',
          // Ensure zeroed out marketplace stats
          rating: null,
          reviews: 0,
          reviewCount: 0,
          totalReviews: 0,
          leadCount: 0
        }, { merge: true });
        
        successCount++;
        const p = Math.round(((i + 1) / profiles.length) * 100);
        setProgress(p);
        addLog(`✅ Deployed: ${pro.name}`);
      } catch (error: any) {
        addLog(`❌ Error deploying ${pro.name}: ${error.message}`);
      }
    }

    addLog(`✨ Sync Finished! ${successCount} live, ${duplicateCount} skipped.`);
    setIsSeeding(false);
    toast({
      title: "Marketplace Updated",
      description: `${successCount} businesses deployed.`,
    });
  };

  return (
    <div className="py-12 md:py-16 bg-secondary/30 min-h-screen">
      <div className="container mx-auto px-4 max-w-6xl">
        <header className="mb-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Marketplace Inventory Seeder</h1>
            <p className="text-muted-foreground mt-2">Deploying verified, high-quality South African business data.</p>
          </div>
          <div className="flex gap-2 w-full md:w-auto">
             <div className="relative flex-grow md:w-64">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input 
                  placeholder="Filter queue..." 
                  className="pl-9 h-10 bg-white" 
                  value={searchTerm}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
             </div>
             <Badge variant="outline" className="h-10 px-4 bg-white border-primary/20">Queue: {profiles.length}</Badge>
          </div>
        </header>

        <div className="grid gap-8">
          <Card className="border-primary/20 shadow-xl overflow-hidden">
            <CardHeader className="bg-primary/5 border-b">
              <div className="flex justify-between items-center">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    <ShieldCheck className="h-5 w-5 text-primary" />
                    Verified Deployment Queue
                  </CardTitle>
                  <CardDescription>Real businesses identified for initial platform rollout.</CardDescription>
                </div>
                <Database className="h-8 w-8 text-primary opacity-20" />
              </div>
            </CardHeader>
            <CardContent className="p-0">
               <div className="max-h-[500px] overflow-y-auto">
                 <Table>
                   <TableHeader className="sticky top-0 bg-white z-10">
                     <TableRow>
                       <TableHead>Business Name</TableHead>
                       <TableHead>Category</TableHead>
                       <TableHead>Location</TableHead>
                       <TableHead>Public Verification</TableHead>
                       <TableHead className="text-right">Action</TableHead>
                     </TableRow>
                   </TableHeader>
                   <TableBody>
                     {filteredProfiles.map(pro => (
                       <TableRow key={pro.id} className="hover:bg-secondary/20">
                         <TableCell className="font-bold text-primary">{pro.name}</TableCell>
                         <TableCell><Badge variant="secondary" className="font-normal">{pro.serviceCategory}</Badge></TableCell>
                         <TableCell className="capitalize text-xs font-medium text-muted-foreground">{pro.location}</TableCell>
                         <TableCell>
                            <div className="flex flex-col gap-1 text-[10px]">
                               {pro.phone && <span className="flex items-center gap-1">📞 {pro.phone}</span>}
                               {pro.website && <a href={pro.website} target="_blank" className="text-blue-600 hover:underline flex items-center gap-1">🌐 Web <ExternalLink className="h-2 w-2" /></a>}
                            </div>
                         </TableCell>
                         <TableCell className="text-right">
                            <Button variant="ghost" size="icon" onClick={() => removeProfile(pro.id)} className="text-red-500 hover:text-red-700 hover:bg-red-50">
                               <Trash2 className="h-4 w-4" />
                            </Button>
                         </TableCell>
                       </TableRow>
                     ))}
                   </TableBody>
                 </Table>
               </div>

              <div className="p-6 bg-secondary/10 border-t space-y-6">
                <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div className="text-sm text-blue-800">
                    <p className="font-bold">Trust & Integrity Check</p>
                    <p>All data here is sourced from public business listings. Profiles are marked as <b>Unclaimed</b>. No fake ratings, reviews, or badges will be generated during this sync.</p>
                  </div>
                </div>

                {isSeeding && (
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-primary">
                      <span>Synchronizing Marketplace Records...</span>
                      <span>{progress}%</span>
                    </div>
                    <Progress value={progress} className="h-2" />
                  </div>
                )}

                <Button 
                  onClick={handleSeed} 
                  disabled={isSeeding || profiles.length === 0} 
                  size="lg" 
                  className="w-full h-14 text-lg font-bold shadow-lg"
                >
                  {isSeeding ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Deploying Verified Inventory...
                    </>
                  ) : (
                    <>
                      <CheckCircle2 className="mr-2 h-5 w-5" />
                      Approve & Deploy {profiles.length} Businesses
                    </>
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="py-4 border-b">
              <CardTitle className="text-sm font-bold uppercase tracking-widest text-muted-foreground flex items-center gap-2">
                <Database className="h-4 w-4" />
                Audit Log
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="bg-slate-900 text-slate-100 p-4 font-mono text-[10px] h-48 overflow-y-auto space-y-1">
                {logs.length > 0 ? logs.map((log, i) => (
                  <div key={i} className="border-l border-white/10 pl-2 py-0.5">{log}</div>
                )) : (
                  <div className="text-slate-500 italic">Marketplace idle. Waiting for deployment command...</div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
