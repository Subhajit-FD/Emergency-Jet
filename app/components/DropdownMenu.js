import React, { useRef, useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, FlatList, TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import database from '../../assets/Database.json';

const DropdownMenu = () => {
  const [selectedCity, setSelectedCity] = useState('Select City');
  const [isClicked, setIsClicked] = useState(false);
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const searchRef = useRef();
  const navigation = useNavigation(); 

  useEffect(() => {
    try {
      // Extract city names from the imported database JSON
      const cityNames = database.cities.map(city => city.name);
      setData(cityNames);
      setFilteredData(cityNames); // Set filtered data initially to all city names
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }, []);

  const onSearch = (txt) => {
    if (txt !== '') {
      let tempData = data.filter((item) => {
        return item.toLowerCase().indexOf(txt.toLowerCase()) > -1;
      });
      setFilteredData(tempData);
    } else {
      setFilteredData(data);
    }
  };

  const handleNext = () => {
    if (selectedCity !== 'Select City') {
      // Check if a city is selected
      navigation.navigate('Dashboard', { selectedCity });
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.dropdownSelector}
        onPress={() => {
          setIsClicked(!isClicked);
        }}>
        <Text>{selectedCity}</Text>
        <Entypo name={isClicked ? "chevron-up" : "chevron-down"} size={24} color="black" />
      </TouchableOpacity>
      {isClicked && (
        <View style={styles.dropdownArea}>
          <TextInput
            ref={searchRef}
            placeholder="Search city"
            style={styles.searchInput}
            onChangeText={(txt) => {
              onSearch(txt);
            }}
          />
          <FlatList
            data={filteredData}
            renderItem={({ item, index }) => (
              <TouchableOpacity
                style={styles.cityItem}
                onPress={() => {
                  setSelectedCity(item);
                  onSearch('');
                  setIsClicked(false);
                  searchRef.current.clear();
                }}>
                <Text>{item}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      )}
      <TouchableOpacity style={styles.button} onPress={handleNext}>
        <Text style={styles.buttonText}>NEXT</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DropdownMenu;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  dropdownSelector: {
    width: '90%',
    height: 50,
    borderRadius: 10,
    borderWidth: 0.5,
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 15,
    paddingRight: 15,
  },
  dropdownArea: {
    position: 'absolute',
    top: 70, 
    width: '90%',
    height: 300,
    borderRadius: 10,
    elevation: 5,
    backgroundColor: '#fff',
    zIndex: 1,
  },
  searchInput: {
    width: '90%',
    height: 50,
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: '#8e8e8e',
    alignSelf: 'center',
    marginTop: 20,
    paddingLeft: 15,
  },
  cityItem: {
    width: '85%',
    height: 50,
    borderBottomWidth: 0.2,
    borderBottomColor: '#8e8e8e',
    alignSelf: 'center',
    justifyContent: 'center',
    color: '#000',
  },
  button: {
    backgroundColor: '#e10010',
    padding: 15,
    width: '90%',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
  },
});
