import { initializeApp } from "firebase/app";
import {
  getAuth,
  signOut,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import toast from "react-hot-toast";
import { userHandle } from "utils";
//----------------------------------------------------------------------------------------
const firebaseConfig = {
  apiKey: "AIzaSyCFhCIwftrRyc8pwvgBK-dxfNUjmpqfvGM",
  authDomain: "ali-instagram.firebaseapp.com",
  projectId: "ali-instagram",
  storageBucket: "ali-instagram.appspot.com",
  messagingSenderId: "928717889141",
  appId: "1:928717889141:web:2ff89e33f9dea7af19a23c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

onAuthStateChanged(auth, (user) => {
  userHandle(user || false);
});

export const login = async (email, password) => {
  try {
    const response = await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    toast.error(err.code);
  }
};

export const logout = async () => {
  try {
    await signOut(auth);
  } catch (err) {
    toast.error(err.code);
  }
};
