import React, { useEffect, useState } from 'react'
import { Image, Text, TextInput, Alert, TouchableOpacity, View, SafeAreaView, FlatList, StatusBar, StyleSheet } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';
import { getDocs, getDoc,doc, query, deleteDoc, collection, updateDoc, where, getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

export default function ViewOrderScreen({navigation, route}) {
    const {delivererEmail,delivererName,delivererNum, totalPrice} = route.params
    const db = getFirestore();
    const auth = getAuth();
    const [orderCheck, setOrderCheck] = useState(null)
    const [foodBought,setFoodBought] = useState([])
    const [deliveryStatus,setStatus] = useState("")
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [num, setNum] = useState("")
    const [price, setPrice] = useState(0)


    const onPressCheckStatus = () => {
        const reqRef = collection(db, "Request");
        const q = query(reqRef, where("delivererEmail", "==", email));
        const querySnapshot = getDocs(q).then( querySnapshot =>
        querySnapshot.forEach((doc) => {
            console.log('refreshed status')
            setStatus(doc.data().deliveryStatus)
        }))
    }

    useEffect(()=>{
        const docRef = doc(db, "Order", auth.currentUser.email)
        const docSnap = getDoc(docRef)
        .then(docSnap => {
            if (docSnap.exists()) {
                setOrderCheck("Order created")
                setEmail(docSnap.data().delivererEmail)
                setPrice(docSnap.data().totalPrice)
                setEmail(docSnap.data().delivererEmail)
                const docRef1 = doc(db, "user", docSnap.data().delivererEmail)
                const docSnap1 = getDoc(docRef1)
                .then(docSnap => {
                if (docSnap.exists()) {
                    console.log("Demail");
                    setName(docSnap.data().data.fullName);
                    setNum(docSnap.data().data.phoneNumber);
                    
                } else {
                    console.log("No such document!");
                    alert("No such account!")
                }
                })
                if (foodBought.some(element=>{
                    if (element===docSnap.data().food.food1) {
                        return true
                    }
                    return false
                })) {
                    console.log("exist in foodBought")
                } else {
                    if (docSnap.data().food.food2 === "") {
                        setFoodBought(prevState=>{
                            return [docSnap.data().food.food1]})
                        
                    } else {
                        setFoodBought(prevState=>{
                            return [docSnap.data().food.food1, docSnap.data().food.food2]})
                    }
                }    
            }
        })
    },[]) //for food cart

    useEffect(()=>{
        if (deliveryStatus === "Order Delivered!") {
            Alert.alert("Delivered!", "Have you collected your item?", 
            [
                { text: "Yes", onPress: () => {
                    console.log('deleted request and order')
                    deleteDoc(doc(db, "Request", email));
                    deleteDoc(doc(db,"Order",auth.currentUser.email));
                    navigation.navigate("OrdererHome");
                } }
            ])
        }
    },[deliveryStatus])

    useEffect(()=>{
        const reqRef = collection(db, "Request");
        const q = query(reqRef, where("delivererEmail", "==", email));
        const querySnapshot = getDocs(q).then( querySnapshot => {
            querySnapshot.forEach((doc) => {
                console.log('initial set status')
                setStatus(doc.data().deliveryStatus)
            })
        });
    },[foodBought]) //for delivery status

    //creating item component
    const Item = ({ title }) => (
        <View style={styles.item}>
          <Text style={styles.title}>{title}</Text>
        </View>
      );
    const renderItem = ({ item }) => (
    <Item title={item} />
    );
    if (orderCheck !== null) {
    return (
        
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}> Deliverer Details: </Text>
            <Text style={[styles.text2]}> Name : {name} </Text>
            <Text style={[styles.text2]}> Number : {num}</Text>
            <Text style={styles.text}> Order Summary: </Text>
            <FlatList
                data={foodBought}
                renderItem={renderItem}
            />
            <Text style={styles.status}> Status: {deliveryStatus}  </Text>
            <Text style={styles.price}> Order Total: ${price}</Text>
            <TouchableOpacity
                    style={styles.button}
                    onPress={()=>onPressCheckStatus()}>
                    <Text style={styles.buttonTitle}>Refresh Status</Text>
                </TouchableOpacity>
            <TouchableOpacity
                    style={styles.button}
                    onPress={() => {navigation.navigate("OrdererHome")}}>
                    <Text style={styles.buttonTitle}>Return home!</Text>
                </TouchableOpacity>
        </SafeAreaView>
    )
    } else {
        return (
            <SafeAreaView  style={styles.container}>
                <Text style={styles.noOrder}> No current orders! Return to homepage or create one now! </Text>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {navigation.navigate("OrdererHome")}}>
                    <Text style={styles.buttonTitle}>Return home!</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {navigation.navigate("Delivering to?")}}>
                    <Text style={styles.buttonTitle}>Create new order!</Text>
                </TouchableOpacity>
            </SafeAreaView>
        )
    }
}