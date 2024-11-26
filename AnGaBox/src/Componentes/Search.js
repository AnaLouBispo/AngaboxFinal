import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Biblioteca de ícones

export default function Search() {
 
  return (
    <View style={styles.container}>
      <Ionicons name="search-outline" size={20} color="#ccc" style={styles.iconSearch} />
      <TextInput
        style={styles.input}
        placeholder="Search..."
        placeholderTextColor="#9400D3"
      />
      <Ionicons name="options" size={20} color="#ccc" style={styles.iconFilter} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 375,
    height: 55,
    marginLeft: 5, 
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0', 
    borderRadius: 20,           
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
  },
  iconSearch: {
    marginRight: 5,
    color: '#9400D3'
  },
  iconFilter: {
    marginLeft: 10,
    color: '#9400D3'
  },
});
