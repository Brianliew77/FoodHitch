import React, { useEffect, useState } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View, SafeAreaView, FlatList, StatusBar, StyleSheet } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';
import { getAuth,  } from "firebase/auth";
import { getFirestore, doc, getDoc, getDocs, collection, query, where } from "firebase/firestore";


export default function NewOrderScreen2({navigation, route}) {
    const {delivererEmail} = route.params //supposed to take in request PK, get restaurant data from firebase
    
    const db = getFirestore();
    const [restaurant, setRestaurant] = useState("")
    const [DATA, setDATA] = useState([])
    const [addFoodPrice,setFoodPrice] = useState(0)
    const [selectedId, setSelectedId] = useState(null);
    useEffect(()=>{
        const docRef = doc(db, "Request", delivererEmail)
        const docSnap = getDoc(docRef)
        .then(docSnap => {
            if (docSnap.exists()) {
                console.log("Document data:", docSnap.data());
                setRestaurant(docSnap.data().foodPlace)
            } else {
                console.log("No such document!");
            }
        })
    },[])

    useEffect(()=>{
        console.log(selectedId)
        console.log("onUpdatePress")
        const reqRef = collection(db, "Food");
        const q = query(reqRef, where("foodPlace", "==", restaurant)
            ,where("name","==",selectedId));
        console.log("foodpricecollected")
        const querySnapshot = getDocs(q).then( querySnapshot =>
        querySnapshot.forEach((doc) => {
                console.log(doc.data().price)
                console.log("onUpdatePress2")
                setFoodPrice(prevState=>{return Number(doc.data().price)})
                // doc.data() is never undefined for query doc snapshots
                
            }))
    },[selectedId])

    useEffect(()=>{
        console.log("DATA")
        const reqRef = collection(db, "Food");
        const q = query(reqRef, where("foodPlace", "==", restaurant))
        console.log("here")
        const querySnapshot = getDocs(q).then( querySnapshot =>
        querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                console.log(doc.data())
                if (DATA.some(element=>{
                    if (element.name===doc.data().name) {
                        return true
                    }
                    return false
                })) {
                    console.log("exist in DATA le")
                } else {
                    setDATA((prevState)=> {return [...prevState, doc.data()]});
                }
            }))
        // doc.data() is never undefined for query doc snapshots
    },[restaurant])

    const styles1 = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        width: 180,
        height: 200,
        padding: 16,
        borderRadius: 16,
        marginBottom: 10,
        marginRight: 10,
        alignSelf:'stretch',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    title: {
        fontSize: 20,
        fontWeight: '700'
    },
    text3:{
        fontSize: 12
    },
    button2: {
        width: 50,
        height: 50
    },
    price:{
        borderRadius: 16,
        backgroundColor: 'white',
        padding: 5,
        borderWidth: 0.5,
        borderColor:'grey'

    }
    });
    const Item = ({ item, onPress, backgroundColor, textColor }) => (
    <TouchableOpacity onPress={onPress} style={[styles1.item, backgroundColor]}>
        <Image style = {styles1.button2} source={require('../../../assets/foodpic.png')}/>
        <Text style={[styles1.title, textColor]}>{item.name}</Text>
        <View style={styles1.price}>
        <Text style={[styles1.text3]}>${item.price}</Text>
        </View>
    </TouchableOpacity>
    );

    
    const renderItem = ({ item }) => {
        const backgroundColor = item.name === selectedId ? "#F09F71" : "#FDEBC9";
        const color = item.name === selectedId ? 'black' : 'black';

        return (
        <Item
            item={item}
            onPress={() => setSelectedId(item.name)}
            backgroundColor={{ backgroundColor }}
            textColor={{ color }}
        />
        );
    };

    const onUpdatePress = () => {
        console.log(delivererEmail)
        if (selectedId) {
        navigation.navigate('Food Cart',{addFoodPrice: Number(addFoodPrice), addFood:selectedId, delivererEmail:delivererEmail})
        } else {
            alert("Please select an item!")
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.text2}> Ordering from ◦</Text>
            <Text style={styles.text}> {restaurant} </Text>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={(item) => item.name}
                extraData={selectedId}
                numColumns = {2}
            />
            <TouchableOpacity style = {styles.button}
                onPress={() => onUpdatePress()}
            >
                <Text style={styles.buttonTitle}> Continue</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}