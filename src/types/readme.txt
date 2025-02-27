
This folder is only here just incase we start needing types for:

src/types/
│── user.ts                           # User-related types
│── post.ts                           # Post-related types
│── auth.ts                           # Auth-related types
│── firebase.ts                       # Firebase-specific types
│── index.ts                          # Global type exports

user.ts
export interface User {
  id: string;
  name: string;
  email: string;
  // any additional user properties...
}

post.ts
export interface Post {
  id: string;
  title: string;
  content: string;
  authorId: string;
  createdAt: Date;
  // any additional post properties...
}

auth.ts
export interface AuthResponse {
  token: string;
  user: User;
}

firebase.ts
export interface FirebaseConfig {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
}


index.ts
export * from './user';
export * from './post';
export * from './auth';
export * from './firebase';
