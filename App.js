import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './app/screens/SplashScreen';
import Home from './app/screens/Home';
import Dashboard from './app/components/Dashboard'; // Import Dashboard screen
import ListItems from './app/components/ListItems';
import Details from './app/components/Details';
import AboutUs from './app/screens/AboutUs';

const Stack = createStackNavigator();

function App() {
  const [selectedCity, setSelectedCity] = useState(null); // State to hold selected city

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Splash">
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen 
          name="Dashboard" 
          component={Dashboard} 
          initialParams={{ selectedCity }} // Pass selectedCity as initial param
        />
        <Stack.Screen name="ListItems" component={ListItems} />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="AboutUs" component={AboutUs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
