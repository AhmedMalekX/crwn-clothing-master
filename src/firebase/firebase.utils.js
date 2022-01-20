import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: 'AIzaSyDyydkG87iKrg-m_jVxmVtDY9kY4q-WHmk',
  authDomain: 'crwn-clothing-master-db.firebaseapp.com',
  projectId: 'crwn-clothing-master-db',
  storageBucket: 'crwn-clothing-master-db.appspot.com',
  messagingSenderId: '120864175135',
  appId: '1:120864175135:web:d880c75d80a666f1d1512a',
  measurementId: 'G-G2Q9DEXB2X',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Setup google auth
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
