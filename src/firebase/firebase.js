// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMMdB5UEPLP6LrWKHywytJhgUVEY18kdQ",
  authDomain: "studio-5618869838-18486.firebaseapp.com",
  projectId: "studio-5618869838-18486",
  storageBucket: "studio-5618869838-18486.firebasestorage.app",
  messagingSenderId: "1059962490351",
  appId: "1:1059962490351:web:6ed75997aad9ad43afba1a"
};

// FIX: Only initialize if no apps exist
const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

// Export them so other files can use them
export { app, db };
