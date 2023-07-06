import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';



const firebaseConfig = {
  apiKey: "AIzaSyCg8fTFtm3SGe1XFZlst2Cn0pNFEySDCUs",
  authDomain: "nockta-ch.firebaseapp.com",
  projectId: "nockta-ch",
  storageBucket: "nockta-ch.appspot.com",
  messagingSenderId: "442017036983",
  appId: "1:442017036983:web:14c4c7c2add27c9a746b32"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)

