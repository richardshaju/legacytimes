import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
const firebaseConfig = {
    apiKey: "AIzaSyCamfZOSd4_S0gwBCrZCcvvygUM63rhmyg",
    authDomain: "legacytimes-27492.firebaseapp.com",
    projectId: "legacytimes-27492",
    storageBucket: "legacytimes-27492.appspot.com",
    messagingSenderId: "855367514495",
    appId: "1:855367514495:web:8875842583fdeed1b6024a",
  };

export default firebase.initializeApp(firebaseConfig)

