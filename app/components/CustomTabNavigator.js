import React from "react";
import { View, StyleSheet, TouchableOpacity, Text, Alert } from "react-native";
import { Octicons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';

const CustomTabNavigator = () => {
  const navigation = useNavigation();

  const handleHomePress = () => {
    navigation.navigate('Home');
  };
  const handleAboutUsPress = () => {
    navigation.navigate('AboutUs');
  };

  const handleSOSPress = () => {
    Alert.alert(
      "Emergency Jet",
      "Emergency support is coming fast as jet, don't panic!",
      [
        {
          text: "OK",
          onPress: () => console.log("OK Pressed"),
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.rectangle}>
        <TouchableOpacity onPress={handleHomePress}>
          <Octicons name="home" size={30} color="white" />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleAboutUsPress}>
          <Octicons name="note" size={30} color="white" />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.circle} onPress={handleSOSPress}>
        <View>
          <Text style={{ color: "white", fontSize: 30, fontWeight: "500" }}>
            SOS
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CustomTabNavigator;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 40,
  },
  rectangle: {
    width: 300,
    height: 50,
    backgroundColor: "#e10101",
    borderRadius: 20,
    justifyContent: "space-between",
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    paddingLeft: 20,
    paddingRight: 20,
  },
  circle: {
    width: 100,
    height: 100,
    backgroundColor: "red",
    borderRadius: 50,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 10,
    borderColor: "white",
  },
});
