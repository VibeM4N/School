import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDaB6rutmGgoxiScCdFCSmk4qMT7EMY35E",
  authDomain: "chat-b8580.firebaseapp.com",
  projectId: "chat-b8580",
  storageBucket: "chat-b8580.appspot.com",
  messagingSenderId: "462077387912",
  appId: "1:462077387912:web:9c4d7c800c5ac23379ab3d"
};;

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
