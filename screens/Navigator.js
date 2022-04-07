import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { gs } from '../src/inc/Global';

// Import screens
import StartScreen from './StartScreen';
import LoginScreen from './LoginScreen';

const Stack = createStackNavigator();


// Navigator
function StartContainer() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Start Screen">
        <Stack.Screen name="StartScreen" component={StartScreen} options={{
            headerShown: false, 
            headerStyle: {backgroundColor: "#fff"}, 
            cardStyle: {backgroundColor: '#fff'}}}
        />
        <Stack.Screen name="LoginScreen" component={LoginScreen} options={{
            title: "Login to FOOSAPP", 
            presentation: 'modal', 
            headerTintColor: 'white',
            headerShown: true, 
            headerStyle: {backgroundColor: "#212D33", shadowColor: 'transparent'},
            headerBackImage: ()=>(<Image source={require("../src/images/close-white.png")} style={{width:14, height: 14, marginLeft: 20}} />),
            headerBackTitle: " ",
            cardStyle: {backgroundColor: '#fff'}}} 
            />            
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StartContainer;