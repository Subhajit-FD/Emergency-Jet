import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import database from "./../../assets/Database.json"; // Import JSON data
import Header from "./Header";
import CustomTabNavigator from "./CustomTabNavigator";

const ListItems = ({ route, navigation }) => {
  const { city, category } = route.params;
  const [data, setData] = useState([]);

  useEffect(() => {
    const selectedCity = database.cities.find((c) => c.name === city);
    if (
      selectedCity &&
      selectedCity.categories &&
      selectedCity.categories[category]
    ) {
      setData(selectedCity.categories[category]);
    } else {
      setData([]);
    }
  }, [city, category]);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate("Details", { item })}
    >
      <Text style={styles.itemName}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Header
        borderRadiusBl={100}
        borderRadiusBr={100}
        gradientHeight={200}
        imageWidth={180}
        imageHeight={180}
      />
      <View style={styles.container2}>
        <Text style={styles.heading}>
          List of {category} in {city}.
        </Text>
        <Text style={styles.para}>Click on names to see details.</Text>
      </View>

      <View style={styles.scrollView}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          ListEmptyComponent={
            <Text style={{ paddingLeft: 30, marginTop: 20 }}>
              No data found for {category} in {city}
            </Text>
          }
        />
      </View>
      <View style={{marginTop:80}}>
        <CustomTabNavigator />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  container2: {
    marginTop: 40,
    paddingLeft: 30,
  },
  heading: {
    fontSize: 30,
    fontWeight: "600",
  },
  scrollView: {
    height: 300, // Adjust the height as needed
    marginTop:20,
  },
  card: {
    backgroundColor: "#ccc",
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    width: 300,
    marginLeft: 30,
    marginTop: 20,
  },
  itemName: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default ListItems;
