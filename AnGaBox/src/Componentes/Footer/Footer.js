import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function Footer({id}) {
  const navigation = useNavigation();
  const navigateTo = (screen, params = {}) => {
    if (screen === 'User' && !id) {
      console.log('ID não definido para navegar à tela User.');
      console.log('exibir id', id);
     
      return;
    }
    navigation.navigate(screen, params);
  };
  return (
    <View style={styles.footer}>
      <TouchableOpacity
        style={styles.iconButton}
        onPress={() => navigateTo('Home', { id })}
        >
        <Ionicons name="home-outline" size={26} color="gray" />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.iconButton}
        onPress={() => navigateTo('Search', { id })}
      >
        <Ionicons name="search-outline" size={30} color="gray" />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.iconButton}
        onPress={() => navigateTo('User', { id })}
      >
        <Ionicons name="person-outline" size={26} color="gray" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'white',
    paddingVertical: 10,
    borderTopRightRadius: 22,
    borderTopLeftRadius: 22,
    width: '100%',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  iconButton: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});