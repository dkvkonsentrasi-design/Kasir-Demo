import { auth } from "./firebase.js";

import {
  signInWithEmailAndPassword,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.2.1/firebase-auth.js";

const form = document.getElementById("loginForm");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const error = document.getElementById("loginError");

onAuthStateChanged(auth, (user) => {
  if (user) {
    window.location.href = "index.html";
  }
});

form?.addEventListener("submit", async (e) => {
  e.preventDefault();

  error.textContent = "";

  const email = emailInput.value.trim();
  const password = passwordInput.value;

  if (!email || !password) {
    error.textContent = "Email dan password wajib diisi.";
    return;
  }

  try {
    await signInWithEmailAndPassword(auth, email, password);

    window.location.href = "index.html";

  } catch (err) {

    console.error("Firebase Login Error:", err);

    switch (err.code) {

      case "auth/invalid-credential":
        error.textContent =
          "Email atau password salah.";

        break;

      case "auth/invalid-email":
        error.textContent =
          "Format email tidak valid.";

        break;

      case "auth/user-not-found":
        error.textContent =
          "Akun tidak ditemukan.";

        break;

      case "auth/wrong-password":
        error.textContent =
          "Password salah.";

        break;

      case "auth/too-many-requests":
        error.textContent =
          "Terlalu banyak percobaan. Coba lagi nanti.";

        break;

      case "auth/network-request-failed":
        error.textContent =
          "Koneksi ke Firebase gagal.";

        break;

      default:
        error.textContent =
          "Login gagal: " + err.code;
    }
  }
});
