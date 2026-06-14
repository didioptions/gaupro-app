
"use client";
import { useState, useEffect } from 'react';
import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore, doc, getDoc, collection, getDocs } from 'firebase/firestore';
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
      addLog("🚀 Starting Diagnostics...");
      
      try {
        const app = getApps().length === 0 ? initializeApp(hardcodedConfig) : getApp();
        const db = getFirestore(app);
        const auth = getAuth(app);

        onAuthStateChanged(auth, async (user) => {
          if (!user) {
            addLog("❌ User not logged in. Please log in first.");
            return;
          }

          addLog(`✅ Logged in as: ${user.email}`);
          addLog(`🆔 UID: ${user.uid}`);

          addLog("------------------------------------------------");
          addLog("🔍 Step 1: Testing access to your 'users' document...");
          
          try {
            const userRef = doc(db, "users", user.uid);
            const userSnap = await getDoc(userRef);
            
            if (userSnap.exists()) {
              addLog(`🎉 SUCCESS! Found your user document.`);
              addLog(`📊 Data: ${JSON.stringify(userSnap.data())}`);
              
              if (userSnap.data().role === 'admin') {
                addLog("👑 Verified: You have the ADMIN role.");
              } else {
                addLog("⚠️ Warning: Your role is NOT set to 'admin'.");
              }
            } else {
              addLog("❓ Document missing: You need to create 'users/" + user.uid + "'");
            }
          } catch (e: any) {
            addLog(`🛑 Permission Denied! Path: users/${user.uid}`);
            addLog("👉 FIX: You MUST go to Firestore > Rules and click PUBLISH.");
          }

          addLog("------------------------------------------------");
          addLog("🔍 Step 2: Testing access to 'professionalProfiles'...");
          
          try {
            const snap = await getDocs(collection(db, "professionalProfiles"));
            addLog(`✅ SUCCESS! Read ${snap.size} profiles.`);
          } catch (e: any) {
             addLog(`❌ FAILED to read profiles: ${e.message}`);
          }
        });

      } catch (error: any) {
        addLog(`❌ CRITICAL ERROR: ${error.message}`);
      }
    }

    runDiagnostics();
  }, []);

  return (
    <div style={{ padding: 40, fontFamily: 'monospace', background: '#f0f0f0', minHeight: '100vh' }}>
      <h1>🔥 Admin Truth Detector</h1>
      <p>This page checks if your database folders and rules are set up correctly.</p>
      <div style={{ background: 'black', color: '#0f0', padding: 20, borderRadius: 10, overflowX: 'auto' }}>
        {logs.map((log, i) => <div key={i} style={{marginBottom: 10}}>{log}</div>)}
      </div>
      <div style={{ marginTop: 20 }}>
          <button onClick={() => window.location.reload()} style={{ padding: '10px 20px', cursor: 'pointer' }}>Run Test Again</button>
      </div>
    </div>
  );
}
