import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	// Add your Firebase project configuration here 
};

let app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
