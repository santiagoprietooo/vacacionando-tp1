import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyA4tggQdofhk33tLj4tkAQG-bnLuSg9MS8",
    authDomain: "testing-6df50.firebaseapp.com",
    projectId: "testing-6df50",
    storageBucket: "testing-6df50.appspot.com",
    messagingSenderId: "91185489018",
    appId: "1:91185489018:web:7303efff2ff2030f66c7c3"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);