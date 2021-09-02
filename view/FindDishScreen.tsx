import React, { useState } from "react";
import { View } from "react-native";
import { Text, Input, Icon } from "react-native-elements";
const FindDishScreen = () => {
  const [search, setSearch] = useState("");

  return (
    <View style={{ backgroundColor: "orange", height: "100%" }}>
      <View style={{paddingTop:'10%'}}>
        <Text h1>Find foods !</Text>
        <Input
          placeholder="Search dishs"
          onChangeText={(text) => setSearch(text)}
          value={search}
          leftIcon={<Icon name="search" size={24} color="black" />}
        />
      </View>
    </View>
  );
};

export default FindDishScreen;
