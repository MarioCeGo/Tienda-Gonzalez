import React from 'react';
import ReactDOM from 'react-dom/client';
import { initializeApp } from "firebase/app";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBISVSrukYyLOBdyEWAjKDlmC3aF6fe7bE",
  authDomain: "e-commerce-project-4c4b0.firebaseapp.com",
  projectId: "e-commerce-project-4c4b0",
  storageBucket: "e-commerce-project-4c4b0.appspot.com",
  messagingSenderId: "842960150696",
  appId: "1:842960150696:web:cf75ee123719beff81629d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);