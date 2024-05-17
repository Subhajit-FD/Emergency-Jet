import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Linking } from "react-native";
import MapView, { Marker } from 'react-native-maps';
import { useState } from "react";
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import CustomTabNavigator from "./CustomTabNavigator";

const Details = ({ route }) => {
  const navigation = useNavigation(); // Get navigation object
  const { item } = route.params;
  const [mapRegion, setmapRegion] = useState({
    latitude: item.latitude,
    longitude: item.longitude,
    latitudeDelta: 0.005,
    longitudeDelta: 0.005, 
  });

  const phoneNumber = item.phoneNumber;

  const handlePhonePress = () => {
    const phoneUrl = `tel:${phoneNumber}`;
    Linking.openURL(phoneUrl);
  };

  return (
    <View style={styles.container}>
      <View style={styles.map}>
        <TouchableOpacity style={styles.backbutton} onPress={() => navigation.goBack()}>
          <MaterialIcons name="chevron-left" size={34} color="white" />
        </TouchableOpacity>
        <MapView style={{width:'100%',height:200}} showsUserLocation={true} region={mapRegion} >
          <Marker
            coordinate={{
              latitude: mapRegion.latitude,
              longitude: mapRegion.longitude,
            }}
            title={item.name}
          />
        </MapView>
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.label}>Name:</Text>
        <Text style={styles.value}>{item.name}</Text>

        <Text style={styles.label}>Address:</Text>
        <Text style={styles.value}>{item.address}</Text>

        <Text style={styles.label}>Phone Number:</Text>
        <TouchableOpacity onPress={handlePhonePress}>
          <Text style={styles.value}>
            {item.phoneNumber}
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{marginTop:200}}>
        <CustomTabNavigator />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  detailsContainer: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    padding: 20,
    marginTop:50,
    width:300,
    marginLeft: 45
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  value: {
    fontSize: 16,
    marginBottom: 15,
  },
  map:{
    overflow:'hidden',
    borderBottomLeftRadius:40,
    borderBottomRightRadius:40,
    position:'relative',
  },
  backbutton: {
    zIndex: 99,
    width: 40,
    height:40,
    backgroundColor:'#e10101',
    position:'absolute',
    borderRadius: 50,
    marginLeft:10,
    marginTop:10,
    alignItems:'center',
    justifyContent:'center',
  }
});

export default Details;
