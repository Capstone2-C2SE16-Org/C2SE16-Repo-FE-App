// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import{getReactNativePersistence, initializeAuth} from 'firebase/auth'
// Your web app's Firebase configuration
import AsyncStorage from '@react-native-async-storage/async-storage'
import { getFirestore,collection } from "firebase/firestore";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC79Mw3cyYIHMqLpuylim-4CiQMDsr6pMY",
  authDomain: "fir-chat-c9f05.firebaseapp.com",
  projectId: "fir-chat-c9f05",
  storageBucket: "fir-chat-c9f05.appspot.com",
  messagingSenderId: "429452275434",
  appId: "1:429452275434:web:1c8a22d10aad30e24b7193",
  measurementId: "G-J35QT8QFW2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = initializeAuth(app,{
    persistence: getReactNativePersistence(AsyncStorage)
});

export const db = getFirestore(app);

export const usersRef = collection(db,'user');
export const roomRef = collection(db,'rooms');