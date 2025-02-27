import { getFunctions, httpsCallable } from 'firebase/functions';
import { app } from './firebase';

const functions = getFunctions(app);

/**
 * Calls a Firebase Cloud Function.
 * @param {string} functionName - The name of the cloud function.
 * @param {object} data - Data to pass to the function.
 * @returns {Promise<any>} The result returned by the cloud function.
 */
export const callFunction = async (functionName, data) => {
  try {
    const func = httpsCallable(functions, functionName);
    const result = await func(data);
    return result.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

//This code is useless, as there is no functions implemented for now