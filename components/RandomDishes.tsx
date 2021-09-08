import React, { useEffect } from "react";
import { View } from "react-native";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { IDish } from "../interfaces/IDish";
import { initialize } from "../redux/allDishesReducer";
import DishDetails from "./DishDetails";

type RandomDishesProps = {
  count: number;
};
const RandomDishes = ({ count }: RandomDishesProps) => {
  const dispatch = useAppDispatch();
  const dishes: IDish[] = useAppSelector((state) => state.allDishes);

  useEffect(() => {
    dispatch(initialize());
  }, []);

  const getRandomDishes = (data: IDish[], count: number): IDish[] => {
    const dishesRandom = Array.from(
      { length: count },
      () => data[Math.floor(Math.random() * data.length)]
    );
    console.log(dishesRandom,"random");
    return dishesRandom;
  };

  return (
    <View>
      {getRandomDishes(dishes, count).map((dish, index) => (
        <DishDetails dish={dish} key={index} />
      ))}
    </View>
  );
};

export default RandomDishes;
