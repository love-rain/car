import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/functions';
import 'firebase/storage';

const firebaseConfig    = {
  apiKey: "AIzaSyCkWF0h57B6_bxMP1VTmMG0Zn7gsHkyk30",
  authDomain: "mitsubishicar-57181.firebaseapp.com",
  databaseURL: "https://mitsubishicar-57181.firebaseio.com",
  projectId: "mitsubishicar-57181",
  storageBucket: "mitsubishicar-57181.appspot.com",
  messagingSenderId: "1022686200458",
  appId: "1:1022686200458:web:ad94bbe4027eb4c946a373",
  measurementId: "G-DSXC89N1GQ"
};
const firebaseApp       = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
const firebaseFirestore = firebaseApp.firestore();
export {
  firebaseFirestore
}