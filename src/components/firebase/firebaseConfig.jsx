import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyCte3UDUKYK2zD7UpW4gYlKduz4O7y--L4",
  authDomain: "kiosko-amadeo-react.firebaseapp.com",
  projectId: "kiosko-amadeo-react",
  storageBucket: "kiosko-amadeo-react.appspot.com",
  messagingSenderId: "742584081029",
  appId: "1:742584081029:web:4ea3c52b95326cff6a27ec"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);