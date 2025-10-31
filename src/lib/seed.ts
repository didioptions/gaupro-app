
// This script is NOT meant to be run in the browser.
// It is a one-time utility to populate the Firestore database with initial data.
// To run this script, use the command: `npm run db:seed`

import { initializeApp } from 'firebase/app';
import { getFirestore, collection, doc, setDoc, writeBatch } from 'firebase/firestore';
import { firebaseConfig } from '@/firebase/config';
import { allProfessionals } from './professionals-data';

// Initialize a separate Firebase app for the script
const firebaseApp = initializeApp(firebaseConfig, 'seeder');
const db = getFirestore(firebaseApp);

async function seedProfessionals() {
  console.log('Starting to seed professionals data into Firestore...');

  const professionalsCollectionRef = collection(db, 'professionals');
  const batch = writeBatch(db);
  let operationCount = 0;

  for (const category in allProfessionals) {
    if (Object.prototype.hasOwnProperty.call(allProfessionals, category)) {
      const pros = (allProfessionals as any)[category];
      console.log(`Processing ${pros.length} professionals in category: ${category}`);
      
      for (const pro of pros) {
        if (!pro.id) {
          console.warn('Skipping professional without an ID:', pro.name);
          continue;
        }

        // Add serviceCategory to the data object
        const professionalData = {
          ...pro,
          serviceCategory: category,
        };

        const docRef = doc(professionalsCollectionRef, pro.id);
        batch.set(docRef, professionalData);
        operationCount++;

        // Firestore batches have a limit of 500 operations.
        // Commit the batch and start a new one if the limit is reached.
        if (operationCount === 499) {
          await batch.commit();
          console.log('Committed a batch of 500 operations.');
          // batch = writeBatch(db); // This is incorrect, re-initialization should be done by Firestore
          operationCount = 0;
        }
      }
    }
  }

  // Commit any remaining operations in the last batch.
  if (operationCount > 0) {
    await batch.commit();
    console.log(`Committed the final batch of ${operationCount} operations.`);
  }

  console.log('Seeding complete! All professional data has been uploaded to Firestore.');
}

seedProfessionals().catch(error => {
  console.error('Error seeding database:', error);
  process.exit(1);
});
