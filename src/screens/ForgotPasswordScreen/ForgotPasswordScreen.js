import React, { useState } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View, SafeAreaView } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { getAuth, updatePassword, sendPasswordResetEmail } from "firebase/auth";

export default function ForgotPasswordScreen({navigation}) {
    const [email, setEmail] = useState('')
    const onContinuePress = () => {
        if (email) {
        const db = getFirestore();
        const auth = getAuth();
        const docRef = doc(db, "user", email)
        const docSnap = getDoc(docRef)
        .then(docSnap => {
            if (docSnap.exists()) {
              console.log("Document data:", docSnap.data());
              sendPasswordResetEmail(auth, email)
              .catch((error)=> {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage)
                })
              navigation.navigate('ForgotFinal', {email : email})
            } else {
              console.log("No such document!");
              alert("No such account!")
            }
          })      
        } else {
            alert("Please enter your email!")
        } 
    }
    
    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAwareScrollView 
                style={{ flex: 1, width: '100%' }}
                keyboardShouldPersistTaps="always">
            <Text style={styles.wordText}> Please input your email here:</Text>
            <TextInput
                    style={styles.input}
                    placeholder='E-mail'
                    placeholderTextColor="#000000"
                    onChangeText={(text) => setEmail(text)}
                    value={email}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
            />
            <TouchableOpacity style = {styles.button}
                onPress={() => onContinuePress()}
            >
                <Text style={styles.buttonTitle}> Continue</Text>
            </TouchableOpacity>

            </KeyboardAwareScrollView>
        </SafeAreaView>


    )
}