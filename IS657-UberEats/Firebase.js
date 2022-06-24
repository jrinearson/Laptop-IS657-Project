import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAPrgKP-YR3PRpt3yCZrLr8pgZOZ7WNOZc",
    authDomain: "is657-ubereats.firebaseapp.com",
    projectId: "is657-ubereats",
    storageBucket: "is657-ubereats.appspot.com",
    messagingSenderId: "83753427984",
    appId: "1:83753427984:web:adf3b6647d74d66faed695"
  };

  !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

  export default firebase;

