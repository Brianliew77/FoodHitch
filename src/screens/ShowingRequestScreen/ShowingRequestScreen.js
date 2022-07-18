import React, { useState, useEffect} from 'react'
import { Text, SafeAreaView, TouchableOpacity } from 'react-native'
import { getAuth} from "firebase/auth";
import styles from './styles';
import { getFirestore, doc, getDoc, updateDoc } from "firebase/firestore";
import { ScrollView } from 'react-native-gesture-handler';

export default function ShowingRequestScreen({route, navigation}) {
    const [numTime, onChangeNumTime] = useState([])
    const [numOrder, onChangeNumOrder] = useState([])
    const [fPlace, onChangeFPlace] = useState([])
    const [dPlace, onChangeDPlace] = useState([])
    useEffect(()=>{
      onClickCheckReq()
    },[])
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
        
        
        const onPressCheckOrders = () => {
          navigation.navigate("DelivererCurrentOrdersScreen")
        }



    return (
        <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollview}>
            
            <Text style={styles.text2}>{'\n'}</Text>
            {/* <TouchableOpacity
                    style={styles.button}
                    onPress={() => onClickCheckReq()}>
                    <Text style={styles.buttonTitle}>Click Me To Show Current Request Details</Text>
            </TouchableOpacity> */}

            <Text style={styles.text}>Your Current Request Details Are As Follows:</Text>

            <Text style={styles.text4}>Takeaway Location: {fPlace}</Text>
            <Text style={styles.text4}>Estimated delivery time: {numTime}</Text>
            <Text style={styles.text4}>Delivery Location: {dPlace}</Text>

            <Text style={styles.text4}>Order Capacity: {numOrder}</Text>

            <Text style={styles.text2}>{'\n'}</Text>
            <TouchableOpacity
                    style={styles.button}
                    onPress={() => onPressCheckOrders()}>
                    <Text style={styles.buttonTitle}>Click Me To Show Your Current Orders</Text>
            </TouchableOpacity>

            
        </ScrollView>
        </SafeAreaView>

    )
}
