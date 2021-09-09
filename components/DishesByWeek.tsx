import { Route } from "@react-navigation/routers";
import React from "react";
import { ScrollView, View } from "react-native";
import { IDish } from "../interfaces/IDish";
import { Text } from 'react-native-elements'
import { getRandomDishes } from "../services/dishService";
import DishDetails from "./DishDetails";
import RandomDishes from "./RandomDishes";

type DishesByWeekProps = {
  route: { params: { dishes: IDish[] } };
};
const DishesByWeek = ({ route } : DishesByWeekProps) => {
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
    //TODO: Algo not working
    <ScrollView>
      {/* {getRandomDishes(dishes, 7).map((dish: IDish) => (
        dayOfWeek.map((day: string, index: number) => (
          <>
            <Text h3 key={index}>{day}</Text>
            <DishDetails dish={dish} />
          </>
        ))
      ))} */}
    </ScrollView>
  );
};

export default DishesByWeek;
