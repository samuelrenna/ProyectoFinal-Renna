// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import  { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBeh11i_XC62fq1yvzHiem2UcE1Hnzz7IQ",
  authDomain: "versusgaming-ad125.firebaseapp.com",
  projectId: "versusgaming-ad125",
  storageBucket: "versusgaming-ad125.appspot.com",
  messagingSenderId: "1090328402938",
  appId: "1:1090328402938:web:ccbddd4bc59b07806f6243"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db  = getFirestore (app);