import firebase from "firebase" ;

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCYy-lUAH8Ub5CaI11jvRoKZOqUPxDiu-Q",
    authDomain: "todo-app-c6f11.firebaseapp.com",
    projectId: "todo-app-c6f11",
    storageBucket: "todo-app-c6f11.appspot.com",
    messagingSenderId: "593721690420",
    appId: "1:593721690420:web:54bc36bf42baabcc3b3d61",
    measurementId: "G-6GNPPZ2EHM"
});

const db = firebase.firestore();

export default db;