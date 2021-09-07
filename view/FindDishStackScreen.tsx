import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DishScreen from "./DishScreen";
import FindDishScreen from "./FindDishScreen";

const FindDishStack = createNativeStackNavigator();

function FindDishStackScreen() {
  return (
  <FindDishStack.Navigator>
      <FindDishStack.Screen name="FindDishScreen" component={FindDishScreen} options={{title: "Find !"}}/>
      <FindDishStack.Screen name="DishScreen" component={DishScreen} options={{title: "Dish"}}/>
  </FindDishStack.Navigator>)
}

export default FindDishStackScreen;