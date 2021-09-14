import React from "react";
import { View } from "react-native";
import { Text, Card, Button } from "react-native-elements";
import { IDish } from "../interfaces/IDish";
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs'

type DisplayAllDishesProps = {
  dishes: IDish[];
  navigation: BottomTabNavigationProp<any>;
}
const DisplayAllDishes = ({dishes, navigation}:DisplayAllDishesProps) => {
  const backgroundItemsColors = ["#fdf7d0","#ebefd9","#f4d7d7"]
  return (
    <View style={styles.main}>
      {dishes?.map(
        (
          dish,
          index // () Return - {} don't
        ) => (
          <Card key={index} containerStyle={{...styles.items, backgroundColor: backgroundItemsColors[index]}}>
            <Card.Title>{dish.name}</Card.Title>
            {dish.ingredients.map((ingredient, index) => (
              <Text key={index}>{ingredient.name}</Text>
            ))}
            <Card.Divider />
            <Text>{dish.time}</Text>
            <Text>{dish.votes}</Text>
            <Button onPress={() => navigation.navigate('DishScreen', { id : dish.id})} title="Infos" buttonStyle={styles.infosButton} />
          </Card>
        )
      )}
    </View>
  );
};

const styles = {
  main: {
    display:'flex',
    flexDirection:'row',
    flexWrap:'wrap',
  },
  items: {
    flexBasis:'40%',
  },
  infosButton: {
    backgroundColor:'#ff8a02',
  }
}
export default DisplayAllDishes;
