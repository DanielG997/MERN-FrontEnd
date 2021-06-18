import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyANlCAhWZiFBaJuW4FMrPGknjhc78KaZzk",
    authDomain: "ract-bd.firebaseapp.com",
    projectId: "ract-bd",
    storageBucket: "ract-bd.appspot.com",
    messagingSenderId: "605596800376",
    appId: "1:605596800376:web:5569085edd33050f56248d"
};
// Initializar Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
}