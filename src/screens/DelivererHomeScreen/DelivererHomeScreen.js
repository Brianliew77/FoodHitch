import React from 'react'
import { Text, TouchableOpacity, SafeAreaView, ImageBackground } from 'react-native'
import styles from './styles';


export default function DelivererHomeScreen({route, navigation}) {
    const onMakeNewReq = () => {navigation.navigate("WhereToBuyFood")}
    const onCheckCurrentReq = () => {navigation.navigate("ShowingRequest")}

 

    return (
        <SafeAreaView style={styles.container}>

            <Text style={styles.text2}>{'\n'}</Text>

            <TouchableOpacity 
                    onPress={() => onMakeNewReq()}>
            <ImageBackground style = {styles.button2} source={require('../../../assets/foodstall.jpg')}>
            <Text style={styles.text}> Make New Request</Text>
            </ImageBackground>
            </TouchableOpacity>           
            

            <TouchableOpacity 
                    onPress={() => onCheckCurrentReq()}>
            <ImageBackground style = {styles.button2} source={require('../../../assets/foodstall2.jpg')}>
            <Text style={styles.text}> Current Requests </Text>
            </ImageBackground>
            </TouchableOpacity>    

        </SafeAreaView>

    )
}
