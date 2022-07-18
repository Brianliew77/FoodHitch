import React from 'react'
import { Text, Image, Button, SafeAreaView, TouchableOpacity } from 'react-native'
import { getAuth, signOut } from "firebase/auth";
import styles from './styles';
import { getFocusedRouteNameFromRoute } from '@react-navigation/core';

export default function HomeScreen({route, navigation}) {
    console.log('here')
    console.log(route)
    const onOrdererPress = () => {
        navigation.navigate("OrdererHome")
    }

    const onDelivererPress = () => {
        navigation.navigate("DelivererHome")
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>Let's go!</Text>
            <Text style={styles.text2}>To start off, do you plan to order food (Orderer) or buy food? (Deliverer)</Text>
            <Image
                    style={styles.logo}
                    source={require('../../../assets/foodcute.png')}
                />
            <TouchableOpacity
                style={styles.button1}
                onPress={() => onOrdererPress()}>
                <Text style={styles.text3}>I am an Orderer!</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button2}
                onPress={() => onDelivererPress()}>
                <Text style={styles.text3}>I am a Deliverer!</Text>
            </TouchableOpacity>
            <Button 
                color="#f194ff"
                title="Sign Out"
                onPress={() => {
                    const auth = getAuth();
                    signOut(auth)
                    .then(() => {
                      // Sign-out successful.
                    }).catch((error) => {
                      // An error happened.
                    })
                    navigation.navigate('Login')}
                }
            />
        </SafeAreaView>

    )
}