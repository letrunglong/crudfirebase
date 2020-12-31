// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyDeZhrfnL_qKUSWsO5X4UraXPINOLWQe1E",
    authDomain: "reactfirebase-e0147.firebaseapp.com",
    databaseURL: "https://reactfirebase-e0147-default-rtdb.firebaseio.com",
    projectId: "reactfirebase-e0147",
    storageBucket: "reactfirebase-e0147.appspot.com",
    messagingSenderId: "265767583414",
    appId: "1:265767583414:web:71337d5471bda617ba7017",
    measurementId: "G-3274EQ77FL"
  };
  firebase.initializeApp(firebaseConfig);
export const noteData = firebase.database().ref('noteData')