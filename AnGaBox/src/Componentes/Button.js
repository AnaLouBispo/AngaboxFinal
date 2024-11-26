import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';

export default function MyButton(props) {
    const [fontsLoaded] = useFonts({
        Montserrat_400Regular,
        Montserrat_700Bold,
      });
  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={styles.button}
        onPress={props.onPress}
      >
        <Text style={styles.buttonText}>{props.title}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#9400D3',
    borderRadius: 5
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Montserrat_700Bold' 
  },
  container: {
    marginTop: 20,
    width: 330,
  }
});
