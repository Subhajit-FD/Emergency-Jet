import React, { useEffect } from 'react';
import { View, StyleSheet, Image, BackHandler } from 'react-native';
import LottieView from 'lottie-react-native';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import { useRef } from 'react';

function SplashScreen() {
  const animation = useRef(null);
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Home'); // Navigate to Home screen after the specified duration
    }, 1000); // Adjust this duration as needed (in milliseconds)

    return () => clearTimeout(timer); // Cleanup timer on component unmount
  }, [navigation]);

  // Disable back navigation from SplashScreen
  useEffect(() => {
    const backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
      return true; // Prevent default back navigation
    });

    return () => backHandler.remove(); // Cleanup back handler on component unmount
  }, []);

  return (
    <View style={styles.container}>
      <Image style={{ width: 200, height: 200, position: "absolute", zIndex: 99 }} source={require('../../assets/My_Files/Images/logo.png')} />
      <LottieView style={{ width: 1000, height: 1000, position: "relative" }} source={require('../../assets/My_Files/Background/CirlJAMn37.json')} autoPlay ref={animation} />
      <StatusBar display='none' color='white' />
    </View>
  );
}

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
