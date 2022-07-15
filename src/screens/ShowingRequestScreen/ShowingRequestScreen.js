import React, { useState} from 'react'
import { Text, SafeAreaView, TouchableOpacity } from 'react-native'
import { getAuth} from "firebase/auth";
import styles from './styles';
import { getFirestore, doc, getDoc, updateDoc } from "firebase/firestore";

export default function ShowingRequestScreen({route, navigation}) {
    const [numTime, onChangeNumTime] = useState([])
    const [numOrder, onChangeNumOrder] = useState([])
    const [fPlace, onChangeFPlace] = useState([])
    const [dPlace, onChangeDPlace] = useState([])
    
    const onClickCheckReq = () => {
        const db = getFirestore();
        const auth = getAuth();

        const docRef = doc(db, "Request", auth.currentUser.email)
        const docSnap = getDoc(docRef)
        .then(docSnap => {
            if (docSnap.exists()) {
                //Estimated delivery time
                onChangeNumTime(() => [docSnap.data().ETA]);
                //Order Capacity
                onChangeNumOrder(() => [docSnap.data().capacity]);
                //Takeaway Location
                onChangeFPlace(() => [docSnap.data().foodPlace]);
                //Delivery Location
                onChangeDPlace(() => [docSnap.data().deliveryPlace]);
            } else {
              console.log("No Current Requests!");
              alert("No Current Requests!")
            }
          })      
        }  

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
                    onClickCheckReq();
                  }).catch((error) => {
                    // An error occurred
                    alert(error)
                  });           
                }

    return (
        <SafeAreaView style={styles.container}>
            
            <Text style={styles.text2}>{'\n'}</Text>
            <TouchableOpacity
                    style={styles.button}
                    onPress={() => onClickCheckReq()}>
                    <Text style={styles.buttonTitle}>Click Me To Show Current Request Details</Text>
            </TouchableOpacity>

            <Text style={styles.text}>Your Current Request Details Are As Follows:</Text>

            <Text style={styles.text4}>Takeaway Location: {fPlace}</Text>
            <Text style={styles.text4}>Estimated delivery time: {numTime}</Text>
            <Text style={styles.text4}>Delivery Location: {dPlace}</Text>

            <Text style={styles.text4}>Order Capacity {numOrder}</Text>


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
            

        </SafeAreaView>

    )
}
