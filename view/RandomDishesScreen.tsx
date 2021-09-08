import React, { useEffect } from 'react'
import { View } from 'react-native'
import { Button } from 'react-native-elements'
import DishDetails from '../components/DishDetails'
import RandomDishes from '../components/RandomDishes'
import RandomDay from '../components/RandomDishes'
import { useAppDispatch, useAppSelector } from '../hooks/reduxHooks'
import { IDish } from '../interfaces/IDish'
import { initialize } from '../redux/allDishesReducer'
import DishScreen from './DishScreen'

const RandomDishesScreen = ({ navigation }: any) => {
    const dispatch = useAppDispatch()
    const dishes:IDish[] = useAppSelector(state => state.allDishes)

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
            <RandomDishes count={2} />
        </View>
    )
}

export default RandomDishesScreen