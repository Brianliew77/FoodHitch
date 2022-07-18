import React from 'react'
import { Text, TouchableOpacity, SafeAreaView, ImageBackground } from 'react-native'
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
                    onPress={() => toUtownFineFoods()}>
            <ImageBackground style = {styles.button2} source={require('../../../assets/utown.jpg')}>
            <Text style={styles.text}> Utown Fine Foods</Text>
            </ImageBackground>
            </TouchableOpacity>

            <TouchableOpacity 
                    onPress={() => toPGPAirconFoodCourt()}>
            <ImageBackground style = {styles.button2} source={require('../../../assets/pgp.jpg')}>
            <Text style={styles.text}> PGP Aircon Food Court</Text>
            </ImageBackground>
            </TouchableOpacity>

            <TouchableOpacity 
                    onPress={() => toTheDeck()}>
            <ImageBackground style = {styles.button2} source={require('../../../assets/thedeck.jpg')}>
            <Text style={styles.text}> The Deck </Text>
            </ImageBackground>
            </TouchableOpacity>

        </SafeAreaView>

    )
}
