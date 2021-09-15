import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DishScreen from "../view/DishScreen";
import FindDishScreen from "../view/FindDishScreen";

const Stack = createNativeStackNavigator();

const FindDishStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="FindDishScreen"
        component={FindDishScreen}
        options={{ title: "", headerStyle: {backgroundColor:"#ff8a02"}}}
      />
      <Stack.Screen
        name="DishScreen"
        component={DishScreen}
        options={{ title: "" }}
      />
    </Stack.Navigator>
  );
};

export default FindDishStack;
