import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAU3uKS9henFAU0VQ1wpQAFrezulZ9IP74",
    authDomain: "vague-transmission.firebaseapp.com",
    projectId: "vague-transmission",
    storageBucket: "vague-transmission.firebasestorage.app",
    messagingSenderId: "574510313990",
    appId: "1:574510313990:web:c173ceec12cab9a3f90987",
    measurementId: "G-3V93NWD9XJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
