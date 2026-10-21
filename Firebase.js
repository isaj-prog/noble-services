import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.0.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.0.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyC9OaP72Usqc3GaLYebiSHr4E6z4ZiWMBg",
  authDomain: "noble-service.firebaseapp.com",
  projectId: "noble-service",
  storageBucket: "noble-service.firebasestorage.app",
  messagingSenderId: "963378842049",
  appId: "1:963378842049:web:2d9240b84c0a9a9f68c740",
  measurementId: "G-5BTGX2CKD0"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
