import React, { useState } from 'react'
import { Text, TextInput, TouchableOpacity, KeyboardAvoidingView, ScrollView, FlatList } from 'react-native'
import styles from './styles';
import { getAuth } from "firebase/auth";
import { getFirestore, doc, updateDoc, setDoc } from "firebase/firestore"; 

export default function DelivererDeliveryDetails({route, navigation}) {
    const {deliveryPlace} = route.params;
    const {foodPlace} = route.params;
    const [ETA, onChangeETA] = useState(null)
    const [capacity, onChangeCapacity] = useState(null)
    const [deliveryStatus, onChangeDeliveryStatus] = useState('Order Pending')

    //if ETA not 0000-2359, show alert and dont allow user to proceed

    const onPressConfirmDelivery = () => {
        const auth = getAuth();
        const db = getFirestore();
        
        const data2 = {
            foodPlace,
            deliveryPlace,
            ETA,
            capacity,
            deliveryStatus,
            delivererEmail:auth.currentUser.email,
            capacityReached:0
        };

        const data3 = {
            deliveryStatus
        }
        console.log("making new reqeuest")
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
        console.log(ETA.length)
        console.log(capacity.length)
        console.log(parseInt("00003"))
        //ETA must be 4 digits (in 24h clock)
        if (ETA.length != 4) {
            alert("Please enter valid estimated delivery time!")
        }
        else if (parseInt(ETA) > 2359) {
            alert("Please enter valid estimated delivery time!")
        }
        //acounting for xx6x xx7x xx8x xx9x

        //for numbers in between 1000 and 2359
        else if ((parseInt(ETA) <= 2359 && parseInt(ETA) >= 1000) && 
        (Math.floor((parseInt(ETA) % 100) / 10) == 6 || Math.floor((parseInt(ETA) % 100) / 10) == 7 || 
        Math.floor((parseInt(ETA) % 100) / 10) == 8 || Math.floor((parseInt(ETA) % 100) / 10) == 9)) {
                alert("Please enter valid estimated delivery time!") 
        }

        //for numbers in between 100 and 999
        else if ((parseInt(ETA) <= 999 && parseInt(ETA) >= 100) && 
        (Math.floor((parseInt(ETA) / 10) % 10) == 6 || Math.floor((parseInt(ETA) / 10) % 10) == 7 || 
        Math.floor((parseInt(ETA) / 10) % 10) == 8 ||Math.floor((parseInt(ETA) / 10) % 10) == 9)) {
            alert("Please enter valid estimated delivery time!") 
        }
        
        //for numbers in between 10 and 99
        else if ((parseInt(ETA) >= 10 && parseInt(ETA) <= 99) && 
        (Math.floor(parseInt(ETA) / 10) == 6 || Math.floor(parseInt(ETA) / 10) == 7 || 
        Math.floor(parseInt(ETA) / 10) == 8 || Math.floor(parseInt(ETA) / 10) == 9)) {
            alert("Please enter valid estimated delivery time!")  
        }

        //already restricted to 1 digit below hence this accounts for null value
        else if (capacity.length != 1) {
            alert("Please enter Order Capacity!")           
        }
        else if (parseInt(capacity) == 0) {
            alert("Order capacity cannot be 0!")
        }
        else {
            navigation.navigate('ShowingDeliveryDetails', {foodPlace: foodPlace, deliveryPlace: deliveryPlace, ETA: ETA, capacity: capacity})
        }
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
                maxLength={1}
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
