import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAGGegoO_B1029k4UDCme1Ylv78L6vULRM",
  authDomain: "scan-class-adee2.firebaseapp.com",
  databaseURL: "https://scan-class-adee2-default-rtdb.firebaseio.com",
  projectId: "scan-class-adee2",
  storageBucket: "scan-class-adee2.appspot.com",
  messagingSenderId: "408527633454",
  appId: "1:408527633454:web:dbb5a808b886183893f3bf",
  measurementId: "G-WP51ZM3KEX"
};


firebase.initializeApp(firebaseConfig);

export default firebase.firestore();