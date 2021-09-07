import React from "react";
import { View } from "react-native";
import { Text, Card } from "react-native-elements";
import { IDish } from "../interfaces/IDish";
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
type DisplayAllDishesProps = {
  dishes: IDish[];
  navigation: BottomTabNavigationProp<any>; 
}
const DisplayAllDishes = ({dishes, navigation}:DisplayAllDishesProps) => {
  return (
    <View style={{display:"flex", flexDirection:"row"}}>
      {dishes?.map(
        (
          dish,
          index // () Return - {} don't
        ) => (
          <Card key={index}>
            <Card.Title onPress={() => navigation.navigate('DishScreen', { id : dish.id}) }>{dish.name}</Card.Title>
            {dish.ingredients.map((ingredient, index) => (
              <Text key={index}>{ingredient.name}</Text>
            ))}
            <Card.Divider />
            <Text>{dish.time}</Text>
            <Text>{dish.votes}</Text>
          </Card>
        )
      )}
    </View>
  );
};

export default DisplayAllDishes;
