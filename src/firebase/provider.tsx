'use client';

import React, { DependencyList, createContext, useContext, ReactNode, useMemo, useState, useEffect } from 'react';
import { FirebaseApp } from 'firebase/app';
import { Firestore, doc, onSnapshot } from 'firebase/firestore';
import { Auth, User, onAuthStateChanged } from 'firebase/auth';
import { FirebaseErrorListener } from '@/components/FirebaseErrorListener'

interface FirebaseProviderProps {
  children: ReactNode;
  firebaseApp: FirebaseApp | null;
  firestore: Firestore | null;
  auth: Auth | null;
}

export interface UserProfile {
  role: 'super_admin' | 'admin' | 'pro' | 'customer';
  email: string;
  fullName?: string;
  uid: string;
  createdAt: string;
}

interface UserAuthState {
  user: User | null;
  profile: UserProfile | null;
  isUserLoading: boolean;
  userError: Error | null;
}

export interface FirebaseContextState {
  areServicesAvailable: boolean;
  firebaseApp: FirebaseApp | null;
  firestore: Firestore | null;
  auth: Auth | null;
  user: User | null;
  profile: UserProfile | null;
  isUserLoading: boolean;
  userError: Error | null;
}

export interface UserHookResult { 
  user: User | null;
  profile: UserProfile | null;
  isUserLoading: boolean;
  userError: Error | null;
}

export const FirebaseContext = createContext<FirebaseContextState | undefined>(undefined);

export const FirebaseProvider: React.FC<FirebaseProviderProps> = ({
  children,
  firebaseApp,
  firestore,
  auth,
}) => {
  const [authState, setAuthState] = useState<UserAuthState>({
    user: null,
    profile: null,
    isUserLoading: true,
    userError: null,
  });

  useEffect(() => {
    if (!auth) { 
      setAuthState(prev => ({ ...prev, isUserLoading: false, userError: new Error("Auth service not yet available.") }));
      return;
    }

    const unsubscribeAuth = onAuthStateChanged(
      auth,
      (firebaseUser) => { 
        if (firebaseUser && firestore) {
          // If user exists, fetch their role/profile from Firestore
          const unsubscribeProfile = onSnapshot(
            doc(firestore, 'users', firebaseUser.uid),
            (docSnap) => {
              setAuthState({
                user: firebaseUser,
                profile: docSnap.exists() ? (docSnap.data() as UserProfile) : null,
                isUserLoading: false,
                userError: null,
              });
            },
            (error) => {
              console.error("Error fetching user profile:", error);
              setAuthState({
                user: firebaseUser,
                profile: null,
                isUserLoading: false,
                userError: error,
              });
            }
          );
          return () => unsubscribeProfile();
        } else {
          setAuthState({ user: null, profile: null, isUserLoading: false, userError: null });
        }
      },
      (error) => {
        console.error("FirebaseProvider: onAuthStateChanged error:", error);
        setAuthState({ user: null, profile: null, isUserLoading: false, userError: error });
      }
    );
    return () => unsubscribeAuth();
  }, [auth, firestore]);

  const contextValue = useMemo((): FirebaseContextState => {
    const areServicesAvailable = !!(firebaseApp && firestore && auth);

    return {
      areServicesAvailable,
      firebaseApp,
      firestore,
      auth,
      user: authState.user,
      profile: authState.profile,
      isUserLoading: authState.isUserLoading,
      userError: authState.userError,
    };
  }, [firebaseApp, firestore, auth, authState]);

  return (
    <FirebaseContext.Provider value={contextValue}>
      <FirebaseErrorListener />
      {children}
    </FirebaseContext.Provider>
  );
};

export const useFirebase = () => {
  const context = useContext(FirebaseContext);
  if (context === undefined) {
    return { firebaseApp: null, firestore: null, auth: null, user: null, profile: null, isUserLoading: true, userError: null };
  }
  return context;
};

export const useAuth = () => useFirebase().auth;
export const useFirestore = () => useFirebase().firestore;
export const useFirebaseApp = () => useFirebase().firebaseApp;

export function useMemoFirebase<T>(factory: () => T, deps: DependencyList): T {
  return useMemo(factory, deps);
}

export const useUser = (): UserHookResult => {
  const { user, profile, isUserLoading, userError } = useFirebase();
  return { user, profile, isUserLoading, userError };
};