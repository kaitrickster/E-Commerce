import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDqm3sN2EwoUqVxWHGjQNRF_j_OkCYI0b0",
  authDomain: "crwn-db-b2598.firebaseapp.com",
  databaseURL: "https://crwn-db-b2598.firebaseio.com",
  projectId: "crwn-db-b2598",
  storageBucket: "crwn-db-b2598.appspot.com",
  messagingSenderId: "467203058090",
  appId: "1:467203058090:web:5ad907bce335717ee9e3d3",
  measurementId: "G-LZ2GL93H0T"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;