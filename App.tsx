import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./view/HomeScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FindDishScreen from "./view/FindDishScreen";
import ProfileScreen from "./view/ProfileScreen";
import Icon from "react-native-vector-icons/FontAwesome";
import FindDishStackScreen from "./view/FindDishStackScreen";

const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator screenOptions={{ headerShown: false }}>
          <Tab.Screen
            name="ProfileScreen"
            component={ProfileScreen}
            options={{
              tabBarIcon: () => (
                <Icon name="user-circle" size={24} color="black" />
              ),
              title: "Profile",
            }}
          />
          <Tab.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{
              tabBarIcon: () => <Icon name="home" size={24} color="black" />,
              title: "Home"
            }}
          />
          <Tab.Screen
            name="FindDishStackScreen"
            component={FindDishStackScreen}
            options={{
              tabBarIcon: () => <Icon name="search" size={24} color="black" />,
              title: "Find"
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
