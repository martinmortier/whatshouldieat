import React from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DishScreen from "../view/DishScreen";
import RandomDishesScreen from "../view/RandomDishesScreen";

const Stack = createNativeStackNavigator();
const RandomDishesStack = () => {
  return (
      <Stack.Navigator>
        <Stack.Screen
          name="RandomDishesScreen"
          component={RandomDishesScreen}
        />
        <Stack.Screen name="DishScreen" component={DishScreen} />
      </Stack.Navigator>
  );
};

export default RandomDishesStack;
