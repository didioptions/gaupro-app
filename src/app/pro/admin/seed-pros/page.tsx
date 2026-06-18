
'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { useFirestore } from '@/firebase';
import { doc, setDoc, serverTimestamp } from 'firebase/firestore';
import { seedPros, SeedProfile } from '@/lib/seed-pros-data';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Database, CheckCircle2, AlertTriangle, ExternalLink, XCircle, Trash2 } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';

export default function SeedProsPage() {
  const [profiles, setProfiles] = useState<SeedProfile[]>(seedPros);
  const [isSeeding, setIsSeeding] = useState(false);
  const [progress, setProgress] = useState(0);
  const [logs, setLogs] = useState<string[]>([]);
  const firestore = useFirestore();
  const { toast } = useToast();

  const addLog = (msg: string) => setLogs(prev => [`${new Date().toLocaleTimeString()}: ${msg}`, ...prev]);

  const removeProfile = (id: string) => {
    setProfiles(prev => prev.filter(p => p.id !== id));
    addLog(`Removed profile: ${id}`);
  };

  const handleSeed = async () => {
    if (!firestore) return;
    setIsSeeding(true);
    setLogs([]);
    addLog(`🚀 Starting verified deployment of ${profiles.length} Seed Profiles...`);

    let successCount = 0;

    for (let i = 0; i < profiles.length; i++) {
      const pro = profiles[i];
      try {
        const proRef = doc(firestore, 'professionalProfiles', pro.id);
        await setDoc(proRef, {
          ...pro,
          createdAt: serverTimestamp(),
          updatedAt: serverTimestamp(),
          source: 'manual_seed_v2_real_data',
          verificationStatus: 'unclaimed'
        }, { merge: true });
        
        successCount++;
        const p = Math.round(((i + 1) / profiles.length) * 100);
        setProgress(p);
        addLog(`✅ Deployed: ${pro.name}`);
      } catch (error: any) {
        addLog(`❌ Failed: ${pro.name} - ${error.message}`);
      }
    }

    addLog(`✨ Deployment Finished! ${successCount} real business profiles are now live.`);
    setIsSeeding(false);
    toast({
      title: "Seeding Complete",
      description: `${successCount} real business profiles have been added to the directory.`,
    });
  };

  return (
    <div className="py-12 md:py-16 bg-secondary/30 min-h-screen">
      <div className="container mx-auto px-4 max-w-6xl">
        <header className="mb-10 flex justify-between items-end">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Marketplace Inventory Seeder</h1>
            <p className="text-muted-foreground mt-2">Populate GauPro with real, high-quality South African business data.</p>
          </div>
          <div className="text-right">
             <Badge variant="outline" className="mb-2">Queue: {profiles.length} Profiles</Badge>
          </div>
        </header>

        <div className="grid gap-8">
          <Card className="border-primary/20 shadow-xl overflow-hidden">
            <CardHeader className="bg-primary/5 border-b">
              <div className="flex justify-between items-center">
                <div>
                  <CardTitle>Inventory Review Queue</CardTitle>
                  <CardDescription>Verify accuracy before pushing to production Firestore.</CardDescription>
                </div>
                <Database className="h-8 w-8 text-primary opacity-20" />
              </div>
            </CardHeader>
            <CardContent className="p-0">
               <Table>
                 <TableHeader>
                   <TableRow>
                     <TableHead>Business Name</TableHead>
                     <TableHead>Category</TableHead>
                     <TableHead>Location</TableHead>
                     <TableHead>Contact Info</TableHead>
                     <TableHead className="text-right">Action</TableHead>
                   </TableRow>
                 </TableHeader>
                 <TableBody>
                   {profiles.map(pro => (
                     <TableRow key={pro.id}>
                       <TableCell className="font-bold">{pro.name}</TableCell>
                       <TableCell><Badge variant="secondary">{pro.serviceCategory}</Badge></TableCell>
                       <TableCell className="capitalize">{pro.location}</TableCell>
                       <TableCell>
                          <div className="flex flex-col gap-1 text-xs">
                             {pro.phone && <span className="flex items-center gap-1">📞 {pro.phone}</span>}
                             {pro.website && <a href={pro.website} target="_blank" className="text-primary hover:underline flex items-center gap-1">🌐 Website <ExternalLink className="h-3 w-3" /></a>}
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

              <div className="p-6 bg-secondary/10 border-t space-y-6">
                <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                  <div className="text-sm text-yellow-800">
                    <p className="font-bold">Real Data Policy</p>
                    <p>Ensure all phone numbers and websites are valid. These profiles will be marked as <b>Unclaimed</b>. No fake ratings or reviews will be added.</p>
                  </div>
                </div>

                {isSeeding && (
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-primary">
                      <span>Syncing Records...</span>
                      <span>{progress}%</span>
                    </div>
                    <Progress value={progress} className="h-2" />
                  </div>
                )}

                <Button 
                  onClick={handleSeed} 
                  disabled={isSeeding || profiles.length === 0} 
                  size="lg" 
                  className="w-full h-14 text-lg font-bold"
                >
                  {isSeeding ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Deploying Real Businesses...
                    </>
                  ) : (
                    <>
                      <CheckCircle2 className="mr-2 h-5 w-5" />
                      Approve & Deploy {profiles.length} Profiles
                    </>
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Sync Log</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-slate-900 text-slate-100 p-4 rounded-lg font-mono text-xs h-64 overflow-y-auto space-y-1">
                {logs.length > 0 ? logs.map((log, i) => (
                  <div key={i} className="border-l border-white/10 pl-2">{log}</div>
                )) : (
                  <div className="text-slate-500 italic">Waiting for approval...</div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
