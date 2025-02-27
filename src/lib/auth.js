import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';

/**
 * Subscribes to authentication state changes.
 * @param {function} callback - A callback function that receives the user object.
 * @returns {function} An unsubscribe function.
 */
export const subscribeToAuthChanges = (callback) => {
  return onAuthStateChanged(auth, callback);
};
