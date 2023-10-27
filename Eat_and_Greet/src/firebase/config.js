// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';

// Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API,
  authDomain: "eatngreet-42c5d.firebaseapp.com",
  projectId: "eatngreet-42c5d",
  storageBucket: "eatngreet-42c5d.appspot.com",
  messagingSenderId: "950044539436",
  appId: "1:950044539436:web:49a75bdc94bdf6e6372f89",
  measurementId: "G-KWB4KM12GQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();