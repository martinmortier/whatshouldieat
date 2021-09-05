import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { Text, ListItem } from "react-native-elements";
import { IDish } from "../interfaces/IDish";
import { getAllDish } from "../services/dishService";

type DisplayAllDishesProps = {
  dishes: IDish[];
}
const DisplayAllDishes = ({dishes}:DisplayAllDishesProps) => {

  return (
    <View>
      {dishes?.map(
        (
          dish,
          index // () Return {} don't
        ) => (
          <View key={index}>
            <Text>{dish.name}</Text>
            {dish.ingredients.map((ingredient, index) => (
              <ListItem key={index}>
                <ListItem.Content>
                  <ListItem.Title>{ingredient.name}</ListItem.Title>
                </ListItem.Content>
              </ListItem>
            ))}
          </View>
        )
      )}
    </View>
  );
};

export default DisplayAllDishes;
