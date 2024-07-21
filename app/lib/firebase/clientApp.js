import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDIqM6z5oXxN6ktvEvaUPkG6C8JtA8VPfQ",
  authDomain: "aaplah-2a5fb.firebaseapp.com",
  projectId: "aaplah-2a5fb",
  storageBucket: "aaplah-2a5fb.appspot.com",
  messagingSenderId: "767620987933",
  appId: "1:767620987933:web:d82e4002c198f43e3c1af4",
  measurementId: "G-59Y1XVY96V",
};

const app = initializeApp(firebaseConfig);
const analytics =
  app.name && typeof window !== "undefined" ? getAnalytics(app) : null;
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { app, analytics, db, auth, storage };
