import { firestore } from './firebase';
import { collection, query, getDocs } from 'firebase/firestore';

/**
 * Fetches data from a specified Firestore collection.
 * @param {string} collectionName - The name of the collection.
 * @param {object|null} q - Optional query constraints.
 * @returns {Promise<Array>} An array of document data.
 */
export const fetchCollectionData = async (collectionName, q = null) => {
  try {
    let collRef = collection(firestore, collectionName);
    if (q) {
      collRef = query(collRef, q);
    }
    const snapshot = await getDocs(collRef);
    const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};
