// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Replace these with your actual Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyA8wwQF1utUInwrRlfD7r1M3Gi06nnCjao",
  authDomain: "todoapp-5550e.firebaseapp.com",
  projectId: "todoapp-5550e",
  storageBucket: "todoapp-5550e.appspot.com",
  messagingSenderId: "858754271463",
  appId: "1:858754271463:web:e1882e6dcad3981bc7ba42"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firestore database
export const db = getFirestore(app);
