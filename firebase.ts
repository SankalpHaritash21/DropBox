// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getFunctions } from "firebase/functions";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.Next_FIREBASE_API_KEY,
  authDomain: "dropbox-8ef73.firebaseapp.com",
  projectId: "dropbox-8ef73",
  storageBucket: "dropbox-8ef73.appspot.com",
  messagingSenderId: "657270437510",
  appId: "1:657270437510:web:5de76b43cb8233e6a0c307",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
