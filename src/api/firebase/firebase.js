// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCAfTVD7W3jprOv94lLsnkYV-BrPgx5v0A",
    authDomain: "compass-firebase-c24d5.firebaseapp.com",
    projectId: "compass-firebase-c24d5",
    storageBucket: "compass-firebase-c24d5.firebasestorage.app",
    messagingSenderId: "826822034033",
    appId: "1:826822034033:web:a811843e0a95697e8c51d0",
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
export const storage = getStorage(app); //storage 객체를 가져와 줌
