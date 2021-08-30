import { combineReducers } from 'redux'
import DishReducer from './dishReducer';
const rootReducer = combineReducers({
    dish: DishReducer,
});

export default rootReducer