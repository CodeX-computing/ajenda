// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import {
  getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBnyDnsU-1gcU-AgaeYGBg322SXH2rxVrc',
  authDomain: 'ajenda-406c6.firebaseapp.com',
  projectId: 'ajenda-406c6',
  storageBucket: 'ajenda-406c6.appspot.com',
  messagingSenderId: '753063121613',
  appId: '1:753063121613:web:489be179d367c1c1f0cf84',
  measurementId: 'G-0KCDVW4K1L',
};
// eslint-disable-next-line no-unused-vars
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line no-unused-vars
const analytics = getAnalytics(app);

const auth = getAuth();

export const register = (email, password) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const { user } = userCredential;
      console.log(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    });
};

export const login = (email, password) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const { user } = userCredential;
      console.log(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    });
};

export const logout = () => {
  signOut(auth)
    .then(() => {
      console.log('User signed out successfully');
    })
    .catch((error) => {
      console.log(error);
    });
};
