import Firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';
import { seedDatabase } from '../seed';

const config = {
    apiKey: "AIzaSyCgoxw7WYRbRFk-SqhJdMa8Kh1DRRsZV8Y",
    authDomain: "netflix-clone-d3aa8.firebaseapp.com",
    projectId: "netflix-clone-d3aa8",
    storageBucket: "netflix-clone-d3aa8.appspot.com",
    messagingSenderId: "302547242431",
    appId: "1:302547242431:web:5e6ba6468d11b7d5b5e50a",
    measurementId: "G-RKZ74X669M"
  };

const firebase = Firebase.initializeApp(config);

//seedDatabase(firebase);

export { firebase };
