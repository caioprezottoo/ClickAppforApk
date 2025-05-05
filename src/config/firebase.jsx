import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCLadphNnnU-pJVYRSRcnaSWmE_mlHxjCo",
  authDomain: "clickapp-firebase-dm.firebaseapp.com",
  projectId: "clickapp-firebase-dm",
  storageBucket: "clickapp-firebase-dm.firebasestorage.app",
  messagingSenderId: "227304391959",
  appId: "1:227304391959:web:474cb16c92738aaf352352",
  measurementId: "G-LRJWQ5C7E0"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);

export default app;