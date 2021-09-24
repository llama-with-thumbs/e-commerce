import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: 'AIzaSyB5ONEJOXGNrCKw0RLG3vvKbp8EN4N8V6A',
  authDomain: 'crwn-db-6a84d.firebaseapp.com',
  projectId: 'crwn-db-6a84d',
  storageBucket: 'crwn-db-6a84d.appspot.com',
  messagingSenderId: '66290275770',
  appId: '1:66290275770:web:2435e59d5c4099c507b983',
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  console.log('here again');

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }
  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
