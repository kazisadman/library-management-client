// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDeg_NEjxOzKmiqwiz_DmfAf9PUNKO9Q5g",
  authDomain: "library-managment-efef5.firebaseapp.com",
  projectId: "library-managment-efef5",
  storageBucket: "library-managment-efef5.appspot.com",
  messagingSenderId: "1059659272805",
  appId: "1:1059659272805:web:a42ebe6d8d875cadc6ec8c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
