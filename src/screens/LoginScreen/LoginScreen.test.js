export { default as LoginScreen } from './LoginScreen'
import React from "react";
import { render, screen, fireEvent, waitFor } from '@testing-library/react-native';
import { LoginScreen } from '..';
import { initializeApp } from "firebase/app";
import { getFirestore, initializeFirestore, doc, getDoc } from "firebase/firestore";
import { Alert } from 'react-native';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


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
test('Able to input password and email for login', async ()=>{
    jest.spyOn(Alert, 'alert');
    render(<LoginScreen/>)
    // fireEvent.press(screen.getByText('Log in'))
    const loginButton = screen.getByText('Log in')
    const passwordInput = screen.getByPlaceholderText('Password')
    const emailInput = screen.getByPlaceholderText('E-mail')
    fireEvent.changeText(emailInput, 'test1@gmail.com')
    fireEvent.changeText(passwordInput,'xuan')
    expect(passwordInput.props.value).toBe('xuan')
    expect(emailInput.props.value).toBe('test1@gmail.com')    
})
