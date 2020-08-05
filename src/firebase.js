import firebase from "firebase";

const firebaseApp= firebase.initializeApp({
    apiKey: "AIzaSyAdh_7LOqWr_hZJ_jN1RngLzGx4-zBevYw",
    authDomain: "instagram-clone-d71e9.firebaseapp.com",
    databaseURL: "https://instagram-clone-d71e9.firebaseio.com",
    projectId: "instagram-clone-d71e9",
    storageBucket: "instagram-clone-d71e9.appspot.com",
    messagingSenderId: "998910033751",
    appId: "1:998910033751:web:0c51f90ec412f0e4c58812"
  });

  const db= firebaseApp.firestore();
  const auth=firebase.auth();
  const storage=firebase.storage();

  export {db, auth, storage};

 // export default db;