import React from 'react'
import { Button, Text, View } from "react-native"
const HomeScreen = ({ navigation }) => {
    return(
        <View style={{padding:'10%'}}>
            <Text>Home Screen</Text>
            <Button title="Go to Details" onPress={() => {
                navigation.navigate('Dish')
            }}/>
        </View>
    )
}

export default HomeScreen