// src/config/firebase.js
import { initializeApp, getApps, getApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence, getAuth } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyD1VXUU7vobOI4IUJeWR2P8QEHsR_8nMd0",
  authDomain: "bhayi-e04ef.firebaseapp.com",
  projectId: "bhayi-e04ef",
  storageBucket: "bhayi-e04ef.firebasestorage.app",
  messagingSenderId: "917185980343",
  appId: "1:917185980343:android:5bfb08d18ebc4f8743aa32",
};

// Initialize Firebase App
let app;
if (getApps().length === 0) {
  app = initializeApp(firebaseConfig);
  console.log("✅ Firebase App Initialized");
} else {
  app = getApp();
  console.log("✅ Firebase App Already Exists");
}

// Initialize Auth with AsyncStorage persistence (required for React Native)
// Check if auth is already initialized to prevent duplicate initialization
let auth;
try {
  auth = getAuth(app);
  console.log("✅ Auth Already Initialized");
} catch (error) {
  auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage),
  });
  console.log("✅ Auth Initialized with Persistence");
}

export { auth };
