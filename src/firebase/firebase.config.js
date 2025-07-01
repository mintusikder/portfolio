// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBO0GvNbJbQinllFRJe1Q9oeo_qiLwMV44",
  authDomain: "mintusikder-3d3e0.firebaseapp.com",
  projectId: "mintusikder-3d3e0",
  storageBucket: "mintusikder-3d3e0.firebasestorage.app",
  messagingSenderId: "939304504715",
  appId: "1:939304504715:web:115ca56a34df46cf48338e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
