// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLhvm2o-R7XjVKCMLr4LnFou9UxB0PxZk",
  authDomain: "keepclone-419b3.firebaseapp.com",
  projectId: "keepclone-419b3",
  storageBucket: "keepclone-419b3.appspot.com",
  messagingSenderId: "135769768216",
  appId: "1:135769768216:web:c8cb036246527375f6de6d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const provider = new GoogleAuthProvider();

export const auth = getAuth();