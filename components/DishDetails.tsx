import React from 'react'
import { IDish } from "../interfaces/IDish"
import { FlatList, Text, View } from 'react-native'

type DishDetailsProps = {
    dish: IDish;
}
const DishDetails = ({ dish }: DishDetailsProps) => {
    return (
        <View>
            <Text>{dish.name}</Text>
            <FlatList
                data={dish.ingredients}
                renderItem={({ item }) => <Text>{item.name}</Text>}
                keyExtractor={item => item.id_ingredients.toString()}
            />
        </View>
    )
}

export default DishDetails