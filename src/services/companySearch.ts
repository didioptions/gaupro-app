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