'use client';

// This file is now a central hub for Firebase utilities,
// ensuring a single initialization source from './firebase.js'.

import { app, db } from './firebase.js'; // Import the initialized instances
import { getAuth } from 'firebase/auth';

// IMPORTANT: DO NOT MODIFY THIS FUNCTION
export function initializeFirebase() {
  // The app is already initialized in firebase.js, we just re-export the instances.
  return {
    firebaseApp: app,
    auth: getAuth(app),
    firestore: db,
  };
}

export function getSdks(firebaseApp: any) {
  return {
    firebaseApp,
    auth: getAuth(firebaseApp),
    firestore: db,
  };
}

export * from './provider';
export * from './client-provider';
export * from './firestore/use-collection';
export * from './firestore/use-doc';
export * from './non-blocking-updates';
export * from './non-blocking-login';
export * from './errors';
export * from './error-emitter';
