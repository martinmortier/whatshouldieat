import React , { useEffect }from 'react'
import { View, Text } from "react-native"
import { useAppDispatch, useAppSelector } from '../hooks/reduxHooks'
import { getDish } from '../redux/dishReducer'
import DishDetails from '../components/dishDetails'
const DishScreen = () => {
    const dispatch = useAppDispatch()
    const dish = useAppSelector(state => state.dish)
    useEffect(() => {
        dispatch(getDish(1))
    },[])

    return(
        <View>
            <DishDetails dish={dish} />
            <Text>Description screen !</Text>
        </View>
    )
}

export default DishScreen