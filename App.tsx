import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import store from './redux/store'
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './view/HomeScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DishScreen from './view/DishScreen';
import FindDishScreen from './view/FindDishScreen'

const Tab = createBottomTabNavigator()
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator screenOptions={{headerShown:false}}>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Dish" component={DishScreen} />
          <Tab.Screen name="FindDish" component={FindDishScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
