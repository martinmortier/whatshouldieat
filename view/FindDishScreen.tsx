import React, { useState, useEffect} from "react";
import { View } from "react-native";
import { Text, Input, Icon } from "react-native-elements";
import DisplayAllDishes from "../components/DisplayAllDishes";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { filterDishes, initialize } from "../redux/AllDishesReducer";
import { IDish } from "../interfaces/IDish";
import { Button } from "react-native-elements/dist/buttons/Button";
const FindDishScreen = () => {
  const [search, setSearch] = useState<string>("");

  const dispatch = useAppDispatch()
  const dishes = useAppSelector(state => state.allDishes)
  const handleChangeText = (search: string) => {
    setSearch(search);
    dispatch(filterDishes(search))
  }
  useEffect(() => {
    dispatch(initialize())
  }, [])
  return (
    <View style={{ backgroundColor: "orange", height: "100%" }}>
      <View style={{paddingTop:'10%'}}>
        <Text h1>Find foods !</Text>
        <Input
          placeholder="Search dishes"
          onChangeText={(text) => handleChangeText(text)}
          value={search}
          leftIcon={<Icon name="search" size={24} color="black" />}
        />
        <DisplayAllDishes dishes={dishes} />
      </View>
    </View>
  );
};

export default FindDishScreen;
