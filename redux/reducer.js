import { combineReducers } from 'redux'
import allDishesReducer from './AllDishesReducer';
import DishReducer from './dishReducer';
const rootReducer = combineReducers({
    dish: DishReducer,
    allDishes: allDishesReducer
});

export default rootReducer