import React from 'react'
import { Text, SafeAreaView, TouchableOpacity } from 'react-native'
import styles from './styles';

export default function ShowingDeliveryDetailsScreen({route, navigation}) {
    const {deliveryPlace} = route.params;
    const {foodPlace} = route.params;
    const {ETA} = route.params;
    const {capacity} = route.params;

    const onPressBackToDelivererHome = () => {
        navigation.navigate('DelivererHome')
    }
    
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>Your Delivery Request is Confirmed!</Text>
            <Text style={styles.text2}>Details of your delivery request are as follows:</Text>

            <Text style={styles.text4}>Takeaway Location: {foodPlace}</Text>
            <Text style={styles.text4}>Delivery Location: {deliveryPlace}</Text>
            <Text style={styles.text4}>Estimated Delivery Time: {ETA}</Text>
            <Text style={styles.text4}>Order Capacity: {capacity}</Text>

            <TouchableOpacity
                    style={styles.button}
                    onPress={() => onPressBackToDelivererHome()}>
                    <Text style={styles.buttonTitle}>Back To Deliverer Home Page</Text>
                </TouchableOpacity>            

        </SafeAreaView>

    )
}