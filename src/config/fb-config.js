import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Firebase configuration
var fbConfig = {
  apiKey: "AIzaSyCwwZZ3X7Mk4zsKKzjadBWrm6-Z5rFG8FU",
  authDomain: "you-aint-no-rookie-coins.firebaseapp.com",
  databaseURL: "https://you-aint-no-rookie-coins.firebaseio.com",
  projectId: "you-aint-no-rookie-coins",
  storageBucket: "you-aint-no-rookie-coins.appspot.com",
  messagingSenderId: "986267889815",
  appId: "1:986267889815:web:85950f6d60fcb5571379d2",
  measurementId: "G-9LKCEZ6K02"
};

// Initialize Firebase
firebase.initializeApp(fbConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
