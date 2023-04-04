// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwsZcFviYTFNPnCbKgYleGmnOJ_DBvk1o",
  authDomain: "rahurabh-portfolio.firebaseapp.com",
  projectId: "rahurabh-portfolio",
  storageBucket: "rahurabh-portfolio.appspot.com",
  messagingSenderId: "1039746369421",
  appId: "1:1039746369421:web:8fd96fac17ef709a7c9fc4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();