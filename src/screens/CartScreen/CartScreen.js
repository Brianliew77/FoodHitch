import React, { useEffect, useState } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View, SafeAreaView, FlatList, StatusBar, StyleSheet } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';
import { getDocs, getDoc,doc, setDoc,  collection, updateDoc, where, getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


export default function CartScreen({navigation,route}) {
    //shd take in order id
    const {addFoodPrice, addFood, delivererEmail} = route.params;

    console.log('here')
    console.log(delivererEmail)
    const db = getFirestore();
    const auth = getAuth();
    const [foodBought,setFoodBought] = useState([])
    const [counter, setCounter] = useState("")
    

    useEffect(()=>{
        const docRef = doc(db, "Order", auth.currentUser.email)
        const docSnap = getDoc(docRef)
        .then(docSnap => {
            if (docSnap.exists()) {
              if (docSnap.data().food.food2 === "") {
                updateDoc(docRef, {
                    "food.food2":addFood, "totalPrice": Number(docSnap.data().totalPrice) + Number(addFoodPrice)
                })
                setTotalDisplay(Number(docSnap.data().totalPrice) + Number(addFoodPrice))
                console.log("updated log")
                setCounter("start2")
              } else {
                  console.log("too many food")
                  setTotalDisplay(Number(docSnap.data().totalPrice))
                  alert("You can only choose up to 2 food items!")
                  //alert("You can only choose up to 2 food items!")
              }
              
            } else {
                console.log("making new order")
                const order = {
                    ordererEmail: auth.currentUser.email,
                    delivererEmail: delivererEmail,
                    totalPrice: Number(addFoodPrice),
                    food: {food1:addFood, food2:""}
                };
                setDoc( doc(db, 'Order', auth.currentUser.email), 
                    order
                    , { merge: true })
                    .then(() => {
                        console.log('made new order')
                        setCounter("start")
                        setTotalDisplay(Number(addFoodPrice))
                    })
                    .catch((error) => {
                        alert(error)
                    });
            }
        })
        
    },[totalDisplay])

    const [totalDisplay, setTotalDisplay] = useState(0);

    useEffect(()=>{
            const reqRef = collection(db, "Order");
            const docRef = doc(db, "Order", auth.currentUser.email)
            const docSnap = getDoc(docRef)
            .then(docSnap => {
                if (docSnap.exists()) {
                //setTotalDisplay(Number(docSnap.data().totalPrice))
                if (foodBought.some(element=>{
                    if (element===docSnap.data().food.food1)  {
                        return true
                    }
                    return false
                }) && docSnap.data().food.food2 != "") {
                    //food1 alrdy inside data
                    if (docSnap.data().food.food2 === "") {
                        console.log('food1 in data food2 dont exist')
                        //food1 alrdy in data and food2 dont exist
                        setFoodBought(prevState=>{
                            return [{
                                id: '1',
                                title: docSnap.data().food.food1,
                              }]})
                    } else {
                        //food1 in and food2 exist
                        console.log('food1 in data and food2 exist')
                        setFoodBought(prevState=>{
                            return [{
                                id: '1',
                                title: docSnap.data().food.food1,
                              }, {
                                id: '2',
                                title: docSnap.data().food.food2,
                              }]})
                    }
                } else {
                    //food1 not in data and food2 is not empty
                    console.log('food1 not in data and food2 exist')
                    setFoodBought(prevState=>{
                        return [{
                            id: '1',
                            title: docSnap.data().food.food1,
                          }, {
                            id: '2',
                            title: docSnap.data().food.food2,
                          }]})
                } 
            }
            })       
    },[totalDisplay])

    console.log("todisplay")
    console.log(totalDisplay)
    console.log(foodBought)

    //creating item component
    const Item = ({ title }) => (
        <View style={styles.item}>
          <Text style={styles.title}>{title}</Text>
        </View>
      );
    const renderItem = ({ item }) => (
    <Item title={item.title} />
    );
    const onUpdatePress = () => {
        //add food to firebase order cart
        navigation.navigate("Payment", {totalPrice: totalDisplay})
        }
    const onAddPress = () => {
        //add food to firebase order cart
        navigation.navigate('Menu', {delivererEmail:delivererEmail})//CHANGE when add to firebase this is request id
        }
    
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.containerWrap}>
                <FlatList 
                    data={
                        foodBought
                    }
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    ListEmptyComponent={<Text style={styles.title}>No food added.</Text>}
                />
                <Text style={styles.terms}> *To allow each request to cater to more orders, each Order can only have 2 items!</Text>
                <TouchableOpacity style = {styles.button}
                    onPress={() => onAddPress()}
                >
                    <Text style={styles.buttonText}> Add more items</Text>
                </TouchableOpacity>

                <Text style={[styles.priceDisplay]}> Total Price: $ {totalDisplay}</Text>

                <TouchableOpacity style = {styles.button}
                    onPress={() => onUpdatePress()}
                >
                    <Text style={styles.buttonText}> Continue</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}