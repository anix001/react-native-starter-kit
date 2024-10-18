import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
} from 'react-native';

//navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//screens
import Home from './screens/Home';
import Details from './screens/Details';


export type RootStackParamList = {
  Home: undefined;
  Details: {productId: string}
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function App(){
  return(
   <NavigationContainer>
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen 
        name="Home"
        component={Home}
        options={{
          title: 'Trending Projects',
        }}/>
      <Stack.Screen
      name="Details"
      component={Details}
      options={{
        title: 'Project Details',
      }}/>
    </Stack.Navigator>
   </NavigationContainer>
  );
}


export default App;
