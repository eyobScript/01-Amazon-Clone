import firebase from "firebase/compat/app";
import {getAuth} from 'firebase/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/auth'
const firebaseConfig = {
  apiKey: "AIzaSyDvDPs01UMDpz88GHll0wOtykDIptIlrOM",
  authDomain: "clone-764e0.firebaseapp.com",
  projectId: "clone-764e0",
  storageBucket: "clone-764e0.appspot.com",
  messagingSenderId: "134595517130",
  appId: "1:134595517130:web:556eb9d601912eadb17233"
};

const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = app.firestore();