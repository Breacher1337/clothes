import { storage } from './firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

/**
 * Uploads a file to a specified path in Firebase Storage.
 * @param {File} file - The file object to upload.
 * @param {string} path - The target storage path (e.g., 'images/uniqueId.jpg').
 * @returns {Promise<string>} The download URL of the uploaded file.
 */
export const uploadFile = async (file, path) => {
  try {
    const storageRef = ref(storage, path);
    await uploadBytes(storageRef, file);
    const downloadUrl = await getDownloadURL(storageRef);
    return downloadUrl;
  } catch (error) {
    throw new Error(error.message);
  }
};
