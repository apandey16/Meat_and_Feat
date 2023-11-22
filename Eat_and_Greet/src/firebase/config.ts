// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps, FirebaseApp } from "firebase/app";
import { Firestore, getFirestore } from 'firebase/firestore';
import { getAuth, initializeAuth, Auth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';


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
let app: FirebaseApp, auth : Auth, db: Firestore;

if (!getApps().length) {
  try {
    app = initializeApp(firebaseConfig);
    auth = initializeAuth(app, {
      persistence: getReactNativePersistence(ReactNativeAsyncStorage),
    });
    db = getFirestore(app);
  } catch (error) {
    console.log("Error initializing app: " + error);
  }
} else {
  app = getApp();
  auth = getAuth(app);
  db = getFirestore(app);
}



export { auth, db }
