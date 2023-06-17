import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';


// Your web app's Firebase configuration

/*const firebaseConfig = {
  apiKey: "AIzaSyA3Y4dA4MffR6_UYeWlfPadLkH7tElu0ss",
  authDomain: "proyecto-react-b30d5.firebaseapp.com",
  projectId: "proyecto-react-b30d5",
  storageBucket: "proyecto-react-b30d5.appspot.com",
  messagingSenderId: "325463997639",
  appId: "1:325463997639:web:74415160c810ce9c0852e2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)*/

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

