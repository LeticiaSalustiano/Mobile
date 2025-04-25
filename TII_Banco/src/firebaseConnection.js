import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { initializeAuth, getReactNativePersistence } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyD2ruy3y3QmkZjIbHkWXt40s75WfeTixow",
  authDomain: "bancotii02-d152b.firebaseapp.com",
  projectId: "bancotii02-d152b",
  storageBucket: "bancotii02-d152b.firebasestorage.app",
  messagingSenderId: "772917332502",
  appId: "1:772917332502:web:8f448b494f3e9fc4204337",
  measurementId: "G-HZ9WR22X0N"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const auth = initializeAuth (app, {
 persistence: getReactNativePersistence(AsyncStorage)
})

export { db, auth };
