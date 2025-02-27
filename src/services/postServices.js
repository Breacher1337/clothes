// src/services/postService.js

import { firestore } from '@/lib/firebase';
import {
  collection,
  doc,
  addDoc,
  getDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  query,
  orderBy,
} from 'firebase/firestore';

const postsCollection = collection(firestore, 'posts');

/**
 * Creates a new post.
 * @param {object} data - The post data (e.g., title, description, image URL, createdAt).
 * @returns {Promise} Resolves with the new post ID.
 */
export const createPost = async (data) => {
  try {
    const docRef = await addDoc(postsCollection, data);
    return docRef.id;
  } catch (error) {
    throw new Error(error.message);
  }
};

/**
 * Retrieves a single post by its ID.
 * @param {string} postId - The post ID.
 * @returns {Promise} Resolves with the post data.
 */
export const getPost = async (postId) => {
  try {
    const postDocRef = doc(firestore, 'posts', postId);
    const postSnap = await getDoc(postDocRef);
    if (postSnap.exists()) {
      return { id: postSnap.id, ...postSnap.data() };
    } else {
      throw new Error('Post not found');
    }
  } catch (error) {
    throw new Error(error.message);
  }
};

/**
 * Updates an existing post.
 * @param {string} postId - The post ID.
 * @param {object} data - Data fields to update.
 * @returns {Promise} Resolves when the post is updated.
 */
export const updatePost = async (postId, data) => {
  try {
    const postDocRef = doc(firestore, 'posts', postId);
    await updateDoc(postDocRef, data);
  } catch (error) {
    throw new Error(error.message);
  }
};

/**
 * Deletes a post.
 * @param {string} postId - The post ID.
 * @returns {Promise} Resolves when the post is deleted.
 */
export const deletePost = async (postId) => {
  try {
    const postDocRef = doc(firestore, 'posts', postId);
    await deleteDoc(postDocRef);
  } catch (error) {
    throw new Error(error.message);
  }
};

/**
 * Retrieves a list of posts, ordered by creation date (newest first).
 * @returns {Promise} Resolves with an array of posts.
 */
export const getPosts = async () => {
  try {
    const postsQuery = query(postsCollection, orderBy('createdAt', 'desc'));
    const querySnapshot = await getDocs(postsQuery);
    const posts = [];
    querySnapshot.forEach((docSnap) => {
      posts.push({ id: docSnap.id, ...docSnap.data() });
    });
    return posts;
  } catch (error) {
    throw new Error(error.message);
  }
};
