import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAyadboz3az8yIQ28F3_bzr5IaSNjYCFLA",
  authDomain: "linkedin-clone-8dd4b.firebaseapp.com",
  projectId: "linkedin-clone-8dd4b",
  storageBucket: "linkedin-clone-8dd4b.appspot.com",
  messagingSenderId: "199515664948",
  appId: "1:199515664948:web:e21970a0fef53065745061",
  measurementId: "G-34K7T5HRL8",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };
