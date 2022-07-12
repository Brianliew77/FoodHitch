import React from 'react'
import { Text, TouchableOpacity, SafeAreaView } from 'react-native'
import styles from './styles';
import { ScrollView } from 'react-native-gesture-handler';

export default function WhereToDeliverScreen({route, navigation}) {
    const {foodplace} = route.params;

    const toRafflesHall = () => {navigation.navigate("DelivererDeliveryDetails", {deliveryPlace: 'Raffles Hall', foodPlace: foodplace})} 
    const toKEVIIHall = () => {navigation.navigate("DelivererDeliveryDetails", {deliveryPlace: 'KEVII Hall', foodPlace: foodplace})} 
    const toKRHall = () => {navigation.navigate("DelivererDeliveryDetails", {deliveryPlace: 'Kent Ridge Hall', foodPlace: foodplace})} 

    return (

        <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollview}>

            <Text style={styles.text}>You are buying from: </Text>
            <Text style={styles.textplace}>{foodplace}</Text>

            <Text style={styles.textdeliver}>Where are you going to deliver to?</Text>
            
            <Text style={styles.text2}>{'\n'}</Text>

            <TouchableOpacity
                style={styles.button2}
                onPress={() => toRafflesHall()}>
                <Text style={styles.text3}>Raffles Hall</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.button2}
                onPress={() => toKEVIIHall()}>
                <Text style={styles.text3}>KEVII Hall</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.button2}
                onPress={() => toKRHall()}>
                <Text style={styles.text3}>Kent Ridge Hall</Text>
            </TouchableOpacity>
        
        </ScrollView>
        </SafeAreaView>

    )
}