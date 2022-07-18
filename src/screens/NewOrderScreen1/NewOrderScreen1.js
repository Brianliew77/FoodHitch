import React, { useState } from 'react'
import { Image, ImageBackground, Text, TextInput, TouchableOpacity, View, SafeAreaView } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default function NewOrderScreen1({navigation}) {
    const onRHPress = () => {navigation.navigate("Deliverer List", {CollectAt:"Raffles Hall"})}
    const onKRPress = () => {navigation.navigate("Deliverer List", {CollectAt:"Kent Ridge Hall"})}
    const onPGPRPress = () => {navigation.navigate("Deliverer List", {CollectAt:"KEVII Hall"})}
    return (
    <SafeAreaView style = {styles.container}>
        <KeyboardAwareScrollView>
        <TouchableOpacity 
                    onPress={() => onRHPress()}>
            <ImageBackground style = {styles.button2} source={require('../../../assets/rh.jpeg')}>
            <Text style={styles.text}> Raffles Hall</Text>
            </ImageBackground>
        </TouchableOpacity>
        <TouchableOpacity 
                    onPress={() => onKRPress()}>
            <ImageBackground style = {styles.button2} source={require('../../../assets/krhall.jpeg')}>
            <Text style={styles.text}> Kent Ridge Hall</Text>
            </ImageBackground>
        </TouchableOpacity>
        <TouchableOpacity 
                    onPress={() => onPGPRPress()}>
            <ImageBackground style = {styles.button2} source={require('../../../assets/kevii.jpg')}>
            <Text style={styles.text}> KEVII Hall</Text>
            </ImageBackground>
        </TouchableOpacity>
        </KeyboardAwareScrollView>
    </SafeAreaView>
    )
}