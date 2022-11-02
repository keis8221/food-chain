// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAGjx-nXJ87HaaiWbA0olb1cu4eKp1N-nM",
  authDomain: "food-chain-578b2.firebaseapp.com",
  projectId: "food-chain-578b2",
  storageBucket: "food-chain-578b2.appspot.com",
  messagingSenderId: "847539397277",
  appId: "1:847539397277:web:e58f2bc22df6675593aa74",
  measurementId: "G-Y9JLKXHJVX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);