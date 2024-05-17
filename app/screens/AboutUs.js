import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Header from "../components/Header";
import { ScrollView } from "react-native-gesture-handler";
import CustomTabNavigator from "../components/CustomTabNavigator";

function AboutUs() {
  return (
    <View style={styles.container}>
      <Header
        borderRadiusBl={100}
        borderRadiusBr={100}
        gradientHeight={200}
        imageWidth={180}
        imageHeight={180}
      />
      <ScrollView style={styles.scroll}>
        <Text style={styles.heading}>About Us</Text>
        <Text>Hy We are team "EMERGENCY JET" we have came across this idea from the rapid growing emergency scenarios near us. We found that many
        people face problem to find details as "Quick as Possible" so we help them to reduce the time and get details easily.</Text>
        <Text style={styles.heading}>Members</Text>
        
        <Text style={styles.subHeading}> 1. Subhajit Choudhury - Codeing / Designing</Text>
        <Text style={styles.subHeading}> 2. Souvik Das - Documentation</Text>
        <Text style={styles.subHeading}> 3. Anish Singh - Assist / Documentation</Text>
        <Text style={styles.subHeading}> 4. Dibyendu Sarkar - Data Collection</Text>
        
        <Text style={styles.heading}>Technology used</Text>
        <Text style={styles.subHeading}> Front-End: React Native.</Text>
        <Text style={styles.subHeading}> Back-End: Google Map API.</Text>
      </ScrollView>
      <View style={{marginTop:110}}>
        <CustomTabNavigator />
      </View>
    </View>
  );
}

export default AboutUs;
const styles = StyleSheet.create({
  container: {},
  heading: {
    fontSize: 30,
    fontWeight: "500",
    marginTop:20
  },
  scroll:{
    paddingLeft:30,
    marginTop:20,
    height:400,
    width:350
  },
  subHeading:{
    fontSize:16,
    fontWeight:'400',
    marginTop:10
  }
});
