import React, { useState} from 'react'
import { Text, SafeAreaView, TouchableOpacity } from 'react-native'
import { getAuth} from "firebase/auth";
import styles from './styles';
import { getFirestore, doc, getDoc, updateDoc } from "firebase/firestore";
import { ScrollView } from 'react-native-gesture-handler';

export default function DelivererCurrentOrdersScreen({route, navigation}) {

    const onPressisPending = () => {
        const auth = getAuth();
        const db = getFirestore();
        
        const data3 = {
            deliveryStatus: "Order Pending"
        };

        updateDoc(doc(db, 'Request', auth.currentUser.email), 
            data3
          ).then(() => {
            // Profile updated!
            console.log('order pending')
            alert("Order Marked As Pending!")
          }).catch((error) => {
            // An error occurred
            alert(error)
          });           
        }

    const onPressisOnTheWay = () => {
        const auth = getAuth();
        const db = getFirestore();
        
        const data3 = {
            deliveryStatus: "Order On The Way!"
        };

        updateDoc(doc(db, 'Request', auth.currentUser.email), 
            data3
          ).then(() => {
            // Profile updated!
            console.log('order on the way')
            alert("Order Marked As On The Way!");
            
          }).catch((error) => {
            // An error occurred
            alert(error)
          });           
        }
        const onPressisDelivered = () => {
            const auth = getAuth();
            const db = getFirestore();
            
            const data3 = {
                deliveryStatus: "Order Delivered!"
            };

            updateDoc(doc(db, 'Request', auth.currentUser.email), 
                data3
              ).then(() => {
                // Profile updated!
                console.log('order delivered')
                alert("Order Marked As Delivered!");
                
              }).catch((error) => {
                // An error occurred
                alert(error)
              });           
            }

    return (
    <SafeAreaView style={styles.container}>
    <ScrollView style={styles.scrollview}>

    <Text style={styles.text4}>Update Order Status:</Text>
            
            <TouchableOpacity
                    style={styles.button}
                    onPress={() => onPressisPending()}>
                    <Text style={styles.buttonTitle}>Order Pending</Text>
            </TouchableOpacity>

            <TouchableOpacity
                    style={styles.button}
                    onPress={() => onPressisOnTheWay()}>
                    <Text style={styles.buttonTitle}>Order On The Way</Text>
            </TouchableOpacity>

            <TouchableOpacity
                    style={styles.button}
                    onPress={() => onPressisDelivered()}>
                    <Text style={styles.buttonTitle}>Order Delivered</Text>
            </TouchableOpacity>
    </ScrollView>
    </SafeAreaView>
    )
}

