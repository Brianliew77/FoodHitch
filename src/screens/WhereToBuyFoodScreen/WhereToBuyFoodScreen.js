import React from 'react'
import { Text, TouchableOpacity, SafeAreaView } from 'react-native'
import styles from './styles';


export default function WhereToBuyFoodScreen({route, navigation}) {
    const toUtownFineFoods = () => {navigation.navigate("WhereToDeliver", {foodplace: 'Utown Fine Foods'})} 
    const toPGPAirconFoodCourt = () => {navigation.navigate("WhereToDeliver", {foodplace: 'PGP AirCon FoodCourt'})} 
    const toTheDeck = () => {navigation.navigate("WhereToDeliver", {foodplace: 'The Deck'})} 

    return (
        <SafeAreaView style={styles.container}>
            
            <Text style={styles.text}>Where are you going to buy food?</Text>
            <Text style={styles.text2}>{'\n'}</Text>

            <TouchableOpacity
                style={styles.button2}
                onPress={() => toUtownFineFoods()}>
                <Text style={styles.text3}>Utown Fine Foods</Text>
            </TouchableOpacity>


            <TouchableOpacity
                style={styles.button2}
                onPress={() => toPGPAirconFoodCourt()}>
                <Text style={styles.text3}>PGP Aircon Food Court</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.button2}
                onPress={() => toTheDeck()}>
                <Text style={styles.text3}>The Deck</Text>
            </TouchableOpacity>


        </SafeAreaView>

    )
}