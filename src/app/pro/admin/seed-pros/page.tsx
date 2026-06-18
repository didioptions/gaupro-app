
'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { useFirestore } from '@/firebase';
import { doc, setDoc, serverTimestamp } from 'firebase/firestore';
import { seedPros } from '@/lib/seed-pros-data';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Database, CheckCircle2, AlertTriangle } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

export default function SeedProsPage() {
  const [isSeeding, setIsSeeding] = useState(false);
  const [progress, setProgress] = useState(0);
  const [logs, setLogs] = useState<string[]>([]);
  const firestore = useFirestore();
  const { toast } = useToast();

  const addLog = (msg: string) => setLogs(prev => [`${new Date().toLocaleTimeString()}: ${msg}`, ...prev]);

  const handleSeed = async () => {
    if (!firestore) return;
    setIsSeeding(true);
    setLogs([]);
    addLog(`🚀 Starting deployment of ${seedPros.length} Seed Profiles...`);

    let successCount = 0;

    for (let i = 0; i < seedPros.length; i++) {
      const pro = seedPros[i];
      try {
        const proRef = doc(firestore, 'professionalProfiles', pro.id);
        await setDoc(proRef, {
          ...pro,
          createdAt: serverTimestamp(),
          updatedAt: serverTimestamp(),
          source: 'seed_system_v1'
        }, { merge: true });
        
        successCount++;
        const p = Math.round(((i + 1) / seedPros.length) * 100);
        setProgress(p);
        if (i % 5 === 0) addLog(`✅ Syncing: ${pro.name}...`);
      } catch (error: any) {
        addLog(`❌ Failed: ${pro.name} - ${error.message}`);
      }
    }

    addLog(`✨ Deployment Finished! ${successCount} profiles live.`);
    setIsSeeding(false);
    toast({
      title: "Seeding Complete",
      description: `${successCount} business profiles have been added to the directory.`,
    });
  };

  return (
    <div className="py-12 md:py-16 bg-secondary/30 min-h-screen">
      <div className="container mx-auto px-4 max-w-4xl">
        <header className="mb-10">
          <h1 className="text-3xl font-bold tracking-tight">Marketplace Inventory Seeder</h1>
          <p className="text-muted-foreground mt-2">Populate GauPro with high-quality, claimable business profiles.</p>
        </header>

        <div className="grid gap-8">
          <Card className="border-primary/20 shadow-xl">
            <CardHeader className="bg-primary/5 border-b">
              <div className="flex justify-between items-center">
                <div>
                  <CardTitle>Seed Inventory Package: Gauteng Phase 1</CardTitle>
                  <CardDescription>Target: 50 Profiles (Demolition, Rubble, Plant Hire, TLB, Excavator)</CardDescription>
                </div>
                <Database className="h-8 w-8 text-primary opacity-20" />
              </div>
            </CardHeader>
            <CardContent className="pt-6 space-y-6">
              <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg flex items-start gap-3">
                <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5" />
                <div className="text-sm text-yellow-800">
                  <p className="font-bold">Production Impact</p>
                  <p>This action will overwrite existing profiles if they share the same SEO slug. Seed profiles will be marked as <b>Unclaimed</b> and <b>Claimable</b>.</p>
                </div>
              </div>

              {isSeeding && (
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-primary">
                    <span>Deploying Assets...</span>
                    <span>{progress}%</span>
                  </div>
                  <Progress value={progress} className="h-2" />
                </div>
              )}

              <Button 
                onClick={handleSeed} 
                disabled={isSeeding} 
                size="lg" 
                className="w-full h-14 text-lg font-bold"
              >
                {isSeeding ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Injecting Database Records...
                  </>
                ) : (
                  <>
                    <CheckCircle2 className="mr-2 h-5 w-5" />
                    Deploy 50 Seed Profiles Now
                  </>
                )}
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Execution Log</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-slate-900 text-slate-100 p-4 rounded-lg font-mono text-xs h-64 overflow-y-auto space-y-1">
                {logs.length > 0 ? logs.map((log, i) => (
                  <div key={i} className="border-l border-white/10 pl-2">{log}</div>
                )) : (
                  <div className="text-slate-500 italic">Waiting for command...</div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
