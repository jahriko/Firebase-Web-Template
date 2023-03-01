import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	// Add your Firebase project configuration here
	apiKey: "AIzaSyCtyVUyys0GqS99gZfoTFKmC_zfE6YETpo",
	authDomain: "fir-svelte-602a2.firebaseapp.com",
	projectId: "fir-svelte-602a2",
	storageBucket: "fir-svelte-602a2.appspot.com",
	messagingSenderId: "404871148668",
	appId: "1:404871148668:web:e791b1a592f40ee69d85f9",
};

let app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
