import React, { useState } from 'react'
import { Text, TextInput, TouchableOpacity, KeyboardAvoidingView, ScrollView } from 'react-native'
import styles from './styles';
import { getAuth } from "firebase/auth";
import { getFirestore, doc, updateDoc, setDoc } from "firebase/firestore"; 


export default function DelivererDeliveryDetails({route, navigation}) {
    const {deliveryPlace} = route.params;
    const {foodPlace} = route.params;
    const [ETA, onChangeETA] = useState(null)
    const [capacity, onChangeCapacity] = useState(null)
    const [deliveryStatus, onChangeDeliveryStatus] = useState('Order Pending')

    const onPressConfirmDelivery = () => {
        const auth = getAuth();
        const db = getFirestore();
        
        const data2 = {
            foodPlace,
            deliveryPlace,
            ETA,
            capacity,
            deliveryStatus,
            delivererEmail:auth.currentUser.email
        };

        const data3 = {
            deliveryStatus
        }
        console.log("making new reqeeuest")
        console.log(data2)
        setDoc( doc(db, 'Request', auth.currentUser.email), 
            data2
            , { merge: true })
            .then(() => {
                console.log('made new request')
            })
            .catch((error) => {
                alert(error)
            });
        navigation.navigate('ShowingDeliveryDetails', {foodPlace: foodPlace, deliveryPlace: deliveryPlace, ETA: ETA, capacity: capacity})

        // updateDoc(doc(db, 'Request', auth.currentUser.email), {
        //     data3
        //   }).then(() => {
        //     // Profile updated!
        //     console.log('test0')
        //   }).catch((error) => {
        //     // An error occurred
        //     alert(error)
        //   });           

        // updateDoc(doc(db, 'user', auth.currentUser.email), {
        //     data2
        //   }).then(() => {
        //     // Profile updated!
        //     console.log('test1')
        //     navigation.navigate('ShowingDeliveryDetails', {foodPlace: foodPlace, deliveryplace: deliveryplace, number: number, number1: number1})
        //   }).catch((error) => {
        //     // An error occurred
        //     alert(error)
        //   });
        }


    return (

        <KeyboardAvoidingView style={styles.container}>
        <ScrollView style={styles.scrollview}>
            <Text style={styles.text4}>You are buying from: </Text>
            <Text style={styles.text4italics}>{foodPlace}</Text>

            <Text style={styles.text4}>You are going to deliver to:</Text>
            
            <Text style={styles.text4italics}>{deliveryPlace}</Text>

            <Text style={styles.text4}>Estimated time of delivery</Text>
            <Text style={styles.text4time}>(24h clock):</Text>

            
            
            <TextInput
                style={styles.input2}
                onChangeText= {(number) => {onChangeETA(number)}} 
                value={ETA}
                placeholder="Estimated Delivery Time"
                keyboardType="numeric"
                maxLength={4}
            />
            <Text style={styles.text4}>Order Capacity:</Text>

            <TextInput
                style={styles.input2}
                onChangeText= {(number1) => {onChangeCapacity(number1)}}
                value={capacity}
                placeholder="Order Capacity"
                keyboardType="numeric"
                maxLength={2}
            />

            <TouchableOpacity
                    style={styles.button}
                    onPress={() => onPressConfirmDelivery()}>
                    <Text style={styles.buttonTitle}>Confirm Delivery</Text>
                </TouchableOpacity>
        </ScrollView>
        </KeyboardAvoidingView>

    )
}