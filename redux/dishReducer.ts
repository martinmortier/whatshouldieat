import { IDish } from "../interfaces/IDish";
import { getDishById } from "../services/dishService";

const initialState: IDish = {
        id_dish: 0,
        name: "",
        ingredients: [{
            id_ingredient: 0,
            name: ""
        }],
        time: 0
}

const DishReducer = (state: IDish= initialState, action) => {
    console.log(action)
    switch(action.type) {
        case "GET_DISH":
            return {
                ...action.payload
            }
        default:
            return state
    }
}

export const getDish = (id: number) => {
    return async (dispatch) => {
        const dish = await getDishById(id)
        console.log("dish",dish)
        dispatch({
            type: "GET_DISH",
            payload: {
                id_dish: dish.id_dish,
                name: dish.name,
                ingredients: dish.ingredients,
                time: dish.time
            }
        })
    }
}
export default DishReducer