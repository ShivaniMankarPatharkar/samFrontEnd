import { initializeApp } from 'firebase/app';
import {
    onAuthStateChanged,
    signInWithEmailAndPassword,
    getAuth
  } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDWSQU1EcMIsu63oI-FdndsePSue7HVCSE",
    authDomain: "hsbc-greensavers-sams-dev.firebaseapp.com"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app, {/* extra options */ });

// document.addEventListener("DOMContentLoaded", () => {
//   onAuthStateChanged(auth, (user) => {
//       if (user) {
//           document.getElementById("message").innerHTML = "Welcome, " + user.email;
//       }
//       else {
//           document.getElementById("message").innerHTML = "No user signed in.";
//       }
//   });
//   signIn();
// });

function signIn(email,password) {
    
    signInWithEmailAndPassword(auth, email, password)
        .catch((error) => {
            document.getElementById("message").innerHTML = error.message;
        });
  }

  const AuthServiceCopy = {
    signIn
  }
  
  export default AuthServiceCopy;