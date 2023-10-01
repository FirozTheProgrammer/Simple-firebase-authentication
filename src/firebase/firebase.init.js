// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDkQxwRTfzRQcRVNVZs8Ia-bDdd6j9QfAA",
  authDomain: "pass-email-auth-14b3b.firebaseapp.com",
  projectId: "pass-email-auth-14b3b",
  storageBucket: "pass-email-auth-14b3b.appspot.com",
  messagingSenderId: "1029224903127",
  appId: "1:1029224903127:web:7796384936f21968345b92",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
