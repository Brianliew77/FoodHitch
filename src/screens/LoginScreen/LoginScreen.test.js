export { default as LoginScreen } from './LoginScreen'
import React from "react";
import { render, screen, fireEvent } from '@testing-library/react-native';
import { LoginScreen } from '..';
import { initializeApp } from "firebase/app";
import { getFirestore, initializeFirestore, doc, getDoc } from "firebase/firestore";
import { Alert } from 'react-native';
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyD0mT8kkXdDA5xU1YFBNMrY7biuJ8r1R6U",
    authDomain: "orbital2022-896f4.firebaseapp.com",
    projectId: "orbital2022-896f4",
    storageBucket: "orbital2022-896f4.appspot.com",
    messagingSenderId: "447075136418",
    appId: "1:447075136418:web:6632af60158b85ba6a78fb",
    measurementId: "G-K043M3NHNF"
  };
  const app = initializeApp(firebaseConfig);
  const db = initializeFirestore(app, {
    experimentalForceLongPolling: true,
  });
//login to firebase
test('login to firebase', ()=>{
    jest.spyOn(Alert, 'alert');
    const {getByPlaceholderText, getByText} = render(<LoginScreen/>)
    const input = getByPlaceholderText('E-mail')
    const loginButton = getByText('Log in')
    const input2 = getByPlaceholderText('Password')
    fireEvent.changeText(input, 'test1@gmail.com')
    fireEvent.changeText(input2, 'wrong password')
    fireEvent.press(loginButton)
    const auth = getAuth()
    expect(auth.currentUser).not.toBeNull()
})
//error alert if firebase authentication wrong