import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCxnKnSO_VeHH0dIUc2elNTvMgBsjFqDJA",
    authDomain: "clothing-db-768da.firebaseapp.com",
    projectId: "clothing-db-768da",
    storageBucket: "clothing-db-768da.appspot.com",
    messagingSenderId: "208533692049",
    appId: "1:208533692049:web:8ede908eb9ce6ab241a930",
    measurementId: "G-RX7SR7EJVV"
  }

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const googleSignIn = () => auth.signInWithPopup(provider);
export default firebase;
