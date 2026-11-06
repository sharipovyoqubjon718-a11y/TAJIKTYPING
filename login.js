// Импорти модулҳои Firebase (CDN)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { 
    getAuth, 
    signInWithPopup, 
    GoogleAuthProvider, 
    signInWithEmailAndPassword 
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// Конфигуратсияи лоиҳаи ту
const firebaseConfig = {
  apiKey: "AIzaSyAYFjn-oKlBQ-IWcGdj2Zqn89XnsIteWxU",
  authDomain: "tajiktyping.firebaseapp.com",
  projectId: "tajiktyping",
  storageBucket: "tajiktyping.firebasestorage.app",
  messagingSenderId: "942130540563",
  appId: "1:942130540563:web:24ec63a9b5dfecb771cfe6",
  measurementId: "G-9EDFJ8QBD4"
};

// Инициализатсияи Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const googleLoginBtn = document.getElementById('googleLoginBtn');
const loginForm = document.getElementById('loginForm');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const errorMessage = document.getElementById('errorMessage');

// Ворид шудан бо Google
googleLoginBtn.addEventListener('click', () => {
    signInWithPopup(auth, provider)
        .then((result) => {
            const user = result.user;
            localStorage.setItem('userName', user.displayName);
            localStorage.setItem('userPhoto', user.photoURL);
            window.location.href = "index.html";
        })
        .catch((error) => {
            showError("Хатогӣ ҳангоми ворид шудан бо Google: " + error.message);
        });
});

// Ворид шудан бо Email ва Парол
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            localStorage.setItem('userName', email.split('@')[0]);
            window.location.href = "index.html";
        })
        .catch((error) => {
            showError("Почтаи электронӣ ё парол нодуруст аст!");
        });
});

function showError(text) {
    errorMessage.innerText = text;
    errorMessage.style.display = "block";
}