import firebase from 'firebase/app'

const firebaseConfig = {
  apiKey: "AIzaSyDMMB_UFm8PHET-_0I7DwxZHN1ufgTVb2c",
  authDomain: "prorest-b6b64.firebaseapp.com",
  projectId: "prorest-b6b64",
  storageBucket: "prorest-b6b64.appspot.com",
  messagingSenderId: "251373872717",
  appId: "1:251373872717:web:fde1ae4634ac953ae7de04"
};

export const firebaseapp = firebase.initializeApp(firebaseConfig)
