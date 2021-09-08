import React, { useEffect } from 'react'
import { View } from 'react-native'
import { Button } from 'react-native-elements'
import { useAppDispatch, useAppSelector } from '../hooks/reduxHooks'
import { IDish } from '../interfaces/IDish'
import { initialize } from '../redux/allDishesReducer'

const RandomDishesScreen = ({ navigation }: any) => {
    const dispatch = useAppDispatch()
    const dishes = useAppSelector(state => state.allDishes)

    const getRandomDish = (dishes:IDish[]): void =>{
        const random = Math.floor(Math.random() * (dishes.length - 1+1))+1
        navigation.navigate('DishScreen',{id: random})
    }

    useEffect(() => {
        dispatch(initialize())
    }, [])
    return (
        <View style={{paddingTop:'10%'}}>
            <Button title="I want a random dish !" onPress={() => getRandomDish(dishes)}></Button>
        </View>
    )
}

export default RandomDishesScreen