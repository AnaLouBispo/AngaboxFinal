import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import HeaderImage from '../../Componentes/Header/HeaderImage';
import FooterAdmin from '../../Componentes/Footer/FooterAdmin';

export default function UserListPage() {
  
  // Estado inicial com alguns usuários fictícios
  const [users, setUsers] = useState([
    { id: '1', name: 'Gabriel' },
    { id: '2', name: 'Beatriz' },
    { id: '3', name: 'João' },
    { id: '4', name: 'Ana' },
  ]);

  const deleteUser = (id) => {
    Alert.alert(
      'Delete User',
      'Are you sure you want to delete this user?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Yes',
          onPress: () => setUsers(users.filter(user => user.id !== id)),
        },
      ],
      { cancelable: true }
    );
  };

  const renderItem = ({ item }) => (
    <View style={styles.userItem}>
      <Text style={styles.userName}>{item.name}</Text>
      <TouchableOpacity onPress={() => deleteUser(item.id)}>
        <Ionicons name="trash-bin" size={24} color="red" />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
        <HeaderImage/>
       <ScrollView style={styles.containerScroll}>
      <Text style={styles.title}>USER LIST</Text>
      <FlatList
        data={users}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        ListEmptyComponent={<Text style={styles.emptyMessage}>No users available</Text>}
      />
       </ScrollView>
       <FooterAdmin/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    backgroundColor: 'white',
  },
  containerScroll: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 30,
    fontFamily: 'Montserrat_400Regular',
    color: '#9400D3',
    marginBottom: 20,
    fontWeight: 'bold'
  },
  userItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    marginBottom: 5,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
  },
  userName: {
    fontSize: 18,
    color: '#333',
  },
  emptyMessage: {
    textAlign: 'center',
    fontSize: 16,
    color: 'gray',
  },
});
