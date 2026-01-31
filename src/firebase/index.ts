
'use client';

import { initializeApp, getApps, getApp, type FirebaseApp } from 'firebase/app';
import { getAuth, type Auth } from 'firebase/auth';
import { getFirestore, type Firestore } from 'firebase/firestore';

// Your web app's Firebase configuration. This is safe to be public.
const firebaseConfig = {
  apiKey: "AIzaSyBMMdB5UEPLP6LrWKHywytJhgUVEY18kdQ",
  authDomain: "studio-5618869838-18486.firebaseapp.com",
  projectId: "studio-5618869838-18486",
  storageBucket: "studio-5618869838-18486.firebasestorage.app",
  messagingSenderId: "1059962490351",
  appId: "1:1059962490351:web:6ed75997aad9ad43afba1a"
};

interface FirebaseServices {
  firebaseApp: FirebaseApp;
  auth: Auth;
  firestore: Firestore;
}

// A memoized singleton instance of Firebase services to avoid re-initialization.
let firebaseServices: FirebaseServices | null = null;

/**
 * Initializes Firebase on the client-side and returns the services.
 * This function is idempotent, ensuring Firebase is only initialized once.
 */
export function initializeFirebase(): FirebaseServices {
  if (firebaseServices) {
    return firebaseServices;
  }

  const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const firestore = getFirestore(app);

  firebaseServices = { firebaseApp: app, auth, firestore };
  return firebaseServices;
}

export * from './provider';
export * from './client-provider';
export * from './firestore/use-collection';
export * from './firestore/use-doc';
export * from './non-blocking-updates';
export * from './non-blocking-login';
export * from './errors';
export * from './error-emitter';
