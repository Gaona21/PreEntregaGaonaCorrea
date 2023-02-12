import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBQSz2_hZKSnMwKGMtxaVdkYyiy7kHBOkA",
  authDomain: "productos-cubos.firebaseapp.com",
  projectId: "productos-cubos",
  storageBucket: "productos-cubos.appspot.com",
  messagingSenderId: "819126552397",
  appId: "1:819126552397:web:c98a92703ba6b7ba7f1904"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);