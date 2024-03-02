// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDZpDbQINho3eel9L91kezLxQgHmE2yMgo",
  authDomain: "netflix-clone-30265.firebaseapp.com",
  projectId: "netflix-clone-30265",
  storageBucket: "netflix-clone-30265.appspot.com",
  messagingSenderId: "411940071640",
  appId: "1:411940071640:web:e89171e9286cc562880fad",
  measurementId: "G-KL61JQNY43"
};


const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);