// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDTI0L08ahkzV11glvfibbO9tYA2rM0a0A",
    authDomain: "assignment-9-b9233.firebaseapp.com",
    projectId: "assignment-9-b9233",
    storageBucket: "assignment-9-b9233.firebasestorage.app",
    messagingSenderId: "753635817094",
    appId: "1:753635817094:web:a951251599281f21e1c307"
  };
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;