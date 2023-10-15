// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-app-19f80.firebaseapp.com",
  projectId: "mern-estate-app-19f80",
  storageBucket: "mern-estate-app-19f80.appspot.com",
  messagingSenderId: "633469760186",
  appId: "1:633469760186:web:fa8f07f02cbe6ef9cdc883"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);