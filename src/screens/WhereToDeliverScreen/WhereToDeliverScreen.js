import React from 'react'
import { Text, TouchableOpacity, SafeAreaView, ImageBackground } from 'react-native'
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
                    onPress={() => toRafflesHall()}>
            <ImageBackground style = {styles.button2} source={require('../../../assets/hawker1.jpg')}>
            <Text style={styles.text}> Raffles Hall</Text>
            </ImageBackground>
            </TouchableOpacity>

            <TouchableOpacity 
                    onPress={() => toKEVIIHall()}>
            <ImageBackground style = {styles.button2} source={require('../../../assets/hawk3.jpg')}>
            <Text style={styles.text}> KEVII Hall</Text>
            </ImageBackground>
            </TouchableOpacity>

            <TouchableOpacity 
                    onPress={() => toKRHall()}>
            <ImageBackground style = {styles.button2} source={require('../../../assets/hawker2.jpg')}>
            <Text style={styles.text}> Kent Ridge Hall</Text>
            </ImageBackground>
            </TouchableOpacity>
        
        </ScrollView>
        </SafeAreaView>

    )
}
