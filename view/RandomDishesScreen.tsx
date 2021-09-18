import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
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
    <View style={styles.layout}>
      {dishes.length > 0 && (
        <View>
          <Text>Make a choice ! </Text>
          <Button
            title="I want a random dish !"
            buttonStyle={styles.button}
            onPress={() => {
              const dish_id: number = getRandomDishes(dishes, 1)[0].id;
              return navigation.navigate("DishScreen", { id: dish_id });
            }}
          />
          <Button
            title="Propose me some dishes for my week"
            buttonStyle={styles.button}
            onPress={() =>
              navigation.navigate("DishesByWeek", { dishes: dishes })
            }
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  layout: {
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    flexGrow:1
  },
  button: {
    backgroundColor:'#ff8a02',
    margin:20,
    borderRadius:10,
    padding:"5%"
  }
});

export default RandomDishesScreen;
