import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from "firebase/firestore";
import {getStorage} from 'firebase/storage';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "techstore-project-fbcbf.firebaseapp.com",
  projectId: "techstore-project-fbcbf",
  storageBucket: "techstore-project-fbcbf.appspot.com",
  messagingSenderId: "110691500449",
  appId: "1:110691500449:web:471aed0ce69b6ca8744be0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth= getAuth(app);
export const db= getFirestore(app);
export const storage= getStorage(app);
export default app;