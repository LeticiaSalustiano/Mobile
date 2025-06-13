// firebaseConfig.js
import { initializeApp } from 'firebase/app';
import {  initializeAuth, getReactNativePersistence } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
    apiKey: "AIzaSyASKvn465hXe_LvPkxAFxam51XlTmcYt64",
    authDomain: "safepet-16d40.firebaseapp.com",
    projectId: "safepet-16d40",
    storageBucket: "safepet-16d40.firebasestorage.app",
    messagingSenderId: "1016303621030",
    appId: "1:1016303621030:web:bf2bbb5da48dc290da3567",
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export { app, db };



