// Import the functions you need from the SDKs you need

//here you must add your configs form Firebase website :https://firebase.google.com/

import { initializeApp } from "firebase/app";
import 'firebase/auth'
// Import the functions you need from the SDKs you need


//copy and Paste
const firebaseConfig = {
  apiKey: "AIzaSyCHVlxjQ4h1CnaZTI6eWeprCjO4eVKmA54",
  authDomain: "towy-dev.firebaseapp.com",
  projectId: "towy-dev",
  storageBucket: "towy-dev.appspot.com",
  messagingSenderId: "930629507401",
  appId: "1:930629507401:web:6599230649415e44546298",
  measurementId: "G-049KXWBCW2"
};


//IT MUST BE LIKE THIS  DONT CHANGE IT
const app = initializeApp(firebaseConfig);
export {app}