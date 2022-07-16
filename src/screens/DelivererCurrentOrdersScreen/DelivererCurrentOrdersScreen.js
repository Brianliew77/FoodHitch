import React, { useEffect, useState } from 'react'
import { Text, SafeAreaView, TouchableOpacity } from 'react-native'
import { getAuth} from "firebase/auth";
import styles from './styles';
import { getFirestore, doc, getDoc, updateDoc, getDocs, onSnapshot,  collection, query, where,  } from "firebase/firestore";
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
            alert("Orderers will see food items status as PENDING!")
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
            alert("Orderers will see food items status as ON THE WAY!")
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
                alert("Orderers will see food items status as DELIVERED!")
              }).catch((error) => {
                // An error occurred
                alert(error)
              });           
            }
            /*
            const onRefreshPress = () => {
                setIsFetching(true)
                const reqRef = collection(db, "Request");
                const q = query(reqRef, where("deliveryPlace", "==", CollectAt));
                const querySnapshot = getDocs(q).then( querySnapshot =>
                querySnapshot.forEach((doc) => {
                    // doc.data() is never undefined for query doc snapshots
                    console.log(doc.data())
                    if (DATA.some(element=>{
                        if (element.delivererEmail===doc.data().delivererEmail) {
                            return true
                        }
                        return false
                    })) {
                        console.log("exist in DATA le")
                    } else {
                        setDATA((prevState)=> {return [...prevState, doc.data()]})
                    }
                }))
                setIsFetching(false)
            }
            */
    return (
    <SafeAreaView style={styles.container}>
    <ScrollView style={styles.scrollview}>

    <Text style={styles.text}>Your Current Orders Are:</Text>

    <Text style={styles.text2}>{'\n'}</Text>

    <Text style={styles.text4}>Update Orders Status:</Text>
            
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

