
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
 * Constructs a Firestore query to search for companies based on service and rating.
 * NOTE: Firestore limits queries to one 'array-contains' clause. This search is optimized
 * for 'service'. The provided 'area' parameter is not used in this query and
 * would need to be filtered on the client-side.
 *
 * @param {string} service The service to search for (e.g., "plumbing").
 * @param {string} area The area to filter by (NOTE: This is not used in the Firestore query).
 * @param {number} [minRating=3] The minimum rating bucket to include in results.
 * @returns {Query<DocumentData>} A Firestore Query object that can be executed with getDocs.
 */
export function searchCompanies(
  service: string,
  area: string, // Kept for signature consistency, but not used in query
  minRating: number = 3
): Query<DocumentData> {
  const db = getFirestore();
  const companiesCol = collection(db, 'companies');

  // Build the query. NOTE: The 'area' filter cannot be included here due to
  // Firestore's limitation of one 'array-contains' filter per query.
  const q = query(
    companiesCol,
    where('searchServices', 'array-contains', service.toLowerCase()),
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
 * This shows how you would use the searchCompanies function and then filter by area
 * on the client side.
 *
 * import { getDocs } from 'firebase/firestore';
 * import { searchCompanies } from '@/services/companySearch';
 *
 * async function findPlumbersInArea(service: string, area: string) {
 *   // 1. Get the query object from the search helper (queries by service and rating)
 *   const companiesQuery = searchCompanies(service, area);
 *
 *   try {
 *     // 2. Execute the query to get the documents
 *     const querySnapshot = await getDocs(companiesQuery);
 *
 *     // 3. Map the documents and perform client-side filtering for the area
 *     const companies = querySnapshot.docs
 *       .map(doc => ({ id: doc.id, ...doc.data() as any }))
 *       .filter(company => company.searchAreas?.includes(area.toLowerCase()));
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
