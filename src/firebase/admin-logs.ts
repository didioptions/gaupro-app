'use client';

import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

/**
 * Utility to log administrative actions to Firestore for audit purposes.
 * @param action The name of the action being performed (e.g., 'ACCESS_ADMIN_DASHBOARD')
 * @param metadata Additional context about the action
 */
export async function logAdminAction(action: string, metadata: any = {}) {
  const auth = getAuth();
  const db = getFirestore();
  const user = auth.currentUser;

  if (!user) return;

  try {
    await addDoc(collection(db, 'admin_logs'), {
      adminUid: user.uid,
      adminEmail: user.email,
      action,
      metadata,
      timestamp: serverTimestamp(),
      path: window.location.pathname,
    });
  } catch (error) {
    console.error("Failed to log admin action:", error);
  }
}