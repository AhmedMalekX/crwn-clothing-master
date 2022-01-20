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

// Store user obj in firestore when user signed in
export const createUserProfileDocument = async (userAuth, additonalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additonalData,
      });
    } catch (error) {
      console.error('Error creating user', error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Setup google auth
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
