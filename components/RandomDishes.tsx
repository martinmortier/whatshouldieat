import React, { useEffect } from "react";
import { View } from "react-native";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { IDish } from "../interfaces/IDish";
import { initialize } from "../redux/allDishesReducer";
import DishDetails from "./DishDetails";
import { getRandomDishes } from '../services/dishService'
type RandomDishesProps = {
  count: number;
  dishes: IDish[];
};
const RandomDishes = ({ count, dishes }: RandomDishesProps) => {

  return (
    <View>
      {getRandomDishes(dishes, count).map((dish, index) => (
        <DishDetails dish={dish} key={index} />
      ))}
    </View>
  );
};

export default RandomDishes;
