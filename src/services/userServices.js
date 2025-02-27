// src/services/userService.js

import { firestore } from '@/lib/firebase';
import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';

/**
 * Retrieves a user's profile from Firestore.
 * @param {string} uid - The unique user ID.
 * @returns {Promise} Resolves with the user data.
 */
export const getUserProfile = async (uid) => {
  try {
    const userDocRef = doc(firestore, 'users', uid);
    const userSnap = await getDoc(userDocRef);
    if (userSnap.exists()) {
      return userSnap.data();
    } else {
      throw new Error('User not found');
    }
  } catch (error) {
    throw new Error(error.message);
  }
};

/**
 * Creates a new user profile in Firestore.
 * @param {string} uid - The unique user ID.
 * @param {object} profileData - Data to store for the user.
 * @returns {Promise} Resolves when the profile is created.
 */
export const createUserProfile = async (uid, profileData) => {
  try {
    const userDocRef = doc(firestore, 'users', uid);
    await setDoc(userDocRef, profileData);
  } catch (error) {
    throw new Error(error.message);
  }
};

/**
 * Updates an existing user profile in Firestore.
 * @param {string} uid - The unique user ID.
 * @param {object} profileData - Data fields to update.
 * @returns {Promise} Resolves when the profile is updated.
 */
export const updateUserProfile = async (uid, profileData) => {
  try {
    const userDocRef = doc(firestore, 'users', uid);
    await updateDoc(userDocRef, profileData);
  } catch (error) {
    throw new Error(error.message);
  }
};
