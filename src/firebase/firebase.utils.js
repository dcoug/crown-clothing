import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDvCq_5f6uK26l_gqCURvz9hsXpD_q_jTc",
    authDomain: "crwn-db-9f85c.firebaseapp.com",
    projectId: "crwn-db-9f85c",
    storageBucket: "crwn-db-9f85c.appspot.com",
    messagingSenderId: "980841763105",
    appId: "1:980841763105:web:c524fdd1e5db82d73e2e60",
    measurementId: "G-R0ECFT2MRT"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
