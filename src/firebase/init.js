// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB8Mh9JGj2KX1PDmp3kKJqxdHBHveydx0I",
  authDomain: "fir-subscription-plans.firebaseapp.com",
  projectId: "fir-subscription-plans",
  storageBucket: "fir-subscription-plans.appspot.com",
  messagingSenderId: "999640457799",
  appId: "1:999640457799:web:8147640d5037a7ce8d8762",
  measurementId: "G-SKL9HXHW98",
};

// Initialize Firebase
initializeApp(firebaseConfig);

const db = getFirestore();

export default db;

// generate and export auth object
export const auth = getAuth();
