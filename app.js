

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyAcf9p59QBOdLa3ANcwc1wx4dljjwJGSLg",
    authDomain: "cahtapp-8aa63.firebaseapp.com",
    projectId: "cahtapp-8aa63",
    storageBucket: "cahtapp-8aa63.appspot.com",
    messagingSenderId: "430428552331",
    appId: "1:430428552331:web:23ef52693d39ec81f1288e"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);




let signInEmail = document.getElementById("signInEmail");
let signInPassword = document.getElementById("signInPassword");
let signInBtn = document.getElementById("signInBtn")

let signUpEmail = document.getElementById("signUpEmail");
let signUpPassword = document.getElementById("signUpPassword");
let signUpBtn = document.getElementById("signUpBtn");
let userName = document.getElementById("userName")


signUpBtn && signUpBtn.addEventListener("click", () => {
    console.log(signUpPassword.value)
    createUserWithEmailAndPassword(auth, signUpEmail.value, signUpPassword.value)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user, "done")
            location.href = "signin.html"

        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage)

        });

})


signInBtn && signInBtn.addEventListener("click", () => {
    console.log(signInPassword.value)

    signInWithEmailAndPassword(auth, signInEmail.value, signInPassword.value)
        .then((userCredential) => {

            const user = userCredential.user;
            console.log("done")
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage)
        });
})
























