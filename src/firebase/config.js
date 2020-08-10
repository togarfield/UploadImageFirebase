import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyD0tuZD6b2KQu4-QOG6izVvVztLR_WA6Ak",
    authDomain: "togar-firegram.firebaseapp.com",
    databaseURL: "https://togar-firegram.firebaseio.com",
    projectId: "togar-firegram",
    storageBucket: "togar-firegram.appspot.com",
    messagingSenderId: "628217941184",
    appId: "1:628217941184:web:a5417f1610030b558cf125",
    measurementId: "G-3XYMXNP8JL"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export {projectStorage, projectFirestore, timestamp};