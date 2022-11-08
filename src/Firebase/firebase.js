
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyDEKP2BcqkGr7PRQT8GN9asTUrvKEltbAk",
  authDomain: "ecommercereact-397be.firebaseapp.com",
  projectId: "ecommercereact-397be",
  storageBucket: "ecommercereact-397be.appspot.com",
  messagingSenderId: "330687250674",
  appId: "1:330687250674:web:4a2f0ad35acfd46d9e506b"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)