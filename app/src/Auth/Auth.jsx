// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAjuSoMIfmvh1DoRSICeaWm3XNOPT3nTYM",
  authDomain: "book-reader-83aed.firebaseapp.com",
  projectId: "book-reader-83aed",
  storageBucket: "book-reader-83aed.appspot.com",
  messagingSenderId: "1079417225618",
  appId: "1:1079417225618:web:2299602be985d356f3014b",
  measurementId: "G-RGZKBS8WQX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);