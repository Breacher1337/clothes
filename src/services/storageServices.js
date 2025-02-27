// src/services/storageService.js

import { storage } from '@/lib/firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

/**
 * Uploads an image file to Firebase Storage.
 * @param {File} file - The file to upload.
 * @param {string} path - The storage path (e.g., 'images/uniqueId.jpg').
 * @returns {Promise} Resolves with the download URL of the uploaded image.
 */
export const uploadImage = async (file, path) => {
  try {
    const storageRef = ref(storage, path);
    const snapshot = await uploadBytes(storageRef, file);
    const downloadUrl = await getDownloadURL(snapshot.ref);
    return downloadUrl;
  } catch (error) {
    throw new Error(error.message);
  }
};

/**
 * Retrieves the download URL for an image stored at a specific path.
 * @param {string} path - The storage path.
 * @returns {Promise} Resolves with the download URL.
 */
export const getImageUrl = async (path) => {
  try {
    const storageRef = ref(storage, path);
    const downloadUrl = await getDownloadURL(storageRef);
    return downloadUrl;
  } catch (error) {
    throw new Error(error.message);
  }
};
