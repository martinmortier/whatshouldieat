import React, { useEffect } from 'react'
import { View } from 'react-native'
import { Button } from 'react-native-elements'
import RandomDishes from '../components/RandomDishes'
import { useAppDispatch, useAppSelector } from '../hooks/reduxHooks'
import { IDish } from '../interfaces/IDish'
import { initialize } from '../redux/allDishesReducer'
import { getRandomDishes } from '../services/dishService'
const RandomDishesScreen = ({ navigation }: any) => {
    const dispatch = useAppDispatch()
    const dishes:IDish[] = useAppSelector(state => state.allDishes)

    useEffect(() => {
        dispatch(initialize())
    }, [])

    return (
        <View style={{paddingTop:'10%'}}>
            <Button title="I want a random dish !" onPress={() => getRandomDishes(dishes,1)}></Button>
            <RandomDishes count={2} />
        </View>
    )
}

export default RandomDishesScreen