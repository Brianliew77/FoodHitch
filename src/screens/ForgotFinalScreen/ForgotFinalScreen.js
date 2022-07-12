import React, { useState } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View, SafeAreaView } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';
import { getAuth, updatePassword, sendPasswordResetEmail } from "firebase/auth";

export default function ForgotFinalScreen({navigation, route}) {
    const {email} = route.params
    const onUpdatePress = () => {
        navigation.navigate('Login')
        }
    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAwareScrollView 
                style={{ flex: 1, width: '100%' }}
                keyboardShouldPersistTaps="always">
            <Text style={styles.wordText}> Password Reset email has been sent to {email}! </Text>
            <Text style={styles.wordText1}> Please check your email inbox. The email may be found in the spam or junk folder.</Text>
            <TouchableOpacity style = {styles.button}
                onPress={() => onUpdatePress()}
            >
                <Text style={styles.buttonTitle}> Continue</Text>
            </TouchableOpacity>

            </KeyboardAwareScrollView>
        </SafeAreaView>
    )
}