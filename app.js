

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
import { getStorage, ref, uploadBytes, uploadBytesResumable, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-storage.js";
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
            localStorage.setItem("uid", user.uid)
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
            localStorage.setItem("uid", user.uid)


            location.href = "profile.html"
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


let logOut = document.getElementById("logOut");

logOut && logOut.addEventListener("click", () => {

    onAuthStateChanged(auth, (user) => {
        if (user) {

            const uid = localStorage.getItem("uid");

        } else {

        }
    });
})


let file = document.getElementById("file-input");
const uploadFile = (file) => {
    return new Promise((resolve, reject) => {
        const mountainsRef = ref(storage, `images/${file.name}`);
        
        const uploadTask = uploadBytesResumable(mountainsRef, file);
        
        
        uploadTask.on('state_changed',
        (snapshot) => {
    
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
                switch (snapshot.state) {
                    case 'paused':
                        console.log('Upload is paused');
                        break;
                        case 'running':
                        console.log('Upload is running');
                        break;
                    }
                },
                (error) => {
                    reject(error)
                },
            () => {
    
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    resolve(downloadURL);
                });
            }
        );
    
        
    })
}


let updateProfile = document.getElementById("updateProfile");
updateProfile && updateProfile.addEventListener("click", () => {
    uploadFile(file.files[0])
    .then((res) => console.log("res=====>", res))
    .catch(err => console.log(err))


})























