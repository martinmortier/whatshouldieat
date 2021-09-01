import { IDish } from "../interfaces/IDish";
import { getDishById } from "../services/dishService";

const initialState: IDish = {
        id: 0,
        image: "",
        name: "",
        ingredients: [{
            id_ingredients: 0,
            name: ""
        }],
        time: 0,
        votes: 0
}

const DishReducer = (state: IDish= initialState, action: any) => {
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
    return async (dispatch: any) => {
        const dish = await getDishById(id)
        dispatch({
            type: "GET_DISH",
            payload: {
                id: dish.id,
                image: dish.image,
                name: dish.name,
                ingredients: dish.ingredients,
                time: dish.time,
                votes: dish.votes
            }
        })
    }
}
export default DishReducer