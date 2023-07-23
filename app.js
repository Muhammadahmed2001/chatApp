

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
import { getStorage, ref, uploadBytes } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-storage.js";
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
const storage = getStorage();





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
            Swal.fire({
                icon: 'success',
                title: 'User register successfully',
            })

            location.href = "signin.html"

        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: errorMessage,
            })

        });

})


signInBtn && signInBtn.addEventListener("click", () => {
    console.log(signInPassword.value)

    signInWithEmailAndPassword(auth, signInEmail.value, signInPassword.value)
        .then((userCredential) => {

            const user = userCredential.user;
            Swal.fire({
                icon: 'success',
                title: 'User login successfully',
            })
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: errorMessage,
            })
        });
})


let updateProfile = document.getElementById("updateProfile");

updateProfile.addEventListener("click", () => {
    let file = document.getElementById("file-input");
    const mountainsRef = ref(storage, `images/${file.files[0].name}`);
    console.log(file.files[0].name)
    uploadBytes(mountainsRef, file.files[0]).then((snapshot) => {
        console.log('Uploaded a blob or file!');
    });

})























