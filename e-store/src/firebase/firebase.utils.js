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

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
