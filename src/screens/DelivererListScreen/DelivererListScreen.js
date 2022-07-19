import React, { useEffect, useState } from 'react'
import { Image, Text, Alert, TextInput, TouchableOpacity, View, SafeAreaView, FlatList, StatusBar, StyleSheet } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';
import { getAuth } from "firebase/auth";
import { getDocs, onSnapshot,  collection, query, where, getFirestore } from "firebase/firestore";


export default function DelivererListScreen({navigation, route}) {
    const {CollectAt} = route.params
    console.log(CollectAt)
    const [DATA, setDATA] = useState([])
    const db = getFirestore();
    const [isFetching, setIsFetching] = useState(false);

    useEffect(()=>{
        console.log("DATA")
        const reqRef = collection(db, "Request");
        const q = query(reqRef, where("deliveryPlace", "==", CollectAt));
        const querySnapshot = getDocs(q).then( querySnapshot =>
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            // console.log(doc.data())
            // console.log("test")
            // console.log(DATA)
            if (DATA.some(e => e.delivererEmail === doc.data().delivererEmail)) {
                console.log("DATA contains this document")
            } else {
                setDATA((prevState)=> {return [...prevState, doc.data()]})
            }
        }))
    },[])
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
    const onUpdatePress = () => {
        console.log(selectedId)
        if (selectedId) {
            Alert.alert( "Notice!"
            , "You will not be able to navigate back after this point! Do you want to continue?",
            [
                { text: "Yes", onPress: () => navigation.navigate('Menu', {delivererEmail:selectedId})
                },
                { text: "No", onPress: () => 
                    console.log('return back to screen')
                }

            ])
        } else {
            alert("You have not selected any request!")
        }
    }
    const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
        backgroundColor: "#393939"
    },
    noRequest: {
        fontSize:15,
        alignSelf: "center",
        justifyContent: 'center',
        color:'white',

    },
    wordText: {
        color: 'white',
        fontSize: 28,
        fontWeight: "bold",
        alignItems: "center",
        justifyContent: 'center',
        margin: 35

    },
    wordText1: {
        color: 'black',
        fontSize: 20,
        alignItems: "center",
        justifyContent: 'center',
    },
    button: {
        backgroundColor: '#409A81',
        marginLeft: 30,
        marginRight: 30,
        marginTop: 10,
        height: 48,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: 'center'
    },
    item: {
        marginTop:5,
        padding: 16,
        borderRadius: 16,
        alignSelf:'stretch',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    restaurant: {
        fontSize: 28,
    },
    time: {
        fontSize: 20,
    },
    id: {
        fontSize: 32,
    }
    });
    const Item = ({ item, onPress, backgroundColor, textColor }) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
        <Text style={[styles.time, textColor]}>{item.delivererEmail}</Text>
        <Text style={[styles.restaurant, textColor]}>{item.foodPlace}</Text>
        <Text style={[styles.time, textColor]}>{item.ETA}</Text>
    </TouchableOpacity>
    );
    const [selectedId, setSelectedId] = useState("");
    const renderItem = ({ item }) => {
        const backgroundColor = item.delivererEmail === selectedId ? "#2F2E2E":"#4F4C4C";
        const color = item.delivererEmail === selectedId ? 'white' : 'black';

        return (
        <Item
            item={item}
            onPress={() =>
                //here onwards change to request id next time
                setSelectedId(item.delivererEmail)
            }
            backgroundColor={{ backgroundColor }}
            textColor={{ color }}
        />
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.wordText}> Requests for {CollectAt}: </Text>
            
            <FlatList 
                data={DATA}
                renderItem={renderItem}
                keyExtractor={(item) => item.delivererEmail}
                extraData={selectedId}
                onRefresh={onRefreshPress}
                refreshing={isFetching}
                ListEmptyComponent={<Text style={styles.noRequest}>No requests found.</Text>}
            />
            {/* <TouchableOpacity style={styles.button} onPress={()=>onRefreshPress()}>
                <Text style={styles.wordText1}> Refresh</Text>
            </TouchableOpacity> */}
            <TouchableOpacity style = {styles.button}
                onPress={() => onUpdatePress()}
            >
                <Text style={styles.wordText1}> Continue</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}