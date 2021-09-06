import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useState, useEffect} from "react";
import { View } from "react-native";
import { Text, Input, Icon } from "react-native-elements";
import DisplayAllDishes from "../components/DisplayAllDishes";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { filterDishes, initialize } from "../redux/allDishesReducer";

type FindDishScreenProps = {
  navigation: any
}
const FindDishScreen = ({ navigation }: FindDishScreenProps) => {
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
    <View>
      <View style={{paddingTop:'10%'}}>
        <Text h1>Find foods !</Text>
        <Input
          placeholder="Search dishes"
          onChangeText={(text) => handleChangeText(text)}
          value={search}
          leftIcon={<Icon name="search" size={24} color="black" />}
        />
        <DisplayAllDishes dishes={dishes} navigation={navigation}/>
      </View>
    </View>
  );
};

export default FindDishScreen;
