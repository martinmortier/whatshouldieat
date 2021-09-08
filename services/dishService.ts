import axios from "axios";
import API_URL from "../config/apiURL";
import { IDish } from "../interfaces/IDish";

export const getDishById = async (id: number): Promise<IDish> => {
  const response = await axios.get(`${API_URL}/dish/${id}`);
  return response.data;
};

export const getAllDishes = async (): Promise<IDish[]> => {
  const response = await axios.get(`${API_URL}/dish`);
  return response.data;
};

export const getRandomDishes = (data: IDish[], count: number): IDish[] => {
  const dishesRandom = Array.from(
    { length: count },
    () => data[Math.floor(Math.random() * data.length)]
  );
  return dishesRandom;
};
