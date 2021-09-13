import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { getDish } from "../redux/dishReducer";
import DishDetails from "../components/DishDetails";

type DishScreenProps = {
  route: { params: { id: number } };
}
const DishScreen = ({ route }: DishScreenProps) => {
  if(!route.params) throw new Error("Route params undefined")
  const { id } = route.params;

  const dispatch = useAppDispatch();
  const dish = useAppSelector((state) => state.dish);

  useEffect(() => {
    dispatch(getDish(id));
  }, [id]);

  return (
    <View style={{paddingTop:'10%'}}>
      {dish ? (
        <>
          <DishDetails dish={dish} />
        </>
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
};

export default DishScreen;
