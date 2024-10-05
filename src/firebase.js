// src/firebase.js

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyD3iy3-N9krLPmHSdfehRVX0ukhT7YAY5E",
    authDomain: "gymplanner-fcf97.firebaseapp.com",
    projectId: "gymplanner-fcf97",
    storageBucket: "gymplanner-fcf97.appspot.com",
    messagingSenderId: "671145365836",
    appId: "1:671145365836:web:8f8f110f765d2360063fe9"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export default firebase;
