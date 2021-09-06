import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./view/HomeScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import DishScreen from "./view/DishScreen";
import FindDishScreen from "./view/FindDishScreen";
import ProfileScreen from "./view/ProfileScreen";
import Icon from "react-native-vector-icons/FontAwesome";

const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator screenOptions={{ headerShown: false }}>
          <Tab.Screen
            name="Profile"
            component={ProfileScreen}
            options={{
              tabBarIcon: () => (
                <Icon name="user-circle" size={24} color="black" />
              ),
            }}
          />
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Dish" component={DishScreen} />
          <Tab.Screen
            name="FindDish"
            component={FindDishScreen}
            options={{
              tabBarIcon: () => <Icon name="search" size={24} color="black" />,
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
