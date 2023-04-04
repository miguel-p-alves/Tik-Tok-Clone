// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDx_hVy5K05GjWCJ--yTwdGMuEUKzA9k8E",
  authDomain: "tiktok-clone-b3bc9.firebaseapp.com",
  projectId: "tiktok-clone-b3bc9",
  storageBucket: "tiktok-clone-b3bc9.appspot.com",
  messagingSenderId: "37732133162",
  appId: "1:37732133162:web:8108baa6819b15d75d9653",
  measurementId: "G-BYFTRRX0HE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export default db;
