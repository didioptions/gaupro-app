import {
  collection,
  getDocs,
  query,
  type QueryDocumentSnapshot,
  type Firestore,
} from 'firebase/firestore';

/**
 * Defines the structure of a professional's document.
 */
interface Professional {
  id: string;
  [key: string]: any; // Allow other fields from the document
}

/**
 * Defines the nested structure for the grouped professionals object.
 * e.g., { "Plumbers": { "Johannesburg": [Professional, ...], ... }, ... }
 */
interface GroupedProfessionals {
  [serviceCategory: string]: {
    [city: string]: Professional[];
  };
}

/**
 * Fetches all documents from the "professionalProfiles" collection in Firestore
 * and groups them first by serviceCategory and then by city.
 *
 * @param {Firestore} db - The Firestore database instance.
 * @returns {Promise<GroupedProfessionals>} A promise that resolves to an object
 *          containing the grouped professionals.
 */
export async function groupProfessionalsByServiceAndCity(db: Firestore): Promise<GroupedProfessionals> {
  const professionalsCol = collection(db, 'professionalProfiles');
  const q = query(professionalsCol);
  
  try {
    const querySnapshot = await getDocs(q);
    
    if (querySnapshot.empty) {
      return {};
    }

    const groupedData = querySnapshot.docs.reduce((acc: GroupedProfessionals, doc: QueryDocumentSnapshot) => {
      const professional = { id: doc.id, ...doc.data() } as Professional;
      const serviceCategory = professional.serviceCategory;
      const locationString = professional.location || 'Unknown';
      const city = locationString.split(',')[0].trim();

      if (!serviceCategory || !city) {
        return acc;
      }

      if (!acc[serviceCategory]) {
        acc[serviceCategory] = {};
      }

      if (!acc[serviceCategory][city]) {
        acc[serviceCategory][city] = [];
      }
      
      acc[serviceCategory][city].push(professional);

      return acc;
    }, {} as GroupedProfessionals);
    
    return groupedData;

  } catch (error) {
    console.error("Error fetching or grouping professionals: ", error);
    return {};
  }
}