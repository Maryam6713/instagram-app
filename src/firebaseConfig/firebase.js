import { initializeApp } from 'firebase/app';
import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged, signInWithPopup, GoogleAuthProvider} from "firebase/auth";
import { getFirestore, collection, addDoc, getDocs  } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBixDsF929D2g273AcjGq-E9sdoFdQnVhk",
    authDomain: "new-receipe-dd8d7.firebaseapp.com",
    projectId: "new-receipe-dd8d7",
    storageBucket: "new-receipe-dd8d7.appspot.com",
    messagingSenderId: "803719843645",
    appId: "1:803719843645:web:7a623d7bb9077b80c43f54"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export{
    auth,getAuth,createUserWithEmailAndPassword,
    signInWithEmailAndPassword,onAuthStateChanged,
    signInWithPopup, GoogleAuthProvider,provider,
    db, collection, addDoc, getDocs
}