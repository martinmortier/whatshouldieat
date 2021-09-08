import React from 'react'
import { IDish } from "../interfaces/IDish"
import { FlatList, View } from 'react-native'
import { Text } from 'react-native-elements'
type DishDetailsProps = {
    dish: IDish;
}
const DishDetails = ({ dish }: DishDetailsProps) => {
    return (
        <View>
            <Text h4>{dish.id}</Text>
            <Text>{dish.name}</Text>
            <FlatList
                data={dish.ingredients}
                renderItem={({ item }) => <Text>{item.name}</Text>}
                keyExtractor={item => item.id_ingredients.toString()}
            />
            <Text>{dish.votes}</Text>
        </View>
    )
}

export default DishDetails