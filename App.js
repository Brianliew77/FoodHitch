import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react'
import { LoginScreen, HomeScreen, RegistrationScreen, ForgotPasswordScreen, 
  ForgotFinalScreen, OrdererHomeScreen, NewOrderScreen1, NewOrderScreen2, 
  DelivererListScreen, CartScreen, PaymentScreen, ViewOrderScreen, 
  DelivererHomeScreen, ShowingRequestScreen, WhereToBuyFoodScreen, WhereToDeliverScreen, DelivererDeliveryDetailsScreen,
ShowingDeliveryDetailsScreen, DelivererCurrentOrdersScreen, ProfileScreen} from './src/screens'

import {decode, encode} from 'base-64'
import { initializeApp } from "firebase/app";
import { getFirestore, initializeFirestore, doc, getDoc } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
if (!global.btoa) {  global.btoa = encode }
if (!global.atob) { global.atob = decode }

const Stack = createNativeStackNavigator();
const firebaseConfig = {
  apiKey: "AIzaSyD0mT8kkXdDA5xU1YFBNMrY7biuJ8r1R6U",
  authDomain: "orbital2022-896f4.firebaseapp.com",
  projectId: "orbital2022-896f4",
  storageBucket: "orbital2022-896f4.appspot.com",
  messagingSenderId: "447075136418",
  appId: "1:447075136418:web:6632af60158b85ba6a78fb",
  measurementId: "G-K043M3NHNF"
};
const app = initializeApp(firebaseConfig);
const db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
});

