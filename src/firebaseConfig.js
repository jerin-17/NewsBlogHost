import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBWVQ-yBv3vd5SRJnyd6cv7LxD_kxK_OI4",
  authDomain: "news-blog-b5b10.firebaseapp.com",
  projectId: "news-blog-b5b10",
  storageBucket: "news-blog-b5b10.appspot.com",
  messagingSenderId: "73725256809",
  appId: "1:73725256809:web:cda6b5f4666292180daef8",
  measurementId: "G-P0MV67MD5T",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
