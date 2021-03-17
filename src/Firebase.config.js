import firebase from "firebase";


export const firebaseConfig = {
  apiKey: "AIzaSyALJ_tdWrXu3CYQ9NIr58G3oRDpTme0s2w",
  authDomain: "proyecto-react-c7816.firebaseapp.com",
  projectId: "proyecto-react-c7816",
  storageBucket: "proyecto-react-c7816.appspot.com",
  messagingSenderId: "365887155730",
  appId: "1:365887155730:web:ad5097fc28f052a86832cb",
  measurementId: "G-41NEZER5VR"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default db;