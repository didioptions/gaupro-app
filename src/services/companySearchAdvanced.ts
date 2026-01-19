
'use client';

import {
  getFirestore,
  collection,
  query,
  where,
  orderBy,
  limit,
  getDocs,
  Query,
  DocumentData,
  Timestamp,
} from 'firebase/firestore';

// Define the shape of a Company document
interface Company {
  id: string;
  companyName: string;
  category: string;
  description: string;
  services: string[];
  targetKeywords: string[];
  primaryCity: string;
  logoUrl: string;
  rating: number;
  ratingBucket: number;
  isSeed: boolean;
  createdAt: Timestamp;
  [key: string]: any; // Allow other fields
}

/**
 * Performs an advanced, multi-level fallback search for companies in Firestore.
 *
 * @param service The primary service to search for (e.g., 'plumbing').
 * @param city The city to search within (e.g., 'johannesburg').
 * @param minRating The minimum rating bucket to consider (default is 3).
 * @returns A promise that resolves to an array of company documents.
 */
export async function searchCompaniesAdvanced(
  service: string,
  city: string,
  minRating: number = 3
): Promise<Company[]> {
  const db = getFirestore();
  const companiesRef = collection(db, 'companies');
  const serviceLower = service.toLowerCase();
  const cityLower = city.toLowerCase();

  const baseQueryConstraints = [
    where('ratingBucket', '>=', Math.floor(minRating)),
    orderBy('ratingBucket', 'desc'),
    orderBy('rating', 'desc'),
    limit(20),
  ];

  // --- Level 1: Most specific query (service + city) ---
  const queryLevel1 = query(
    companiesRef,
    where('searchServices', 'array-contains', serviceLower),
    where('city', '==', cityLower),
    ...baseQueryConstraints
  );

  let querySnapshot = await getDocs(queryLevel1);
  if (!querySnapshot.empty) {
    return querySnapshot.docs.map(
      (doc) => ({ id: doc.id, ...doc.data() } as Company)
    );
  }

  // --- Level 2: Fallback to service in any city ---
  const queryLevel2 = query(
    companiesRef,
    where('searchServices', 'array-contains', serviceLower),
    ...baseQueryConstraints
  );

  querySnapshot = await getDocs(queryLevel2);
  if (!querySnapshot.empty) {
    return querySnapshot.docs.map(
      (doc) => ({ id: doc.id, ...doc.data() } as Company)
    );
  }

  // --- Level 3: Fallback to general keyword search ---
  const queryLevel3 = query(
    companiesRef,
    where('searchKeywords', 'array-contains', serviceLower),
    ...baseQueryConstraints
  );
  
  querySnapshot = await getDocs(queryLevel3);
  return querySnapshot.docs.map(
    (doc) => ({ id: doc.id, ...doc.data() } as Company)
  );
}
