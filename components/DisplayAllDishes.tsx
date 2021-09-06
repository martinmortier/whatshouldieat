import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { View } from "react-native";
import { Text, Card } from "react-native-elements";
import { IDish } from "../interfaces/IDish";
type DisplayAllDishesProps = {
  dishes: IDish[];
  navigation: any
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
            <Card.Title onPress={() => navigation.navigate('Dish') }>{dish.name}</Card.Title>
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
