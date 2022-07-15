import React, { useState} from 'react'
import { Text, SafeAreaView, TouchableOpacity } from 'react-native'
import { getAuth} from "firebase/auth";
import styles from './styles';
import { getFirestore, doc, getDoc, updateDoc } from "firebase/firestore";
import { ScrollView } from 'react-native-gesture-handler';

export default function DelivererCurrentOrdersScreen({route, navigation}) {



    return (
    <SafeAreaView style={styles.container}>
    <ScrollView style={styles.scrollview}>


    </ScrollView>
    </SafeAreaView>
    )
}
