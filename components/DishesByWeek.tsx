import React from "react";
import { ScrollView, View } from "react-native";
import { IDish } from "../interfaces/IDish";
import { Text } from "react-native-elements";
import { getRandomDishes } from "../services/dishService";
import DishDetails from "./DishDetails";

type DishesByWeekProps = {
  route: { params: { dishes: IDish[] } };
};
const DishesByWeek = ({ route }: DishesByWeekProps) => {
  const { dishes } = route.params;
  const dayOfWeek: string[] = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  return (
    <ScrollView style={{flex:1}}>
      {dayOfWeek.map((day: string, index: number) =>
        getRandomDishes(dishes, 1).map((dish) => (
          <>
            <Text h3 key={index}>
              {day}
            </Text>
            <DishDetails dish={dish} />
          </>
        ))
      )}
    </ScrollView>
  );
};

export default DishesByWeek;
