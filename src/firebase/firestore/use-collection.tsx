'use client';

import { useState, useEffect } from 'react';
import {
  Query,
  getDocs,
  DocumentData,
  FirestoreError,
} from 'firebase/firestore';

// Define the shape of the hook's return value
export interface UseCollectionResult<T> {
  data: (T & { id: string })[];
  loading: boolean;
  error: string | null;
}

/**
 * A crash-proof hook to fetch a collection from Firestore.
 * It uses a one-time `getDocs` call and handles all errors internally,
 * preventing application crashes from Firestore permissions or other issues.
 *
 * @param query - A memoized Firestore query object, or null if the query is not ready.
 * @returns {UseCollectionResult<T>} An object containing the data, loading state, and error message.
 */
export function useCollection<T = any>(
  query: Query<DocumentData> | null
): UseCollectionResult<T> {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // A flag to prevent state updates on an unmounted component.
    let isMounted = true;

    async function fetchData() {
      // If the query is not ready (e.g., waiting for auth), do nothing.
      if (!query) {
        if(isMounted) {
            setData([]);
            setLoading(false);
        }
        return;
      }

      if(isMounted) {
        setLoading(true);
        setError(null);
      }

      try {
        const querySnapshot = await getDocs(query);
        
        if (isMounted) {
          const results = querySnapshot.docs.map(doc => ({
            ...(doc.data() as T),
            id: doc.id,
          }));
          setData(results);
        }
      } catch (err: any) {
        console.error("Firestore Error in useCollection:", err);
        if (isMounted) {
            // Check specifically for permission errors
            if (err.code === 'permission-denied') {
                setError("You do not have permission to access this data.");
            } else {
                setError(err.message || "An unknown error occurred while fetching data.");
            }
          // Always return empty data on error to prevent UI crashes
          setData([]);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    fetchData();

    // Cleanup function to set the mounted flag to false when the component unmounts.
    return () => {
      isMounted = false;
    };
  }, [query]); // Re-run the effect if the query changes.

  return { data, loading, error };
}
