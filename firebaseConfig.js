// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBNsquDQkeOWtmne1fd6HRvmUwiOpqje08",
  authDomain: "aula01-b2dbe.firebaseapp.com",
  projectId: "aula01-b2dbe",
  storageBucket: "aula01-b2dbe.appspot.com",
  messagingSenderId: "266240302167",
  appId: "1:266240302167:web:746c8ed3ba400a892c9712",
  measurementId: "G-CZZCY3Q4D2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
export default app;