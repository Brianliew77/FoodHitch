import React, { useDebugValue, useEffect, useState } from 'react'
import { Image, Text, ActivityIndicator, TouchableOpacity, View, Platform,SafeAreaView, FlatList, StatusBar, StyleSheet,Alert } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';
import { getDocs, getDoc,doc, setDoc,  collection, updateDoc, where, getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import * as Progress from 'react-native-progress';
import * as ImagePicker from "expo-image-picker";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import uuid from 'react-native-uuid';

export default function PaymentScreen({navigation, route}) {
    const {totalPrice} = route.params
    const [delivererEmail, setDelivererEmail] = useState("");
    const [delivererName, setDelivererName] = useState("");
    const [delivererNum, setDelivererNum] = useState("");
    const [image, setImage] = useState(null);
    const [uploading, setUploading] = useState(false);
    const [transferred, setTransferred] = useState(0);
    const db = getFirestore();
    const auth = getAuth();
    const storage = getStorage();

    useEffect(()=>{
        if (Platform.OS !== "web") {
            const {
              status,
            } = ImagePicker.requestMediaLibraryPermissionsAsync();
            // if (status != "granted") {
            //   console.log(status,"why")
            //   alert("Sorry, we need camera roll permissions to make this work!");
            // }
          }
    },[])
    useEffect(()=>{
        console.log("first");
        const docRef = doc(db, "Order", auth.currentUser.email)
        const docSnap = getDoc(docRef).then(docSnap=>{
        if (docSnap.exists()) {
            console.log("name");
            console.log(docSnap.data().delivererEmail)
            setDelivererEmail(prevState=>docSnap.data().delivererEmail)
            const docRef1 = doc(db, "user", docSnap.data().delivererEmail)
            const docSnap1 = getDoc(docRef1)
            .then(docSnap => {
                if (docSnap.exists()) {
                    console.log("Demail");
                    console.log(docSnap.data().data.fullName)
                    setDelivererName(docSnap.data().data.fullName);
                    setDelivererNum(docSnap.data().data.phoneNumber);
                    
                } else {
                    console.log("No such document!");
                    alert("No such account!")
                }
                })
        } else {
            console.log("No such document!");
        }
    })
        },[totalPrice])
    
    const onUpdatePress = () => {
        //add food to firebase order cart
        if (image) {
        navigation.navigate("View Order",
            {delivererEmail:delivererEmail,delivererName:delivererName,
            delivererNum:delivererNum, totalPrice:totalPrice})
        } else {
            alert('Please upload a screenshot of your payment for verification before continuing on your order!')
        } 
    }
        async function uploadImageAsync(uri) {
            // Why are we using XMLHttpRequest? See:
            // https://github.com/expo/expo/issues/2402#issuecomment-443726662
            const blob = await new Promise((resolve, reject) => {
              const xhr = new XMLHttpRequest();
              xhr.onload = function () {
                resolve(xhr.response);
              };
              xhr.onerror = function (e) {
                console.log(e);
                reject(new TypeError("Network request failed"));
              };
              xhr.responseType = "blob";
              xhr.open("GET", uri, true);
              xhr.send(null);
            });
          
            const fileRef = ref(storage,  auth.currentUser.email + " paying to " + delivererEmail);
            const result = await uploadBytes(fileRef, blob);
          
            // We're done with the blob, close and release it
            blob.close();
          
            return await getDownloadURL(fileRef);
          }

    const onChoosePress = async () => {
        let pickerResult = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            aspect: [4, 3],
          });
        console.log(pickerResult)
        try {
        setUploading(true);
    
        if (!pickerResult.cancelled) {
            const uploadUrl = await uploadImageAsync(pickerResult.uri);
            setImage(uploadUrl);
        }
        } catch (e) {
        console.log(e);
        alert("Upload failed, sorry :(");
        } finally {
        setUploading(false);
        }
    };

    
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}> Make Payment to confirm your order! </Text>
            <Text style={[styles.text2]}> Paynow to {delivererName} at {delivererNum}</Text>
            <Text style={[styles.text2]}> Order total: $ {totalPrice}</Text>
            <TouchableOpacity style = {styles.button}
                onPress={() => onChoosePress()}
            >
                <Text style={styles.buttonTitle}> Choose Image</Text>
            </TouchableOpacity>
            
            {image !== null ? (
            <Image source={{ uri: image }} style={{ width: 250, height: 250 }} />
            ) : null}

            {uploading ? (
            <View style={styles.progressBarContainer}>
                 <ActivityIndicator color="#fff" animating size="large" />
            </View>
            ) : ( null
            )}
            


            <TouchableOpacity style = {styles.button}
                onPress={() => onUpdatePress()}
            >
                <Text style={styles.buttonTitle}> Continue</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}