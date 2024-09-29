import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyADSZco5NrUNerfIr5gKt1WygEDzoToWLM",
    authDomain: "social-app-dwm4ap.firebaseapp.com",
    projectId: "social-app-dwm4ap",
    storageBucket: "social-app-dwm4ap.appspot.com",
    messagingSenderId: "1030654466861",
    appId: "1:1030654466861:web:aab680d0901ac3af7591a4"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);