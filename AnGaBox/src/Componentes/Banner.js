import React from "react";
import { TouchableOpacity, ImageBackground, StyleSheet, Text, View, Image } from "react-native";

const ratingIcon = require('../../src/Assets/Images/classification.jpg');
const img =
  "https://i.pinimg.com/564x/66/e9/b7/66e9b7196a589c361ecca8c6672deed9.jpg";

export default function Banner() {
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.imageBanner} source={{ uri: img }}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>ISLAND</Text>
          <Text style={styles.text}>OF THE</Text>
          <Text style={styles.text}>DOGS</Text>
          <View style={styles.classification}>
          <Text style={styles.text2}>Aventura</Text>
          <Image source={ratingIcon} style={styles.ratingIcon} />
          </View>
          
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Review</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 180,
    width: 370,
    borderRadius: 10,
    marginTop: 20,
    shadowRadius: 1.41,
    alignSelf: "center",
    overflow: "hidden",
  },
  imageBanner: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
  },
  textContainer: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: 10,
    justifyContent: "flex-start",
    flexDirection: "Column",
  },
  classification: {
    justifyContent: "flex-start",
    flexDirection: "row",
  },
  text: {
    color: "white",
    fontSize: 18,
    fontFamily: "Montserrat_700Bold",
  },
  text2: {
    color: "white",
    fontSize: 10,
    fontFamily: "Montserrat_700Bold",
    marginTop: 18
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop:20,
    backgroundColor: '#9400D3',
    borderRadius: 5
  },
  buttonText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Montserrat_700Bold' 
  },
  ratingIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    marginLeft: 5,
    marginTop: 15
  },
});