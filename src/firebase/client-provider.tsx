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

  // If Firebase services are not yet initialized, we render nothing.
  // This prevents child components from trying to access the Firebase context
  // before it's ready, which would cause an error.
  if (!firebaseServices) {
    return null;
  }

  // Once Firebase is initialized, we provide the services to the rest of the app.
  return (
    <FirebaseProvider
      firebaseApp={firebaseServices.firebaseApp}
      auth={firebaseServices.auth}
      firestore={firebaseServices.firestore}
    >
      {children}
    </FirebaseProvider>
  );
}
