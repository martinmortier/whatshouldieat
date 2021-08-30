import React , { useEffect }from 'react'
import { View, Text } from "react-native"
import { useAppDispatch, useAppSelector } from '../hooks/reduxHooks'
import { getDish } from '../redux/dishReducer'
const DishScreen = () => {
    const dispatch = useAppDispatch()
    const dish = useAppSelector(state => state.dish)
    useEffect(() => {
        dispatch(getDish())
    },[])

    return(
        <View>
            <Text>Description screen !</Text>
        </View>
    )
}

export default DishScreen