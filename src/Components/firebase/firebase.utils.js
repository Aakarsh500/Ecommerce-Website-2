import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyD33yhM3-9BTULLU3t15TS5rkOWouNnX3k",
  authDomain: "crwn-db-8aa74.firebaseapp.com",
  databaseURL: "https://crwn-db-8aa74.firebaseio.com",
  projectId: "crwn-db-8aa74",
  storageBucket: "crwn-db-8aa74.appspot.com",
  messagingSenderId: "315283483043",
  appId: "1:315283483043:web:46ddda17bd515bbf191216",
  measurementId: "G-YZQECZ1M3B"
};

// export default firebase.initializeApp(config);
export default !firebase.apps.length
  ? firebase.initializeApp(config)
  : firebase.app();
export const fireStore = firebase.firestore();
export const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const SignInWithGoogle = () => auth.signInWithPopup(provider);
