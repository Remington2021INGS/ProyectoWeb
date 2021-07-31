import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/firestore";
import 'firebase/storage';


const firebaseConfig = {
    apiKey: "AIzaSyCiYzdxHNIjpLcfz93-AL2v0mdp5iDwcJc",
    authDomain: "tarjetasdecreditoe-card-coins.firebaseapp.com",
    projectId: "tarjetasdecreditoe-card-coins",
    storageBucket: "tarjetasdecreditoe-card-coins.appspot.com",
    messagingSenderId: "491343307416",
    appId: "1:491343307416:web:ca39442d6098ac005966ed",
    measurementId: "G-3FPFYHDXGP"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;