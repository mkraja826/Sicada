import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBxYMDSW72amjbl7qRHM2Jq7fqUBESXDuY",
  authDomain: "sicada-b9d39.firebaseapp.com",
  projectId: "sicada-b9d39",
  storageBucket: "sicada-b9d39.firebasestorage.app",
  messagingSenderId: "965437896570",
  appId: "1:965437896570:web:a803242b4597a90ce8c8c3",
  measurementId: "G-SQ57TZXSY3"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);