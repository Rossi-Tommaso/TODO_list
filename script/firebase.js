// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, set, onValue } from "firebase/database";
import { getFunctions, httpsCallable } from "firebase/functions"; // For calling Cloud Functions

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDjAy3T3M3MGmSrx9j6KxSqgLUKZrtXFOI",
  authDomain: "to-do-list-92dac.firebaseapp.com",
  projectId: "to-do-list-92dac",
  storageBucket: "to-do-list-92dac.appspot.com",
  messagingSenderId: "241068668757",
  appId: "1:241068668757:web:839a0486f97dcd4ff6e1dc",
  measurementId: "G-D3G0XBVH2J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = firebase.database();