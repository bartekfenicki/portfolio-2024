// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore, collection, onSnapshot, addDoc, deleteDoc, doc} from 'firebase/firestore';
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth'
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

 export const getRef = collection(db, 'codings')

onSnapshot(getRef, (snapshot)=> {
    let codings = []

    snapshot.docs.forEach((doc) => {
        codings.push({ ...doc.data(), id: doc.id })
    })
    console.log(codings)
})



//adding documents
const addCodingForm = document.querySelector('.add');
addCodingForm.addEventListener('submit', (e) => {
    e.preventDefault()

    addDoc(getRef, {
        name: addCodingForm.name.value ,
        description: addCodingForm.description.value, 
        link: addCodingForm.link.value
    })
    .then (() => {
        addCodingForm.reset()
    })
     
})



//deleting documents
const deleteCodingForm = document.querySelector('.delete');
deleteCodingForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const docRef = doc(db, 'codings', deleteCodingForm.id.value)

    deleteDoc(docRef)
    .then (() => {
        deleteCodingForm.reset()
    })
})

//loging in to admin
const loginForm = document.querySelector('.login');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const email = loginForm.email.value
    const password = loginForm.password.value

    signInWithEmailAndPassword(auth, email, password)
    .then ((cred) =>{
        console.log('user logged in:', cred.user)
    })
    .catch((err) =>{
        console.log(err.message)
    })

})
