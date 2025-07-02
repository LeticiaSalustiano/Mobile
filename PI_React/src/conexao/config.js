// conexao/config.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyASKvn465hXe_LvPkxAFxam51XlTmcYt64",
  authDomain: "safepet-16d40.firebaseapp.com",
  projectId: "safepet-16d40",
  storageBucket: "safepet-16d40.appspot.com",
  messagingSenderId: "1016303621030",
  appId: "1:1016303621030:web:bf2bbb5da48dc290da3567",
  measurementId: "G-DMDVDLND1S"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
