import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCVf6cl99f_wsC6RW62UJFzfKyiyamTbEA",
  authDomain: "instaclone-636c4.firebaseapp.com",
  projectId: "instaclone-636c4",
  storageBucket: "instaclone-636c4.appspot.com",
  messagingSenderId: "685457550396",
  appId: "1:685457550396:web:3551505514cb7adb4f2739",
  measurementId: "G-S28FKLQD1E",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const sotrage = getStorage(app);

export { app, auth, firestore, sotrage };
