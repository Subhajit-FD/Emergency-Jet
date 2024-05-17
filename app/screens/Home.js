import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Header from "../components/Header";
import DropdownMenu from "../components/DropdownMenu";
import CustomTabNavigator from "../components/CustomTabNavigator";

function Home() {
  return (
    <View style={styles.container}>
      <Header
        borderRadiusBl={120} // Customizable border radius for bottom corners
        gradientHeight={200} // Height of the linear gradient
        imageWidth={180} // Width of the image
        imageHeight={180} // Height of the image
      />
      <View style={styles.container2}>
        <Text style={styles.heading}>Select City</Text>
        <Text style={styles.para}>Select your city to see the details.</Text>
        <DropdownMenu />
      </View>
      <CustomTabNavigator/>
    </View>
  );
}

export default Home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container2: {
    flex: 1,
    paddingLeft: 30,
    paddingTop: 30,
  },
  heading: {
    fontSize: 30,
    fontWeight: "600",
  },
  para: {},
});
