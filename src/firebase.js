// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLNpAdsRt092t-jNGyMm0cUQIkSEVkzBQ",
  authDomain: "feelchord-music-player.firebaseapp.com",
  projectId: "feelchord-music-player",
  storageBucket: "feelchord-music-player.appspot.com",
  messagingSenderId: "157321943505",
  appId: "1:157321943505:web:ef7a52e2104b6bce8a28f0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);