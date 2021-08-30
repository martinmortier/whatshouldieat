import { IDish } from "../interfaces/IDish";

const initialState: IDish ={
        name: "",
        time: 0
}

const DishReducer = (state: IDish= initialState, action) => {
    console.log(action)
    switch(action.type) {
        case "GET_DISH":
            return {
                ...state,
                name: action.payload.name,
                time: action.payload.time
            }
        default:
            return state
    }
}

export const getDish = () => {
    return async (dispatch) => {
        const response = await fetch("http://localhost:3000/menu")
        const data = await response.json()
        console.log("data",data)
        dispatch({
            type: "GET_DISH",
            payload: {
                name: "Burger",
                time: 30
            }
        })
    }
}
export default DishReducer