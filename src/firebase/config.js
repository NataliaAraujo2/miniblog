import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDacPhybhZUyvbRucxkLcodt154i1z-VMQ",
  authDomain: "miniblog-40598.firebaseapp.com",
  projectId: "miniblog-40598",
  storageBucket: "miniblog-40598.appspot.com",
  messagingSenderId: "771197508579",
  appId: "1:771197508579:web:eb0aec29755c35b8a75ed6",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
