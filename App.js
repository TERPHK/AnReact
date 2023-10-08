import React from 'react'
import { View, Text, } from 'react-native'
import Splash from './screens/Splash'
import Dior from './screens/Dior'
import Jomalone from './screens/Jomalone'
import Chanel from './screens/Chanel'
import CalvinKlein from './screens/CalvinKlein'
import Zara from './screens/Zara'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Splash'
          component={Splash}
          options={{ headerShown: false }} />

        <Stack.Screen
          name='Dior'
          component={Dior}
          options={{ headerShown: true }} />

        <Stack.Screen
          name='Jomalone'
          component={Jomalone}
          options={{ headerShown: true }} />

        <Stack.Screen
          name='Chanel'
          component={Chanel}
          options={{ headerShown: true }} />

        <Stack.Screen
          name='CalvinKlein'
          component={CalvinKlein}
          options={{ headerShown: true }} />

        <Stack.Screen
          name='Zara'
          component={Zara}
          options={{ headerShown: true }} />


      </Stack.Navigator>
    </NavigationContainer>

  )
}

export default App