export default function App() {
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState(null)

  useEffect(() => {
    console.log("useEffect Hook in App.js")
    const db = getFirestore();
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        //user signed in
        const docRef = doc(db, 'user', user.email);
        const docSnap = getDoc(docRef)
        .then((document) => {
          const userData = document.data().then((userData)=>
          setUser(userData))
        })
        .catch((error) => {
        });
      } else {
        //user signed out
      }
    });
  }, user);
  
  return (
    <NavigationContainer>
        <Stack.Navigator 
        screenOptions={{
          headerStyle: {
            backgroundColor: '#FFAC4B',
          },
        }}>
        
        { user ? (
          <>
          <Stack.Screen name="Home">
            {props => <HomeScreen {...props} extraData={user} />}
          </Stack.Screen>
          <Stack.Screen name="Login" component={LoginScreen} 
            options={{
              title: 'Welcome to FoodHitch!',
              headerStyle: {
              backgroundColor: '#FFAC4B'
              }
            }}/>
            <Stack.Screen name="Registration" component={RegistrationScreen} />
            <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen}
              options={{
                title: 'Forgot Password',
                headerStyle: {
                backgroundColor: '#FFAC4B'
                }
            }} > 
            </Stack.Screen>
            <Stack.Screen name="ForgotFinal" component={ForgotFinalScreen}
              options={{
                title: 'Forgot Password',
                headerStyle: {
                backgroundColor: '#FFAC4B'
                }
                }} />
            <Stack.Screen name="Profile" component={ProfileScreen}
              options={{
              title: 'Profile',
              headerStyle: {
              backgroundColor: '#FFAC4B'
              }
              }} />
            <Stack.Screen name="OrdererHome" component={OrdererHomeScreen} />
            <Stack.Screen name="Delivering to?" component={NewOrderScreen1} />
            <Stack.Screen name="Deliverer List" component={DelivererListScreen} />
            <Stack.Screen name="Menu" component={NewOrderScreen2} />
            <Stack.Screen name="Food Cart" component={CartScreen} />
            <Stack.Screen name="Payment" component={PaymentScreen} />
            <Stack.Screen name="View Order" component={ViewOrderScreen} />
            <Stack.Screen name="DelivererHome" component={DelivererHomeScreen}
              options={{
              title: 'Deliverer Home Page',
              headerStyle: {
              backgroundColor: '#FFAC4B'
              }
              }} />
            <Stack.Screen name="WhereToBuyFood" component={WhereToBuyFoodScreen}
              options={{
                title: 'Takeaway Location Confirmation',
                headerStyle: {
                backgroundColor: '#FFAC4B'
                }
                }} />
            <Stack.Screen name="WhereToDeliver" component={WhereToDeliverScreen}
              options={{
                title: 'Delivery Location Confirmation',
                headerStyle: {
                backgroundColor: '#FFAC4B'
                }
                }} />
            <Stack.Screen name="DelivererDeliveryDetails" component={DelivererDeliveryDetailsScreen}
              options={{
                title: 'Other Delivery Details',
                headerStyle: {
                backgroundColor: '#FFAC4B'
                }
                }} />   
            <Stack.Screen name="ShowingDeliveryDetails" component={ShowingDeliveryDetailsScreen}
              options={{
                title: 'Delivery Request Confirmation',
                headerStyle: {
                backgroundColor: '#FFAC4B'
                }
                }} />       
            <Stack.Screen name="ShowingRequest" component={ShowingRequestScreen}
              options={{
                title: 'View Requests',
                headerStyle: {
                backgroundColor: '#FFAC4B'
                }
                }} />
            <Stack.Screen name="DelivererCurrentOrdersScreen" component={DelivererCurrentOrdersScreen}
              options={{
                title: 'Your Current Orders',
                headerStyle: {
                backgroundColor: '#FFAC4B'
                }
                }} />                        
            </>
        ) : (
          <>
            <Stack.Screen name="Login" component={LoginScreen} 
            options={{
              title: 'Welcome to FoodHitch!',
              headerStyle: {
              backgroundColor: '#FFAC4B'
              }
            }}/>
            <Stack.Screen name="Registration" component={RegistrationScreen}
                          options={{
                            title: 'Registration',
                            headerStyle: {
                            backgroundColor: '#FFAC4B'
                            }
                            }}
            />
            <Stack.Screen name="Home">
            {props => <HomeScreen {...props} extraData={user} />}
            </Stack.Screen>
            <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen}
              options={{
                title: 'Forgot Password',
                headerStyle: {
                backgroundColor: '#FFAC4B'
                }
            }} > 
            </Stack.Screen>
            <Stack.Screen name="ForgotFinal" component={ForgotFinalScreen}
              options={{
                title: 'Forgot Password',
                headerStyle: {
                backgroundColor: '#FFAC4B'
                }
                }} />
            <Stack.Screen name="Profile" component={ProfileScreen}
              options={{
              title: 'Profile',
              headerStyle: {
              backgroundColor: '#FFAC4B'
              }
              }} />
            <Stack.Screen name="OrdererHome" component={OrdererHomeScreen} />
            <Stack.Screen name="Delivering to?" component={NewOrderScreen1} />
            <Stack.Screen name="Deliverer List" component={DelivererListScreen} />
            <Stack.Screen name="Menu" component={NewOrderScreen2} />
            <Stack.Screen name="Food Cart" component={CartScreen} />
            <Stack.Screen name="Payment" component={PaymentScreen} />
            <Stack.Screen name="View Order" component={ViewOrderScreen} />
            <Stack.Screen name="DelivererHome" component={DelivererHomeScreen}
              options={{
              title: 'Deliverer Home Page',
              headerStyle: {
              backgroundColor: '#FFAC4B'
              }
              }} />
            <Stack.Screen name="WhereToBuyFood" component={WhereToBuyFoodScreen}
              options={{
                title: 'Takeaway Location Confirmation',
                headerStyle: {
                backgroundColor: '#FFAC4B'
                }
                }} />
            <Stack.Screen name="WhereToDeliver" component={WhereToDeliverScreen}
              options={{
                title: 'Delivery Location Confirmation',
                headerStyle: {
                backgroundColor: '#FFAC4B'
                }
                }} />
            <Stack.Screen name="DelivererDeliveryDetails" component={DelivererDeliveryDetailsScreen}
              options={{
                title: 'Other Delivery Details',
                headerStyle: {
                backgroundColor: '#FFAC4B'
                }
                }} />   
            <Stack.Screen name="ShowingDeliveryDetails" component={ShowingDeliveryDetailsScreen}
              options={{
                title: 'Delivery Request Confirmation',
                headerStyle: {
                backgroundColor: '#FFAC4B'
                }
                }} />       
            <Stack.Screen name="ShowingRequest" component={ShowingRequestScreen}
              options={{
                title: 'View Requests',
                headerStyle: {
                backgroundColor: '#FFAC4B'
                }
                }} />    
            <Stack.Screen name="DelivererCurrentOrdersScreen" component={DelivererCurrentOrdersScreen}
              options={{
                title: 'Your Current Orders',
                headerStyle: {
                backgroundColor: '#FFAC4B'
                }
                }} />                   
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
