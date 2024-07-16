// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCeNGNNyj-4tx2BNrE_lYJiYzr2g7MrVh0",
  authDomain: "e-mart-bbcfa.firebaseapp.com",
  projectId: "e-mart-bbcfa",
  storageBucket: "e-mart-bbcfa.appspot.com",
  messagingSenderId: "1012628809238",
  appId: "1:1012628809238:web:9b3b50885b93e02c697737"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth}