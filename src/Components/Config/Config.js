import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyA42rxLA2aQuH9SStdq2PqVufoRjHQpp9o",
    authDomain: "fresume-3dbfa.firebaseapp.com",
    projectId: "fresume-3dbfa",
    storageBucket: "fresume-3dbfa.appspot.com",
    messagingSenderId: "725197653177",
    appId: "1:725197653177:web:4bd058a001fda631368768",
    measurementId: "G-DXZK4V8YS8"
  };

 const fire = firebase.initializeApp(firebaseConfig);


  export default fire;