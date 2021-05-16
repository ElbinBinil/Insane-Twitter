import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyA9Kj-JfvkOslRGh8MreIZbZcb1v8--It0",
    authDomain: "twitter-clone-987ea.firebaseapp.com",
    projectId: "twitter-clone-987ea",
    storageBucket: "twitter-clone-987ea.appspot.com",
    messagingSenderId: "552055464136",
    appId: "1:552055464136:web:bb26a546fdd1a5730885fd",
    measurementId: "G-K29Z3SDZ6Z"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  export default db;