import React, { useState, useEffect } from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import { Text, Input, Icon, Button } from "react-native-elements";
import DisplayAllDishes from "../components/DisplayAllDishes";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { filterDishes, initialize } from "../redux/allDishesReducer";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
type FindDishScreenProps = {
  navigation: BottomTabNavigationProp<any>;
};
const FindDishScreen = ({ navigation }: FindDishScreenProps) => {
  const [search, setSearch] = useState<string>("");

  const dispatch = useAppDispatch();
  const dishes = useAppSelector((state) => state.allDishes);
  const handleChangeText = (search: string) => {
    setSearch(search);
    dispatch(filterDishes(search));
  };
  useEffect(() => {
    dispatch(initialize());
  }, []);
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{ backgroundColor: "white" }}>
          {dishes ? (
            <View style={styles.layout}>
              <Text h1>Find foods !</Text>
              <View style={styles.input}>
                <Input
                  placeholder="Search dishes"
                  onChangeText={(text) => handleChangeText(text)}
                  value={search}
                  leftIcon={<Icon name="search" size={24} color="black" />}
                />
              </View>
              <DisplayAllDishes dishes={dishes} navigation={navigation} />
            </View>
          ) : (
            <Text>Loading...</Text>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = {
  layout: {
    paddingHorizontal: 13,
  },
  input: {
    // backgroundColor: "#ff8a02",
    borderRadius: 20,
  },
};

export default FindDishScreen;
