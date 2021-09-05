import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { getDish } from "../redux/dishReducer";
import DishDetails from "../components/DishDetails";
const DishScreen = () => {
  const dispatch = useAppDispatch();
  const dish = useAppSelector((state) => state.dish);
  useEffect(() => {
    dispatch(getDish(1));
  }, []);

  return (
    <View style={{paddingTop:'10%'}}>
      {dish ? (
        <>
          <DishDetails dish={dish} />
          <Text>Description screen !</Text>
        </>
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
};

export default DishScreen;
