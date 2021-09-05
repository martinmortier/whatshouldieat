import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { Text, ListItem, Card } from "react-native-elements";
import { IDish } from "../interfaces/IDish";
import { getAllDish } from "../services/dishService";

type DisplayAllDishesProps = {
  dishes: IDish[];
}
const DisplayAllDishes = ({dishes}:DisplayAllDishesProps) => {

  return (
    <View style={{display:"flex", flexDirection:"row"}}>
      {dishes?.map(
        (
          dish,
          index // () Return - {} don't
        ) => (
          <Card key={index}>
            <Card.Title>{dish.name}</Card.Title>
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
