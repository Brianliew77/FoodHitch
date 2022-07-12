import React, { useState } from 'react'
import { Image, ImageBackground, Text, TextInput, TouchableOpacity, View, SafeAreaView } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default function OrdererHomeScreen({navigation}) {
    const onCheckOrderPress = () => {navigation.navigate("Delivering to?")}
    const onNewOrderPress = () => {navigation.navigate("View Order",
    {delivererEmail:"",delivererName:"",
    delivererNum:"", totalPrice:""})}
    return (
    <SafeAreaView style = {styles.container}>
        <TouchableOpacity 
                    onPress={() => onCheckOrderPress()}>
            <ImageBackground style = {styles.button2} source={require('../../../assets/hawker1.jpg')}>
            <Text style={styles.text}> Make new order</Text>
            </ImageBackground>
        </TouchableOpacity>
        <TouchableOpacity 
                    onPress={() => onNewOrderPress()}>
            <ImageBackground style = {styles.button2} source={require('../../../assets/hawker2.jpg')}>
            <Text style={styles.text}> Current Orders</Text>
            </ImageBackground>
        </TouchableOpacity>
    </SafeAreaView>
    )
}