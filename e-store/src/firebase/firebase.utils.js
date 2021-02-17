import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBpoYt6vgrHkkPwa8dtoKWSxNnnqA9YSPs",
    authDomain: "udemy-crwn-d883c.firebaseapp.com",
    projectId: "udemy-crwn-d883c",
    storageBucket: "udemy-crwn-d883c.appspot.com",
    messagingSenderId: "950073119544",
    appId: "1:950073119544:web:78896cd00288b4a45ca7cd"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
