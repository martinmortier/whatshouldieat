import React, { useEffect } from "react";
import { View } from "react-native";
import { Button } from "react-native-elements";
import RandomDishes from "../components/RandomDishes";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { IDish } from "../interfaces/IDish";
import { initialize } from "../redux/allDishesReducer";
import { getRandomDishes } from "../services/dishService";
const RandomDishesScreen = ({ navigation }: any) => {
  const dispatch = useAppDispatch();
  const dishes: IDish[] = useAppSelector((state) => state.allDishes);

  useEffect(() => {
    dispatch(initialize());
  }, []);

  return (
    <View style={{ paddingTop: "10%" }}>
      {dishes.length > 0 && (
        <View>
          <Button
            title="I want a random dish !"
            onPress={() => {
              const dish_id: number = getRandomDishes(dishes, 1)[0].id;
              return navigation.navigate("DishScreen", { id: dish_id });
            }}
          />
          <RandomDishes dishes={dishes} count={2} />
        </View>
      )}
    </View>
  );
};

export default RandomDishesScreen;
