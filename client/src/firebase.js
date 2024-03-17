// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "inmobiliaria-mariela-benitez.firebaseapp.com",
  projectId: "inmobiliaria-mariela-benitez",
  storageBucket: "inmobiliaria-mariela-benitez.appspot.com",
  messagingSenderId: "391460237770",
  appId: "1:391460237770:web:398878aeac346d761e5f33"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);