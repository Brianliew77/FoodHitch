import React from 'react'
import { Text, TouchableOpacity, SafeAreaView } from 'react-native'
import styles from './styles';


export default function DelivererHomeScreen({route, navigation}) {
    const onMakeNewReq = () => {navigation.navigate("WhereToBuyFood")}
    const onCheckCurrentReq = () => {navigation.navigate("ShowingRequest")}

 

    return (
        <SafeAreaView style={styles.container}>

            <Text style={styles.text2}>{'\n'}</Text>
            
            <TouchableOpacity
                style={styles.button1}
                onPress={() => onMakeNewReq()}>
                <Text style={styles.text3}>Make New Request</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.button2}
                onPress={() => onCheckCurrentReq()}>
                <Text style={styles.text3}>Current Requests</Text>
            </TouchableOpacity>

        </SafeAreaView>

    )
}