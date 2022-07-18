import React, { useEffect, useState } from 'react'
import { Image, ImageBackground, Text, TextInput, TouchableOpacity, View, SafeAreaView } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";

export default function OrdererHomeScreen({navigation}) {
    const auth = getAuth();
    const db = getFirestore();
    const [userName,setUserName] = useState("")

    useEffect(()=>{
        const docRefName = doc(db,"user", auth.currentUser.email)
        const docSnapName = getDoc(docRefName)
        .then(docSnap=>{
            if (docSnap.exists()) {
                setUserName(docSnap.data().data.fullName)
            } else {
                alert("No user logged in")
                return
        }
        })
    },[])
    

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
        <View style={styles.profileWrap}>
            <Text style={styles.welcomeText1}> Welcome</Text>
            <Text style={styles.welcomeText2}> {userName}!</Text>
        </View>
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
