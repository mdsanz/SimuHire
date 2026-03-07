import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAzNJ26KSMwnPKCIGKL8MWtUoS8s2OGWi8",
    authDomain: "simuhire-4bfda.firebaseapp.com",
    projectId: "simuhire-4bfda",
    storageBucket: "simuhire-4bfda.firebasestorage.app",
    messagingSenderId: "11381534748",
    appId: "1:11381534748:web:136e5b5003e2f59d6d6fd9",
    measurementId: "G-K6JD3H287T",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
