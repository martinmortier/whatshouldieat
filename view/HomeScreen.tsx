import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Avatar } from "react-native-elements";
const HomeScreen = () => {
    const avatarURL = 'https://icon-library.com/images/avatar-icon/avatar-icon-14.jpg'
  return (
    <View style={styles.main}>
      <View style={styles.header}>
        <Text style={{ flexGrow: 1 }}>Hello</Text>
        <Avatar containerStyle={{marginRight:'10%'}} rounded size="large" source={{uri: avatarURL}} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    display: "flex",
    paddingTop: "10%",
    flexWrap: "wrap",
    flexDirection: "column",
    backgroundColor:"yellow"
  },
  header: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    // backgroundColor:'blue'
  },
  headerText: {
      //TODO: Terminate the styling
  }
});

export default HomeScreen;
