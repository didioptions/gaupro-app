
import {
  getFirestore,
  collection,
  getDocs,
  query,
  type DocumentData,
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
  
  console.log('Fetching all professionals...');

  try {
    const querySnapshot = await getDocs(q);
    
    if (querySnapshot.empty) {
      console.log('No documents found in the "professionalProfiles" collection.');
      return {};
    }

    // Use reduce to group the documents into the desired nested structure
    const groupedData = querySnapshot.docs.reduce((acc, doc) => {
      const professional = { id: doc.id, ...doc.data() } as Professional;
      
      const serviceCategory = professional.serviceCategory;
      
      // Extract city from the location string (e.g., "Sandton, Johannesburg" -> "Sandton")
      const locationString = professional.location || 'Unknown';
      const city = locationString.split(',')[0].trim();

      if (!serviceCategory || !city) {
        // Skip documents that don't have the required fields
        return acc;
      }

      // Ensure the service category level exists
      if (!acc[serviceCategory]) {
        acc[serviceCategory] = {};
      }

      // Ensure the city level exists for the current service category
      if (!acc[serviceCategory][city]) {
        acc[serviceCategory][city] = [];
      }
      
      // Add the professional to the correct group
      acc[serviceCategory][city].push(professional);

      return acc;
    }, {} as GroupedProfessionals);
    
    return groupedData;

  } catch (error) {
    console.error("Error fetching or grouping professionals: ", error);
    // Depending on error handling strategy, you might want to throw the error
    // or return an empty object.
    return {};
  }
}

/**
 * EXAMPLE USAGE:
 * This function demonstrates how to use the main grouping function and log the output.
 * You can call this from a client component or page.
 */
export async function logGroupedProfessionals() {
  // This assumes you have initialized Firebase elsewhere in your app.
  // In a real component, you would get the db instance from the useFirestore() hook.
  const db = getFirestore(); 
  
  const groupedProfessionals = await groupProfessionalsByServiceAndCity(db);
  
  console.log('--- Grouped Professionals by Category and City ---');
  console.log(JSON.stringify(groupedProfessionals, null, 2));
  console.log('--------------------------------------------------');
  
  // Example of accessing a specific group
  if (groupedProfessionals['Movers'] && groupedProfessionals['Movers']['Johannesburg']) {
    console.log('Movers in Johannesburg:', groupedProfessionals['Movers']['Johannesburg']);
  }
}
