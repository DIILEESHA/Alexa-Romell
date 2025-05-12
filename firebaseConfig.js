// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDV4TLErC15_KHCw_yS4_4NiLouxxC1gcQ",
  authDomain: "eblui-7f9a8.firebaseapp.com",
  projectId: "eblui-7f9a8",
  storageBucket: "eblui-7f9a8.appbasestorage.app",
  messagingSenderId: "981808116844",
  appId: "1:981808116844:web:d5d2fa9cfd725c13a59449"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };