import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBzHBdXEghBy6sq39Rwv8e8xt95rPkThfY",
  authDomain: "emailpasswordlogin-18704.firebaseapp.com",
  projectId: "emailpasswordlogin-18704",
  storageBucket: "emailpasswordlogin-18704.appspot.com",
  messagingSenderId: "136619542354",
  appId: "1:136619542354:web:ea2319c0b67821f76edc8b",
  measurementId: "G-WTJGR8RE7D"
};

const app = initializeApp(firebaseConfig);
export const database = getAuth(app)