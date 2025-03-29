// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFe4j-uY4pf16bPJogeNtcPBGAUwmSqcQ",
  authDomain: "ayush-27a4d.firebaseapp.com",
  projectId: "ayush-27a4d",
  storageBucket: "ayush-27a4d.appspot.com",
  messagingSenderId: "829850814758",
  appId: "1:829850814758:web:7e0fc75f71f41e3e4399e7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);