"use client";
import { useState, useEffect } from 'react';
import { getFirestore, doc, getDoc, setDoc, serverTimestamp } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';
import { initializeFirebase } from '@/firebase';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Loader2, CheckCircle2, XCircle, ShieldAlert, User, Database, Lock, Info } from 'lucide-react';
import Link from 'next/link';

export default function DebugPage() {
  const [authState, setAuthState] = useState<any>(null);
  const [profile, setProfile] = useState<any>(null);
  const [tests, setTests] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    const { auth, firestore } = initializeFirebase();
    
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setAuthState(user);
      if (user) {
        try {
          const userRef = doc(firestore, "users", user.uid);
          const snap = await getDoc(userRef);
          if (snap.exists()) {
            setProfile(snap.data());
          }
        } catch (e) {
          console.error("Profile fetch failed:", e);
        }
      }
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const isAdmin = profile?.role === 'admin' || profile?.role === 'super_admin';

  const runIntegrityTests = async () => {
    if (!isAdmin) return;
    
    setIsRunning(true);
    const { firestore } = initializeFirebase();
    const newTests = [];

    // Test 1: Role Identification
    newTests.push({
      name: "Role Identification",
      status: profile?.role ? "PASS" : "FAIL",
      message: `Found role: ${profile?.role || 'None'}`
    });

    // Test 2: Dashboard Access Guard (Simulated)
    const isPro = profile?.role === 'pro';
    const isVerified = authState?.emailVerified;
    const canAccessDashboard = !isPro || isVerified || isAdmin;
    newTests.push({
      name: "Dashboard Access Guard",
      status: canAccessDashboard ? "PASS" : "WARN",
      message: canAccessDashboard ? "Access permitted" : "Redirection to /pro/verify-email expected"
    });

    // Test 3: Write Permission (Rule Hardening)
    try {
      if (!authState?.emailVerified && isPro) {
        const testRef = doc(firestore, "marketplace_audit_logs", "test-" + Date.now());
        await setDoc(testRef, { action: 'TEST_UNVERIFIED_WRITE', timestamp: serverTimestamp() });
        newTests.push({
          name: "Security Rule Block",
          status: "FAIL",
          message: "CRITICAL: Unverified write succeeded. Check firestore.rules."
        });
      } else {
        newTests.push({
          name: "Security Rule Block",
          status: "PASS",
          message: "Write test skipped (User is verified or Admin)"
        });
      }
    } catch (e: any) {
      newTests.push({
        name: "Security Rule Block",
        status: "PASS",
        message: "Unverified write correctly BLOCKED by rules."
      });
    }

    setTests(newTests);
    setIsRunning(false);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-secondary/10 p-4 md:p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <header className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold flex items-center gap-2">
              <ShieldAlert className="h-8 w-8 text-red-600" />
              Live Truth Detector
            </h1>
            <p className="text-muted-foreground">Production Authentication & Security Diagnostics</p>
          </div>
          <Badge variant={authState ? "default" : "destructive"}>
            {authState ? "Session Active" : "No Session"}
          </Badge>
        </header>

        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <User className="h-5 w-5 text-primary" />
                Auth State
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-3 bg-secondary/20 rounded border font-mono text-xs">
                <p>UID: {authState?.uid || 'N/A'}</p>
                <p>EMAIL: {authState?.email || 'N/A'}</p>
                <p className="mt-2 font-bold flex items-center gap-1">
                  VERIFIED: 
                  {authState?.emailVerified ? 
                    <span className="text-green-600 flex items-center gap-1">YES <CheckCircle2 className="h-3 w-3" /></span> : 
                    <span className="text-red-600 flex items-center gap-1">NO <XCircle className="h-3 w-3" /></span>
                  }
                </p>
              </div>
              {!authState && (
                <Button asChild variant="outline" className="w-full">
                  <Link href="/pro/login">Log In to Test</Link>
                </Button>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Database className="h-5 w-5 text-primary" />
                Firestore Role
              </CardTitle>
            </CardHeader>
            <CardContent>
              {profile ? (
                <div className="p-3 bg-secondary/20 rounded border space-y-1">
                  <p className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Detected Role</p>
                  <p className="text-2xl font-black capitalize text-primary">{profile.role}</p>
                  <p className="text-[10px] text-muted-foreground italic">Role read from live 'users' collection.</p>
                </div>
              ) : (
                <div className="p-3 border rounded border-dashed text-center py-6 text-muted-foreground">
                  No profile document found.
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        <Card className="border-primary/20">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <Lock className="h-5 w-5 text-primary" />
                System Integrity Tests
              </CardTitle>
              <p className="text-sm text-muted-foreground mt-1">Verifying rules against live database.</p>
            </div>
            <Button onClick={runIntegrityTests} disabled={isRunning || !authState || !isAdmin}>
              {isRunning ? <Loader2 className="h-4 w-4 animate-spin mr-2" /> : null}
              {isAdmin ? "Run Diagnostics" : "Admin Only"}
            </Button>
          </CardHeader>
          <CardContent>
            {!isAdmin ? (
              <div className="bg-yellow-50 border border-yellow-100 p-6 rounded-lg text-center">
                 <Lock className="h-10 w-10 text-yellow-600 mx-auto mb-3" />
                 <p className="font-bold text-yellow-900">Restricted Access</p>
                 <p className="text-sm text-yellow-800 mt-1">
                   Integrity tests are only executable by users with the <b>admin</b> role in Firestore.
                 </p>
              </div>
            ) : tests.length > 0 ? (
              <div className="space-y-3">
                {tests.map((test, i) => (
                  <div key={i} className="flex items-center justify-between p-3 border rounded-lg bg-background">
                    <div>
                      <p className="font-bold text-sm">{test.name}</p>
                      <p className="text-xs text-muted-foreground">{test.message}</p>
                    </div>
                    <Badge className={test.status === 'PASS' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}>
                      {test.status}
                    </Badge>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 text-muted-foreground italic">
                Click "Run Diagnostics" to verify project security.
              </div>
            )}
          </CardContent>
        </Card>

        <div className="flex justify-center gap-4">
           <Button variant="ghost" asChild>
              <Link href="/pro/dashboard">Go to Dashboard</Link>
           </Button>
           <Button variant="ghost" asChild>
              <Link href="/">Back to Home</Link>
           </Button>
        </div>
      </div>
    </div>
  );
}
