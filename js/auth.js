import { auth } from "./firebase.js";
import { signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-auth.js";

const form = document.getElementById("loginForm");
const error = document.getElementById("loginError");

onAuthStateChanged(auth, user => {
  if (user) location.href = "index.html";
});

form?.addEventListener("submit", async e => {
  e.preventDefault();
  error.textContent = "";
  try {
    await signInWithEmailAndPassword(auth, email.value.trim(), password.value);
    location.href = "index.html";
  } catch (err) {
    error.textContent = "Login gagal. Periksa email dan password.";
  }
});
