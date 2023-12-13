import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyD3zI2bbtdJNuduEE31yTwNZBFUkyC4akM",
  authDomain: "projeto-84-38c15.firebaseapp.com",
  projectId: "projeto-84-38c15",
  storageBucket: "projeto-84-38c15.appspot.com",
  messagingSenderId: "262770780118",
  appId: "1:262770780118:web:4ef1a7b55f9bab07796677"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
