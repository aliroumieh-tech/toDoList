// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBE5muWo5by_SUQozcaUpenhgK0oYoDiIk",
  authDomain: "to-do-list-289f1.firebaseapp.com",
  projectId: "to-do-list-289f1",
  storageBucket: "to-do-list-289f1.appspot.com",
  messagingSenderId: "749921416546",
  appId: "1:749921416546:web:ee2005046e017c0945683b",
  measurementId: "G-EXC1941CSL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
