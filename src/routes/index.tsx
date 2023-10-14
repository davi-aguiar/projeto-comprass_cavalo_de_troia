import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { CepScreen } from "@screens/CepScreen";
import { CheckoutScreenOff } from "@screens/CheckoutOffScreen";
import { ThemeProvider } from "styled-components/native";
import theme from "../theme";
export const Stack = createNativeStackNavigator();
export const Routes = () => {
    return (
      
   <NavigationContainer>
    <Stack.Navigator >
    <Stack.Screen name='CheckoutScreenOff' component={CheckoutScreenOff} options={{ headerShown: false }}/>
    </Stack.Navigator>
   </NavigationContainer>
   
    )
 }
 
