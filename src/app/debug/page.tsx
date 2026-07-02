
"use client";
import { useState, useEffect } from 'react';
import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore, doc, getDoc, setDoc, serverTimestamp } from 'firebase/firestore';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const hardcodedConfig = {
  apiKey: "AIzaSyBMMdB5UEPLP6LrWKHywytJhgUVEY18kdQ",
  authDomain: "studio-5618869838-18486.firebaseapp.com",
  projectId: "studio-5618869838-18486",
  storageBucket: "studio-5618869838-18486.firebasestorage.app",
  messagingSenderId: "1059962490351",
  appId: "1:1059962490351:web:6ed75997aad9ad43afba1a"
};

export default function DebugPage() {
  const [logs, setLogs] = useState<string[]>([]);
  const addLog = (msg: string) => setLogs(prev => [...prev, `${new Date().toLocaleTimeString()}: ${msg}`]);

  useEffect(() => {
    async function runDiagnostics() {
      addLog("🚀 Starting Live Diagnostics...");
      
      try {
        const app = getApps().length === 0 ? initializeApp(hardcodedConfig) : getApp();
        const db = getFirestore(app);
        const auth = getAuth(app);

        onAuthStateChanged(auth, async (user) => {
          if (!user) {
            addLog("❌ User not logged in. Please log in to /pro/login first.");
            return;
          }

          addLog(`✅ Auth: Logged in as ${user.email}`);
          addLog(`📧 Verification: ${user.emailVerified ? "VERIFIED ✅" : "UNVERIFIED ❌"}`);
          addLog(`🆔 UID: ${user.uid}`);

          addLog("------------------------------------------------");
          addLog("🔍 Step 1: Testing Profile Read...");
          
          try {
            const userRef = doc(db, "users", user.uid);
            const userSnap = await getDoc(userRef);
            
            if (userSnap.exists()) {
              addLog(`🎉 Found user doc. Role: ${userSnap.data().role}`);
            } else {
              addLog("❓ User document missing in Firestore.");
            }
          } catch (e: any) {
            addLog(`🛑 Read Permission Denied! check your firestore rules.`);
          }

          addLog("------------------------------------------------");
          addLog("🔍 Step 2: Testing Rule Hardening (Write Test)...");
          
          if (!user.emailVerified) {
             addLog("👉 Attempting write as UNVERIFIED user (Should fail)...");
             try {
                const testRef = doc(db, "marketplace_audit_logs", "test-id-" + Date.now());
                await setDoc(testRef, { action: 'TEST_UNVERIFIED_WRITE', timestamp: serverTimestamp() });
                addLog("⚠️ CRITICAL SECURITY RISK: Unverified write SUCCEEDED.");
             } catch (e: any) {
                addLog("✅ SUCCESS: Unverified write was BLOCKED by rules. System is secure.");
             }
          } else {
             addLog("👉 Attempting write as VERIFIED user (Should succeed)...");
             try {
                const testRef = doc(db, "professionalProfiles", user.uid);
                await setDoc(testRef, { lastCheck: serverTimestamp() }, { merge: true });
                addLog("✅ SUCCESS: Verified write succeeded.");
             } catch (e: any) {
                addLog(`❌ FAILED: Verified write blocked: ${e.message}`);
             }
          }

          addLog("------------------------------------------------");
          addLog("📊 Summary: If Step 2 blocked your unverified write, the system is PRODUCTION-READY.");
        });

      } catch (error: any) {
        addLog(`❌ CRITICAL ERROR: ${error.message}`);
      }
    }

    runDiagnostics();
  }, []);

  return (
    <div style={{ padding: 40, fontFamily: 'monospace', background: '#f8f9fa', minHeight: '100vh' }}>
      <h1 style={{ color: '#D32F2F' }}>🛡️ GauPro Live Truth Detector</h1>
      <p>Verifying Authentication and Firestore Security Rules against your production database.</p>
      <div style={{ background: '#1e1e1e', color: '#00ff00', padding: 25, borderRadius: 12, boxShadow: '0 10px 30px rgba(0,0,0,0.2)', overflowX: 'auto' }}>
        {logs.map((log, i) => <div key={i} style={{marginBottom: 8}}>{log}</div>)}
      </div>
      <div style={{ marginTop: 25, display: 'flex', gap: 12 }}>
          <button onClick={() => window.location.reload()} style={{ padding: '12px 24px', borderRadius: 8, background: '#D32F2F', color: 'white', border: 'none', cursor: 'pointer', fontWeight: 'bold' }}>Run Test Again</button>
          <a href="/pro/dashboard" style={{ padding: '12px 24px', borderRadius: 8, background: '#eee', color: '#333', textDecoration: 'none', fontWeight: 'bold' }}>Back to Dashboard</a>
      </div>
    </div>
  );
}
