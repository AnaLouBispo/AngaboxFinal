import React, { useEffect, useState } from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import axios from 'axios'; 
import { useNavigation } from '@react-navigation/native'; 

export default function CardMovieAdmin() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true); 

  const navigation = useNavigation();

  // Função para buscar os filmes da API
  const listMovies = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/movie');
      setMovies(response.data.movies); 
      setLoading(false);
    } catch (error) {
      console.error(error); 
      setLoading(false); 
    }
  };

  // useEffect: executa listMovies quando o componente é montado
  useEffect(() => {
    listMovies();
  }, []);

  // Função para deletar filmes (placeholder)
  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`http://192.168.1.9:8080/api/movie/${id}`);
      Alert.alert('Movie deleted');
      console.log('resposta da api: ', response.data);
      listMovies();
    } catch (error) {
      console.log("Error", error);
    }
  };

  return (
    <View>
      {/* Exibe um indicador de carregamento enquanto os filmes não estão disponíveis */}
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        movies.map((movie) => (
          <View key={movie._id} style={styles.container}>
            {/* Área clicável para abrir detalhes do filme */}
            <TouchableOpacity
              onPress={() => navigation.navigate('ReviewAdm', { id: movie._id })}
            >
              {/* Imagem do filme como plano de fundo */}
              <ImageBackground
                style={styles.imageBanner}
                source={{ uri: movie.img }} 
                imageStyle={styles.imageStyle} 
              >
                {/* Contêiner para o texto sobreposto */}
                <View style={styles.textContainer}>
                  <Text style={styles.title}>{movie.title}</Text> 
                  <Text style={styles.subTitle}>{movie.gender}</Text> 
                </View>
              </ImageBackground>
            </TouchableOpacity>

            {/* Botões de ação (editar e deletar) */}
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button} onPress={handleEdit}>
                <Ionicons name="pencil-outline" size={16} color="#FFF" />
                <Text style={styles.buttonText}>Edit</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, styles.deleteButton]}
                onPress={handleDelete}
              >
                <Ionicons name="trash-outline" size={16} color="#FFF" /> 
                <Text style={styles.buttonText}>Delete</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))
      )}
    </View>
  );
}

// Estilização do componente
const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: 10,
  },
  container: {
    width: 150,
    borderRadius: 10,
    marginTop: 20,
    marginHorizontal: 10,
    overflow: 'hidden',
  },
  imageBanner: {
    width: '100%',
    height: 200,
    justifyContent: 'flex-end',
  },
  imageStyle: {
    borderRadius: 10,
  },
  textContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    padding: 5,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'white',
  },
  subTitle: {
    fontSize: 12,
    color: 'lightgray',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 5,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#9400D3',
    padding: 5,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  deleteButton: {
    backgroundColor: '#FF0000',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 12,
    marginLeft: 5,
  },
});
