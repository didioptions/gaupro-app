
import {
  getFirestore,
  collection,
  query,
  where,
  orderBy,
  limit,
  type Query,
  type DocumentData,
} from 'firebase/firestore';

/**
 * Constructs a Firestore query to search for companies based on service, area, and rating.
 *
 * This function is designed to be highly performant by leveraging Firestore's indexing capabilities.
 * It creates a compound query that filters and orders data on the server, ensuring only relevant
 * documents are sent to the client.
 *
 * @param {string} service The service to search for (e.g., "plumbing").
 * @param {string} area The area to search in (e.g., "sandton").
 * @param {number} [minRating=3] The minimum rating bucket to include in results.
 * @returns {Query<DocumentData>} A Firestore Query object that can be executed with getDocs.
 */
export function searchCompanies(
  service: string,
  area: string,
  minRating: number = 3
): Query<DocumentData> {
  const db = getFirestore();
  const companiesCol = collection(db, 'companies');

  // Build the query using indexed fields for fast, scalable searching.
  const q = query(
    companiesCol,
    where('searchServices', 'array-contains', service.toLowerCase()),
    where('searchAreas', 'array-contains', area.toLowerCase()),
    where('ratingBucket', '>=', Math.floor(minRating)),
    orderBy('ratingBucket', 'desc'),
    orderBy('rating', 'desc'),
    limit(20)
  );

  return q;
}

/*
 * --- USAGE EXAMPLE ---
 *
 * This shows how you would use the searchCompanies function in a React component.
 *
 * import { getDocs } from 'firebase/firestore';
 * import { searchCompanies } from '@/services/companySearch';
 *
 * async function findPlumbersInSandton() {
 *   const service = 'plumbing';
 *   const area = 'sandton';
 *
 *   // 1. Get the query object from the search helper
 *   const companiesQuery = searchCompanies(service, area);
 *
 *   try {
 *     // 2. Execute the query to get the documents
 *     const querySnapshot = await getDocs(companiesQuery);
 *
 *     // 3. Map the documents into a clean array of objects
 *     const companies = querySnapshot.docs.map(doc => ({
 *       id: doc.id,
 *       ...doc.data()
 *     }));
 *
 *     console.log(companies);
 *     return companies;
 *
 *   } catch (error) {
 *     console.error("Error searching companies:", error);
 *     return [];
 *   }
 * }
 */
