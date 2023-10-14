import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { CheckoutScreenOff } from "@screens/CheckoutOffScreen";
import { CepScreen } from "@screens/CepScreen";
import { CheckoutScreen } from "@screens/CheckoutScreen";
import { ThemeProvider } from "styled-components/native";
import theme from "../theme";
export const Stack = createNativeStackNavigator();
export const Routes = () => {
    return (
      
   <NavigationContainer>
    <Stack.Navigator >
    <Stack.Screen name='CheckoutScreen' component={CheckoutScreen} options={{ headerShown: false }}/>
    <Stack.Screen name='CheckoutScreenOff' component={CheckoutScreenOff} options={{ headerShown: false }}/>
    <Stack.Screen name='CepScreen' component={CepScreen} options={{ headerShown: false }}/>
  
    </Stack.Navigator>
   </NavigationContainer>
   
    )
 }
 
