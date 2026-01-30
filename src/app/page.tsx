
"use client";
import { useState, useEffect } from 'react';
import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

// --- TRUTH DETECTOR CONFIG ---
const hardcodedConfig = {
  apiKey: "AIzaSyBMMdB5UEPLP6LrWKHywytJhgUVEY18kdQ",
  authDomain: "studio-5618869838-18486.firebaseapp.com",
  projectId: "studio-5618869838-18486",
  storageBucket: "studio-5618869838-18486.firebasestorage.app",
  messagingSenderId: "1059962490351",
  appId: "1:1059962490351:web:6ed75997aad9ad43afba1a"
};

export default function Home() {
  const [logs, setLogs] = useState<string[]>([]);

  const addLog = (msg: string) => setLogs(prev => [...prev, msg]);

  useEffect(() => {
    async function runDiagnostics() {
      addLog("1. Starting Diagnostics...");
      
      try {
        // Initialize App manually (prevents hot-reload crashes)
        const app = getApps().length === 0 ? initializeApp(hardcodedConfig) : getApp();
        addLog(`2. App Initialized. Target Project: ${app.options.projectId}`);
        
        // Initialize DB
        const db = getFirestore(app);
        
        // Try to fetch
        addLog("3. Attempting to fetch 'professionalProfiles'...");
        const colRef = collection(db, "professionalProfiles");
        const snapshot = await getDocs(colRef);
        
        addLog("------------------------------------------------");
        addLog(`✅ SUCCESS! Connection Verified.`);
        addLog(`📄 Found ${snapshot.size} documents.`);
        
        if (snapshot.size > 0) {
           const firstDoc = snapshot.docs[0].data();
           addLog(`🔎 Sample Data: ${JSON.stringify(firstDoc).slice(0, 100)}...`);
        } else {
           addLog("⚠️ Collection exists but is empty.");
        }

      } catch (error: any) {
        addLog("------------------------------------------------");
        addLog(`❌ FAILED: ${error.message}`);
        
        if (error.code === 'permission-denied') {
            addLog("👉 RULES ISSUE: Go to Firebase Console > Firestore > Rules.");
            addLog("👉 Paste: match /{document=**} { allow read, write: if true; }");
            addLog("👉 CLICK PUBLISH.");
        }
      }
    }

    runDiagnostics();
  }, []);

  return (
    <div style={{ padding: 40, fontFamily: 'monospace', background: '#222', color: '#0f0', minHeight: '100vh' }}>
      <h1>🔥 Truth Detector</h1>
      <div>
        {logs.map((log, i) => <div key={i} style={{marginBottom: 10}}>{log}</div>)}
      </div>
    </div>
  );
}
