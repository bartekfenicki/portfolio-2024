// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries



const firebaseApp = {
  apiKey: "AIzaSyBwld41Oqw-E9bRNt-Lf4Zjoj0O8rVNuBQ",
  authDomain: "bartek-fenicki-portfolio.firebaseapp.com",
  projectId: "bartek-fenicki-portfolio",
  storageBucket: "bartek-fenicki-portfolio.appspot.com",
  messagingSenderId: "722579179305",
  appId: "1:722579179305:web:327e48ab83298fb9d39938",
  measurementId: "G-HQS9FH33P6"
};

// Initialize Firebase
const app = initializeApp(firebaseApp)
const analytics = getAnalytics(app)
 export  const db = getFirestore(app)
 export  const auth = getAuth()

 

