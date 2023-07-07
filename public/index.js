//Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.1/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.0.1/firebase-firestore.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.0.1/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "/*API KEY*/",
  authDomain: "login-test-9ff46.firebaseapp.com",
  projectId: "login-test-9ff46",
  storageBucket: "login-test-9ff46.appspot.com",
  messagingSenderId: "94703791010",
  appId: "1:94703791010:web:7bd9de5025949a7909a0fb",
  measurementId: "G-B6ZWNHRZ89"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
console.log("app initialized");

const db = getFirestore(app);
console.log("db aquired");

const provider = new GoogleAuthProvider();
console.log("provider aquired");


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
console.log("auth aquired");

document.getElementById('register').onclick = () => {
const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(error.message)
    console.log(error.code)
    console.log(error.user)
    // ..
  });
}

document.getElementById('login').onclick = () => {
  const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      const email = document.getElementById('email').value
      const password = document.getElementById('password').value
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(error.message)
      console.log(error.code)
      console.log(error.user)
      // ..
    });
  }

  onAuthStateChanged(auth, (user) => {
    if (user) {
      // https://firebase.google.com/docs/reference/js/auth.user
      const uid = user.uid;
      alert("ログインに成功しました");
      // ...
    } else {
      // User is signed out
      // ...
    }
  });
  