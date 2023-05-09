// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAtJtr2U7chNmcfl_07jGotv9G8IzD4EOc",
    authDomain: "authwithsocialmedia-a71dd.firebaseapp.com",
    projectId: "authwithsocialmedia-a71dd",
    storageBucket: "authwithsocialmedia-a71dd.appspot.com",
    messagingSenderId: "735600230281",
    appId: "1:735600230281:web:bbd033d688d450aaf5eb58",
    measurementId: "G-0DNMMWS7X7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);
