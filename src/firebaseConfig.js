// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCi0B49j0QMs5mW3EQljEIOxVb4lHjhEYY",
  authDomain: "rmss-c133c.firebaseapp.com",
  projectId: "rmss-c133c",
  storageBucket: "rmss-c133c.appspot.com",
  messagingSenderId: "292068232069",
  appId: "1:292068232069:web:f155ac5ea0e08df4c6d2ec",
  measurementId: "G-SC3SC1K440"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default getFirestore();
