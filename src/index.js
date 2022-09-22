import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDu53CrQAdHybEoDwejsEPyvUI09aLhNdo",
  authDomain: "ecommerce-openmarket.firebaseapp.com",
  projectId: "ecommerce-openmarket",
  storageBucket: "ecommerce-openmarket.appspot.com",
  messagingSenderId: "532830486316",
  appId: "1:532830486316:web:72a529dc2c7baeb18cf689",
  measurementId: "G-EFDFHMWFCE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

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
