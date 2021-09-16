import React from "react";
import { View, StyleSheet } from "react-native";
import { Text, Avatar, Image } from "react-native-elements";
const HomeScreen = () => {
  const avatarURL =
    "https://icon-library.com/images/avatar-icon/avatar-icon-14.jpg";
  return (
    <View style={styles.layout}>
      <View style={styles.header}>
        <Text style={{ flexGrow: 1 }}>Hello</Text>
        <Avatar
          containerStyle={{ marginRight: "10%" }}
          rounded
          size="large"
          source={{ uri: avatarURL }}
        />
      </View>
      <View style={styles.main}>
        <Image
          source={{
            uri: "https://goodmanfielder.com/assets/Uploads/nz-home-food-small.png",
          }}
          style={styles.mainImage}
        />
        <Text h3>Title</Text>
        <Text style={{textAlign:'center'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur assumenda tenetur ea pariatur commodi, nemo saepe alias. Omnis obcaecati necessitatibus modi molestiae accusamus exercitationem dolore, natus iste atque eum facere.</Text>
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
    backgroundColor: "yellow",
    height: "100%",
  },
  header: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    backgroundColor: "blue",
  },
  headerText: {
    //TODO: Terminate the styling
  },
  main: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "red",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  mainImage: {
    width: 200,
    height: 200,
  },
});

export default HomeScreen;
