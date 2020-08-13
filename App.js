import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'; 
import Home from './src/Home';
import QrCode from './src/qrCode';
const stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <stack.Navigator screenOptions = {{header : () => null }}>
        <stack.Screen name = "Home" component = {Home}/>
        <stack.Screen name = "qrScanner" component = {QrCode}/>
      </stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
