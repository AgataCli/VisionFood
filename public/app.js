// Importações corretas para Firebase 9 modular
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { 
  getAuth, 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile  
} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAxDhtGpwD71uaoIxU6lesGLhzxcC3QjQw",
  authDomain: "visionfood-98993.firebaseapp.com",
  projectId: "visionfood-98993",
  storageBucket: "visionfood-98993.firebasestorage.app",
  messagingSenderId: "240268195818",
  appId: "1:240268195818:web:cdcec80d11fbeccb6b6493"
};

// Inicialização correta
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// --------- Cadastro ---------
const cadastroForm = document.getElementById("cadastro-form");
if (cadastroForm) {
  cadastroForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const senha = document.getElementById("password").value;

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, senha);
      
      // Correção: usar updateProfile do módulo auth
      await updateProfile(userCredential.user, {
        displayName: nome
      });
      
      alert("Cadastro realizado com sucesso!");
      window.location.href = "login.html";
    } catch (error) {
      alert("Erro no cadastro: " + error.message);
    }
  });
}

// --------- Login ---------
const loginForm = document.getElementById("login-form");
if (loginForm) {
  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const senha = document.getElementById("password").value;

    try {
      await signInWithEmailAndPassword(auth, email, senha);
      window.location.href = "inicial.html";
    } catch (error) {
      alert("Erro no login: " + error.message);
    }
  });
}