// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyApHyAPkxoG5Em13qaxwjbliKW1ANNEMEo",
  authDomain: "your-coffee-app.firebaseapp.com",
  projectId: "your-coffee-app",
  storageBucket: "your-coffee-app.firebasestorage.app",
  messagingSenderId: "925025409918",
  appId: "1:925025409918:web:49fcc39732021cafbff12f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);