import React from "react";
import { View, StyleSheet } from "react-native";
import { Text, Card, Button, Image } from "react-native-elements";
import { IDish } from "../interfaces/IDish";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
type DisplayAllDishesProps = {
  dishes: IDish[];
  navigation: BottomTabNavigationProp<any>;
};
const DisplayAllDishes = ({ dishes, navigation }: DisplayAllDishesProps) => {
  const backgroundItemsColors: string[] = ["#fdf7d0", "#ebefd9", "#f4d7d7"];

  return (
    <View style={styles.main}>
      {dishes?.map(
        (
          dish: IDish,
          index: number // () Return - {} don't
        ) => (
          <Card
            key={index}
            containerStyle={{
              ...styles.items,
              backgroundColor:
                backgroundItemsColors[
                  Math.floor(Math.random() * backgroundItemsColors.length)
                ],
            }}
          >
            <Image
              source={{ uri: dish.image }}
              style={{ width: 100, height: 100 }}
            />
            <Card.Title>{dish.name}</Card.Title>
            {dish.ingredients.map((ingredient, index) => (
              <Text key={index}>{ingredient.name}</Text>
            ))}
            <Card.Divider />
            <Text>{dish.time}</Text>
            <Text>{dish.votes}</Text>
            <Button
              onPress={() => navigation.navigate("DishScreen", { id: dish.id })}
              title="Infos"
              buttonStyle={styles.infosButton}
            />
          </Card>
        )
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
  items: {
    flexBasis: "40%",
    alignSelf: "center",
  },
  infosButton: {
    backgroundColor: "#ff8a02",
  },
});
export default DisplayAllDishes;
