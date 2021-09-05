import { getAllDishes } from "../services/dishService";
import { IDish } from "../interfaces/IDish";
const allDishesReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_ALL_DISHES":
      return action.payload;
    case 'FILTER_DISHES_BY_NAME':
      return action.payload
    default:
      return state;
  }
};

export const initialize = () => {
  return async (dispatch) => {
    const dishes = await getAllDishes();
    dispatch({
      type: "SET_ALL_DISHES",
      payload: dishes,
    });
  };
};

export const filterDishes = (search: string) => {
  return (dispatch, getState) => {
    if(!search){
      dispatch(initialize())
    }
    dispatch({
      type:"FILTER_DISHES_BY_NAME",
      payload: getState().allDishes.filter((dish:IDish) => dish.name.toLowerCase().includes(search.toLowerCase()))
    })
  }
}
export default allDishesReducer;
