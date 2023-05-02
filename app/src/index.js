import React from 'react';
import {BrowserRouter} from "react-router-dom";
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import store from './store/store';
// import * as firebase from 'firebase';   
import './index.css';
// import firebaseui from 'firebaseui';
import { initializeApp } from 'firebase/app';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {

    apiKey: "AIzaSyDbOA38gXt215BhNBNslUTqHKG4aOGCPkk",
  
    authDomain: "reader-app-63162.firebaseapp.com",
  
    databaseURL: "https://reader-app-63162-default-rtdb.europe-west1.firebasedatabase.app",
  
    projectId: "reader-app-63162",
  
    storageBucket: "reader-app-63162.appspot.com",
  
    messagingSenderId: "1064326797496",
  
    appId: "1:1064326797496:web:c7c4c3d0dcd00db48bfc4d",
  
    measurementId: "G-X6FHK47LCS"
  
  };
firebase.initializeApp(firebaseConfig)
// firebase.ini
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render (<BrowserRouter>
    <Provider store={store}>
        <App/>
    </Provider>
</BrowserRouter>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
