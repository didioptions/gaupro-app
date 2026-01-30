'use client';

import React, { useState, useEffect, type ReactNode } from 'react';
import { FirebaseProvider } from '@/firebase/provider';
import { initializeFirebase } from '@/firebase';
import type { FirebaseApp } from 'firebase/app';
import type { Auth } from 'firebase/auth';
import type { Firestore } from 'firebase/firestore';

interface FirebaseClientProviderProps {
  children: ReactNode;
}

interface FirebaseServices {
  firebaseApp: FirebaseApp;
  auth: Auth;
  firestore: Firestore;
}

export function FirebaseClientProvider({ children }: FirebaseClientProviderProps) {
  const [firebaseServices, setFirebaseServices] = useState<FirebaseServices | null>(null);

  useEffect(() => {
    // This effect runs only on the client-side after the component mounts.
    // It safely initializes Firebase without affecting the server-side build.
    setFirebaseServices(initializeFirebase());
  }, []); // The empty dependency array ensures this runs only once.

  // To prevent hydration errors, we always render the provider and its children.
  // The provider will pass down `null` for services until they are initialized client-side.
  // The hooks that consume this context are designed to handle this `null` state gracefully.
  return (
    <FirebaseProvider
      firebaseApp={firebaseServices?.firebaseApp}
      auth={firebaseServices?.auth}
      firestore={firebaseServices?.firestore}
    >
      {children}
    </FirebaseProvider>
  );
}
