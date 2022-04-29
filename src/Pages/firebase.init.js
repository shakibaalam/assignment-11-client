// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBRTS4n48gjnVu8qU4IoNs86s82xbexbSM",
    authDomain: "assignment-11-7321c.firebaseapp.com",
    projectId: "assignment-11-7321c",
    storageBucket: "assignment-11-7321c.appspot.com",
    messagingSenderId: "403919838900",
    appId: "1:403919838900:web:417c2d6303c0923e5081e1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth