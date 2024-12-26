// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCbQVwBWo2vdhstUI7VGCoBWZsQf7yG2Xs",
  authDomain: "wanderlust-7473d.firebaseapp.com",
  projectId: "wanderlust-7473d",
  storageBucket: "wanderlust-7473d.firebasestorage.app",
  messagingSenderId: "458181425706",
  appId: "1:458181425706:web:d769cd2116d10eb0af6153",
  measurementId: "G-41WWJ2L03Z",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
