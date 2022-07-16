import React, { useState } from 'react'
import { Image, ImageBackground, Text, TextInput, TouchableOpacity, View, SafeAreaView } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";

export default function OrdererHomeScreen({navigation}) {
    const auth = getAuth();
    const db = getFirestore();
    const onNewOrderPress = () => {
        const docRef = doc(db, "Order", auth.currentUser.email)
        const docSnap = getDoc(docRef)
        .then(docSnap => {
            if (docSnap.exists()) {
                alert("You have an existing order! View it by pressing the View Orders option.")
            } else {
                navigation.navigate("Delivering to?")
            }
        })
    }
    const onCheckOrderPress = () => {
        navigation.navigate("View Order",
                {delivererEmail:"",delivererName:"", delivererNum:"", totalPrice:""})
    }
    return (
    <SafeAreaView style = {styles.container}>
        <TouchableOpacity 
                    onPress={() => onNewOrderPress()}>
            <ImageBackground style = {styles.button2} source={require('../../../assets/hawker1.jpg')}>
            <Text style={styles.text}> Make new order</Text>
            </ImageBackground>
        </TouchableOpacity>
        <TouchableOpacity 
                    onPress={() => onCheckOrderPress()}>
            <ImageBackground style = {styles.button2} source={require('../../../assets/hawker2.jpg')}>
            <Text style={styles.text}> Current Orders</Text>
            </ImageBackground>
        </TouchableOpacity>
    </SafeAreaView>
    )
}