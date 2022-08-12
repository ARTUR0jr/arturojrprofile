// Import stylesheets
import './style.css';

import { initializeApp } from 'firebase/app';

// Add the Firebase products and methods that you want to use
import { getAuth, EmailAuthProvider, signOut,
  onAuthStateChanged } from 'firebase/auth';

import {getFirestore, addDoc, collection, query, orderBy, onSnapshot, doc, setDoc, where, limit} from 'firebase/firestore';
import firebase from "firebase"
import * as firebaseui from 'firebaseui';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Document elements
const startRsvpButton = document.getElementById('startRsvp');
const guestbookContainer = document.getElementById('guestbook-container');

const form = document.getElementById('leave-message');
const input = document.getElementById('message');
const guestbook = document.getElementById('guestbook');
const numberAttending = document.getElementById('number-attending');
const rsvpYes = document.getElementById('rsvp-yes');
const rsvpNo = document.getElementById('rsvp-no');

let rsvpListener = null;
let guestbookListener = null;

let db, auth;

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD1Rkphr1DF7hzC_PdpfCnPvJfTXLehMxk",
  authDomain: "arturosaavedrajr.firebaseapp.com",
  projectId: "arturosaavedrajr",
  storageBucket: "arturosaavedrajr.appspot.com",
  messagingSenderId: "334206517064",
  appId: "1:334206517064:web:6494d70cac97005e557d7d",
  measurementId: "G-5SV1HVV8K5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);