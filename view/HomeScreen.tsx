import React from "react";
import { View, StyleSheet } from "react-native";
import { Text, Avatar, Image } from "react-native-elements";
const HomeScreen = () => {
  const avatarURL =
    "https://icon-library.com/images/avatar-icon/avatar-icon-14.jpg";
    //TODO: Refactor in components
  return (
    <View style={styles.layout}>
      <View style={styles.header}>
        <Text style={{ flexGrow: 1, color:'white', textAlign:'center' }} h4>Hello John Doe</Text>
        <Avatar
          containerStyle={{ marginRight: "10%" }}
          rounded
          size="large"
          source={{ uri: avatarURL }}
        />
      </View>
      <View style={{backgroundColor:'white'}}>
        <Image
          source={require("../assets/wave.png")}
          style={{ height: 50, width: "100%" }}
        />
      </View>
      <View style={styles.main}>
        <Image
          source={{
            uri: "https://goodmanfielder.com/assets/Uploads/nz-home-food-small.png",
          }}
          style={styles.mainImage}
        />
        <Text h4>You don't know what to eat ?</Text>
        <Text style={{ textAlign: "center" }}>
         If you don't know what to eat today or for the week, don't worry. Just use the random feature !
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  layout: {
    display: "flex",
    paddingTop: "10%",
    flexWrap: "wrap",
    flexDirection: "column",
    height: "100%",
    backgroundColor: "#ff8a02",
  },
  header: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    backgroundColor: "#ff8a02",
  },
  headerText: {
    //TODO: Terminate the styling
  },
  main: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  mainImage: {
    width: 200,
    height: 200,
  },
});

export default HomeScreen;
