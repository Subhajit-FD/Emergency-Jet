import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import Header from "./Header";
import CustomTabNavigator from "./CustomTabNavigator";

const CategoryCard = ({
  category,
  icon,
  isSelected,
  onSelect,
  selectedCity,
}) => {
  return (
    <TouchableOpacity
      onPress={onSelect}
      style={[styles.card, isSelected && styles.selected]}
    >
      <MaterialIcons
        name={icon}
        size={24}
        color={isSelected ? "white" : "black"}
      />
      <Text
        style={[styles.cardText, { color: isSelected ? "white" : "black" }]}
      >
        {category} - {selectedCity}
      </Text>
    </TouchableOpacity>
  );
};

const Dashboard = ({ route, navigation }) => {
  const { selectedCity } = route.params; // Extract selectedCity from route params

  const [selectedCategory, setSelectedCategory] = useState(null);
  const categories = [
    { name: "Police Stations", icon: "local-police" },
    { name: "Hospitals", icon: "local-hospital" },
    { name: "Other Support", icon: "support" },
  ];

  const handleCategorySelect = (category) => {
    setSelectedCategory(category.name);
  };

  const handleNext = () => {
    console.log("Selected Category:", selectedCategory);
    console.log("Selected City:", selectedCity);

    if (selectedCategory && selectedCity) {
      navigation.navigate("ListItems", {
        city: selectedCity,
        category: selectedCategory,
      });
    } else {
      console.warn("Please select a category and city before proceeding.");
      // Show an alert or message to select a category and city before proceeding
    }
  };

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
        <Text style={styles.heading}>Category</Text>
        <Text style={styles.para}>
          Select your category for the details from {selectedCity}.
        </Text>
      </View>
      <View style={styles.container3}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {categories.map((category, index) => (
            <CategoryCard
              key={index}
              category={category.name}
              icon={category.icon}
              isSelected={selectedCategory === category.name}
              onSelect={() => handleCategorySelect(category)}
              selectedCity={selectedCity}
            />
          ))}
        </ScrollView>
      </View>

      <TouchableOpacity onPress={handleNext} style={styles.nextButton}>
        <Text style={styles.nextButtonText}>NEXT</Text>
      </TouchableOpacity>
      <View style={{marginTop:230}}>
        <CustomTabNavigator />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    padding: 20,
    width: 240,
    height: 100,
    marginHorizontal: 5,
    borderRadius: 20,
    backgroundColor: "#ccc",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  selected: {
    backgroundColor: "#E10010",
  },
  cardText: {
    fontSize: 16,
    marginLeft: 10,
  },
  nextButton: {
    backgroundColor: "#e10010",
    padding: 15,
    width: "90%",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginLeft: 15,
  },
  nextButtonText: {
    color: "white",
    fontSize: 16,
  },
  heading: {
    fontSize: 30,
    fontWeight: "600",
  },
  container2: {
    paddingLeft: 30,
    marginTop: 30,
  },
  container3: {
    paddingLeft: 20,
    marginTop: 20,
  },
});

export default Dashboard;
