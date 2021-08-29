import React from 'react'
import { Button, Text, View } from "react-native"
const HomeScreen = ({ navigation }) => {
    return(
        <View>
            <Text>Home Screen</Text>
            <Button title="Go to Details" onPress={() => {
                navigation.navigate('Description')
            }}/>
        </View>
    )
}

export default HomeScreen