import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD6Yp2RABHXSBbtbLZBMpoTSSbRiudWJ_I",
  authDomain: "airbnb-b7c2c.firebaseapp.com",
  projectId: "airbnb-b7c2c",
  storageBucket: "airbnb-b7c2c.appspot.com",
  messagingSenderId: "951488426749",
  appId: "1:951488426749:web:842471a89d77203652c494",
  measurementId: "G-F54W51XTBZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
