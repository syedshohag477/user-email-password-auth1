// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhFJb0MIuAFNUZxy5VEB_05B7DbK6QqHM",
  authDomain: "user-email-password-auth-8fa93.firebaseapp.com",
  projectId: "user-email-password-auth-8fa93",
  storageBucket: "user-email-password-auth-8fa93.appspot.com",
  messagingSenderId: "581847895508",
  appId: "1:581847895508:web:9e8fb6d37d1f78e7b2da41"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;