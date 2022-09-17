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

export const createUserProfileDoc = async (userAuth, moreData) => {
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  // const userRef = firestore.collections(`users`);
  // this gives us the "queryRef obj" that tells us only our current  
  // location in the database
  
  const snapShot = await userRef.get(); 
  // its properties tell us details about the data while its method 
  // ".get()" in this case gives us the "snapShot obj" which gives us the 
  // data in question
  
  
  if(!snapShot.exists){
    const { displayName, email } = userAuth;
    const timeCreated = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        timeCreated,
        ...moreData
      })
    } catch(error) {
      console.log(`an error occured creating user, ${error}`)
    }
  }
  return userRef;
}


firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const googleSignIn = () => auth.signInWithPopup(provider);
export default firebase;
