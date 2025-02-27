// This file should only be used on the server side.
import admin from 'firebase-admin';

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      projectId: process.env.FIREBASE_ADMIN_PROJECT_ID,
      clientEmail: process.env.FIREBASE_ADMIN_CLIENT_EMAIL,
      // Replace escaped newline characters in the private key with actual newlines.
      privateKey: process.env.FIREBASE_ADMIN_PRIVATE_KEY.replace(/\\n/g, '\n'),
    }),
    databaseURL: process.env.FIREBASE_ADMIN_DATABASE_URL,
  });
}

const firestoreAdmin = admin.firestore();
const authAdmin = admin.auth();

export { admin, firestoreAdmin, authAdmin };
