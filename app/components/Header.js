import { View, Text, StyleSheet, Image, Dimensions } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';

const Header = ({ borderRadiusBl, borderRadiusBr, gradientHeight, imageWidth, imageHeight }) => {
  const { width } = Dimensions.get('window');

  return (
    <LinearGradient
      colors={['#970F0F', '#E10010']}
      style={[
        styles.linearGradient,
        { 
          height: gradientHeight, 
          width: width, 
          borderBottomLeftRadius: borderRadiusBl,
          borderBottomRightRadius: borderRadiusBr,
        }
      ]}
    >
      <Image 
        source={require('../../assets/My_Files/Images/logo.png')} 
        style={[styles.imgstyle, { width: imageWidth, height: imageHeight }]}
      />
    </LinearGradient>
  );
};

export default Header;

const styles = StyleSheet.create({
  linearGradient:{
    alignItems: 'center',
    justifyContent: 'center'
  },
  imgstyle:{
    resizeMode: 'contain',
  }
});
