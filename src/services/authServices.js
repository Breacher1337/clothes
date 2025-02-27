// src/services/authService.js

import { auth } from '@/lib/firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  updateProfile,
} from 'firebase/auth';

/**
 * Signs up a new user.
 * @param {string} email - User email.
 * @param {string} password - User password.
 * @param {string} [displayName] - Optional display name.
 * @returns {Promise} Resolves with the user credentials.
 */
export const signUp = async (email, password, displayName) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    if (displayName) {
      await updateProfile(userCredential.user, { displayName });
    }
    return userCredential;
  } catch (error) {
    throw new Error(error.message);
  }
};

/**
 * Signs in an existing user.
 * @param {string} email - User email.
 * @param {string} password - User password.
 * @returns {Promise} Resolves with the user credentials.
 */
export const signIn = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential;
  } catch (error) {
    throw new Error(error.message);
  }
};

/**
 * Logs out the current user.
 * @returns {Promise} Resolves when the user is signed out.
 */
export const logout = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    throw new Error(error.message);
  }
};

/**
 * Sends a password reset email.
 * @param {string} email - User email.
 * @returns {Promise} Resolves when the email is sent.
 */
export const resetPassword = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
  } catch (error) {
    throw new Error(error.message);
  }
};
