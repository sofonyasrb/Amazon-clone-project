import firebase from "firebase/compat/app";
// auth
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore"; //database
import "firebase/compat/auth";      //auth

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCZ2lnGNobPJ0_Ias4sjK3xOnIx7t0iF7U",
    authDomain: "clone-ec6dd.firebaseapp.com",
    projectId: "clone-ec6dd",
    storageBucket: "clone-ec6dd.appspot.com",
    messagingSenderId: "818060813936",
    appId: "1:818060813936:web:7f930dc17b3ebd8cc436b5",
    measurementId: "G-3EFWHX9Q7L"
  };

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = app.firestore();


