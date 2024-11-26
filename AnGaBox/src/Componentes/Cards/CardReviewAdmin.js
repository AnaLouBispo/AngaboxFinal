import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ActivityIndicator, TouchableOpacity } from 'react-native';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import { Ionicons } from '@expo/vector-icons';
import axios from 'axios';

export default function CardReviewAdmin() {
  const [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_700Bold,
  });
  const [loading, setLoading] = useState(true);

  const route = useRoute();
  const { id } = route.params;
  const [reviews, setReviews] = useState([]);

  const listAllReviews = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/api/post/about/${id}`);
      setReviews(response.data.moviePosts);
      console.log("resposta da api: ", response.data);
    } catch (error) {
      console.log("erro:", error);
    }
  };

  useEffect(() => {
    listAllReviews();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`http://192.168.1.9:8080/api/post/${id}`)
      Alert.alert('Review deleted')
      console.log('resposta da api: ', response.data);
      listAllReviews()
    } catch (error) {
      console.log("Error", error);
      
    }
    
  };

  if (!fontsLoaded) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#9400D3" />
      </View>
    );
  }
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#9400D3',
    fontFamily: 'Montserrat_700Bold',
  },
  divider: {
    height: 1.5,
    backgroundColor: '#9400D3',
    marginVertical: 10,
  },
  reviewContainer: {
    backgroundColor: '#f9f9f9',
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    position: 'relative',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  reviewText: {
    fontSize: 16,
    color: '#333',
    fontFamily: 'Montserrat_400Regular',
  },
  deleteButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: '#9400D3',
    padding: 8,
    borderRadius: 20,
  },
  emptyText: {
    textAlign: 'center',
    color: '#666',
    fontSize: 16,
    fontFamily: 'Montserrat_400Regular',
  },
});
