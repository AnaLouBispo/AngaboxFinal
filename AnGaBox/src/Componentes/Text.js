import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";
export default function Texts({ title = "Recommended for You" , subTitle = "See All"}) {
  const [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_700Bold,
  });
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subTitle}>{subTitle}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    justifyContent: "flex-start",
    flexDirection: "row",
    alignItems: "center", 
  },
  title: {
    fontSize: 22,
    marginLeft: 25,
    fontFamily: "Montserrat_700Bold",
  },
  subTitle: {
    marginTop: 5,
    marginLeft: 50,
    fontSize: 15,
    color: 'purple',
    fontFamily: "Montserrat_400Regular",
  },
});
