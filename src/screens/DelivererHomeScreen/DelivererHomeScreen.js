import React, { useEffect, useState } from 'react'
import { Image,Text, TouchableOpacity, SafeAreaView, ImageBackground, View } from 'react-native'
import styles from './styles';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";

export default function DelivererHomeScreen({route, navigation}) {
    const onMakeNewReq = () => {navigation.navigate("WhereToBuyFood")}
    const onCheckCurrentReq = () => {navigation.navigate("ShowingRequest")}
    const [userName,setUserName] = useState("")
    const auth = getAuth()
    const db = getFirestore()
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
    return (
        <SafeAreaView style={styles.container}>

            <Text style={styles.text2}>{'\n'}</Text>
            <View style={styles.profileWrap}>
            <Text style={styles.welcomeText1}> Welcome</Text>
            <Text style={styles.welcomeText2}> {userName}!</Text>
        </View>
            <TouchableOpacity 
                    onPress={() => onMakeNewReq()}>
            <ImageBackground style = {styles.button2} source={require('../../../assets/foodstall.jpg')}>
            <Text style={styles.text}> Make New Request</Text>
            </ImageBackground>
            </TouchableOpacity>           
            

            <TouchableOpacity 
                    onPress={() => onCheckCurrentReq()}>
            <ImageBackground style = {styles.button2} source={require('../../../assets/foodstall2.jpg')}>
            <Text style={styles.text}> Current Requests </Text>
            </ImageBackground>
            </TouchableOpacity>    

        </SafeAreaView>

    )
}

