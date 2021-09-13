import React from "react";
import { View } from "react-native";
import { Text, Card, Button, colors } from "react-native-elements";
import { IDish } from "../interfaces/IDish";
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs'

type DisplayAllDishesProps = {
  dishes: IDish[];
  navigation: BottomTabNavigationProp<any>; 
}
const DisplayAllDishes = ({dishes, navigation}:DisplayAllDishesProps) => {
  return (
    <View style={styles.main}>
      {dishes?.map(
        (
          dish,
          index // () Return - {} don't
        ) => (
          <Card key={index} containerStyle={{flexBasis:'48%'}}>
            <Card.Title onPress={() => navigation.navigate('DishScreen', { id : dish.id}) }>{dish.name}</Card.Title>
            {dish.ingredients.map((ingredient, index) => (
              <Text key={index}>{ingredient.name}</Text>
            ))}
            <Card.Divider />
            <Text>{dish.time}</Text>
            <Text>{dish.votes}</Text>
            {/* //TODO: Modify the style */}
            <Button buttonStyle={{}}>Infos</Button>
          </Card>
        )
      )}
    </View>
  );
};

const styles = {
  main: {
    flex:1,
    flexDirection:'row',
    flexWrap:'wrap',
    textAlign:'center'
  },
  items: {
    flexBasics:'48%'
  }
}
export default DisplayAllDishes;
