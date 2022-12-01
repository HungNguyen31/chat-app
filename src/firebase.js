
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCus880tAnT6bg_STjORiFHpgUwhBnqRAc",
  authDomain: "chat-app-ec870.firebaseapp.com",
  projectId: "chat-app-ec870",
  storageBucket: "chat-app-ec870.appspot.com",
  messagingSenderId: "454334501854",
  appId: "1:454334501854:web:56bc3b6a230833a930034f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage();
export const db = getFirestore()