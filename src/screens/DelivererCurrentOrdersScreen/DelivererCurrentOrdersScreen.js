
import React, { useEffect, useState } from 'react'
import { Text, SafeAreaView, TouchableOpacity } from 'react-native'
import { getAuth} from "firebase/auth";
import styles from './styles';
import { getFirestore, doc, getDoc, updateDoc, getDocs, onSnapshot,  collection, query, where } from "firebase/firestore";
import { ScrollView } from 'react-native-gesture-handler';

export default function DelivererCurrentOrdersScreen({route, navigation}) {

    const [ordEmail, onChangeOrdEmail] = useState([])
    const [totPrice, onChangeTotPrice] = useState([])
    const [foodie1, onChangeFoodie1] = useState([])
    const [foodie2, onChangeFoodie2] = useState([])

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

    //need account for the case where there isnt any -> show an alert
    const onClickCheckEmail = () => {
        const db = getFirestore();
        const auth = getAuth();

        const reqRef = collection(db, "Order");
        const q = query(reqRef, where("delivererEmail", "==", auth.currentUser.email));
        const querySnapshot = getDocs(q).then( querySnapshot =>
        querySnapshot.forEach((doc) => {
            console.log("Printing Orderer Email")
            //Printing Orderer Email
            onChangeOrdEmail(()=> {return [doc.data().ordererEmail]})

            console.log("Printing Food Item 1")
            //Printing Food Item 1
            onChangeFoodie1(()=> {return [doc.data().food.food1]})

            console.log("Printing Food Item 2")
            //Printing Food Item 2
            onChangeFoodie2(()=> {return [doc.data().food.food2]})

            console.log("Printing Total Price")
            //Printing Total Price
            onChangeTotPrice(()=> {return [doc.data().totalPrice]})



        }
        ))
    }  
 

    return (
    <SafeAreaView style={styles.container}>
    <ScrollView style={styles.scrollview}>
    
    <Text style={styles.text2}>{'\n'}</Text>

    <TouchableOpacity
                    style={styles.button}
                    onPress={() => onClickCheckEmail()}>
                    <Text style={styles.buttonTitle}>Click Me To Show Your Orders!</Text>
            </TouchableOpacity>

    <Text style={styles.text}>Your Current Orders Are:</Text>

    <Text style={styles.text2}>{'\n'}</Text>

    <Text style={styles.text4}>Orderer Email: {ordEmail}</Text>

    <Text style={styles.text4}>Food Item 1: {foodie1}</Text>
    <Text style={styles.text4}>Food Item 2: {foodie2}</Text>

    <Text style={styles.text4}>Total Price Of Order: {totPrice}</Text>

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
