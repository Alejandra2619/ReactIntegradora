import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDLNAEpc2OScUSUJBZc6ZwvOA_RwHexgPE",
    authDomain: "reactintegradora.firebaseapp.com",
    projectId: "reactintegradora",
    storageBucket: "reactintegradora.appspot.com",
    messagingSenderId: "127664909485",
    appId: "1:127664909485:web:5b61c0b6ec97c0fa962a24",
    measurementId: "G-T3GB1MLXRH"
  };

export const firebaseApp = firebase.initializeApp(firebaseConfig);
export default firebaseApp;