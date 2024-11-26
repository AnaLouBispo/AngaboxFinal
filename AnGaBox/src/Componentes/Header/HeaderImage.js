import React from 'react';
import { Image, TextInput } from 'react-native';
import { StyleSheet, View } from 'react-native';


export default function HeaderImage() {
 
  return (
    <View>
     <Image
        style={styles.imageHeader}
        source={require('../../Assets/Images/header.png')}
      />
    </View>
  );
}

const styles = StyleSheet.create({

  imageHeader: {
    width: '100%',
    height: 200,
    resizeMode: 'cover', 
  },
});
