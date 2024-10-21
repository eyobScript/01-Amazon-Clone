import firebase from "firebase/compat/app";
import {getAuth} from 'firebase/auth'
import 'firebase/compat/firestore';
import 'firebase/compat/auth'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAoNcweLOHhGgvCdrtOKI0epwDaGN8RTkc",
  authDomain: "clone-e1394.firebaseapp.com",
  projectId: "clone-e1394",
  storageBucket: "clone-e1394.appspot.com",
  messagingSenderId: "865872090236",
  appId: "1:865872090236:web:b3bab8329564503a84e5f9"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = app.firestore();
