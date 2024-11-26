import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ActivityIndicator, TouchableOpacity, Alert } from 'react-native';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import { Ionicons } from '@expo/vector-icons';
import axios from 'axios';
import { useRoute } from '@react-navigation/native';


export default function CardReview() {
  const [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_700Bold,
  });

  // Obtém parâmetros da rota de navegação
  const route = useRoute();
  const { id } = route.params;

  // Estado para armazenar as resenhas
  const [reviews, setReviews] = useState([]);

  // Função para listar todas as resenhas do filme a partir de uma API
  const listAllReviews = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/api/post/about/${id}`); 
      setReviews(response.data.moviePosts); 
      console.log("resposta da api: ", response.data); 
    } catch (error) {
      console.log("erro:", error);
    }
  };

  // Executa listAllReviews assim que o componente é montado
  useEffect(() => {
    listAllReviews();
  }, []);

  // Função para deletar uma resenha pelo ID
  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`http://10.92.198.21:8080/api/post/${id}`); 
      Alert.alert('Review deleted'); 
      console.log('resposta da api: ', response.data); 
      listAllReviews(); 
    } catch (error) {
      console.log("Error", error); 
    }
  };

  // Renderiza um indicador de carregamento enquanto as fontes não são carregadas
  if (!fontsLoaded) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#9400D3" /> 
      </View>
    );
  }

  // Renderiza a interface do componente
  return (
    <View style={styles.container}>
      {reviews.map((review) => (
        <View key={review._id} style={styles.reviewContainer}>
          <View style={styles.divider} /> 
          <Text style={styles.reviewText}>{review.content}</Text> 
          <TouchableOpacity
            style={styles.deleteButton}
            onPress={() => handleDelete(review._id)} 
          >
            <Ionicons name="trash-outline" size={24} color="white" />
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
}

// Estilos do componente
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 10,
  },
  reviewContainer: {
    position: 'relative',
    marginBottom: 20,
  },
  userNameText: {
    fontSize: 18, 
    fontWeight: "bold", 
    color: "#9400D3", 
    marginBottom: 10, 
    fontFamily: "Montserrat_700Bold", 
  },
  divider: {
    marginLeft: 10,
    height: 1.5,
    width: '90%',
    backgroundColor: '#9400D3',
    marginVertical: 10,
  },
  reviewText: {
    marginLeft: 10,
    fontSize: 16,
    color: '#333',
    fontFamily: 'Montserrat_400Regular',
    marginBottom: 10,
  },
  deleteButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: '#9400D3',
    padding: 8,
    borderRadius: 20,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});
