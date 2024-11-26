import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
  Text,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";

export default function CardVideo() {
  const navigation = useNavigation();
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  // Função que faz a requisição à API para buscar os filmes
  const listMovies = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/movie");
      setMovies(response.data.movies);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  // useEffect para executar a função de busca dos filmes quando o componente é montado.
  useEffect(() => {
    listMovies();
  }, []);

  return (
    <View style={styles.container}>
      {/* Exibe o indicador de carregamento enquanto os dados não são carregados */}
      {loading ? (
        <ActivityIndicator size="large" color="#9400D3" />
      ) : (
        movies.map((movie) => (
          <TouchableOpacity
            key={movie._id}
            style={styles.card}
            onPress={() => navigation.navigate("Review", { id: movie._id })}
          >
            {/* Imagem do filme como fundo do card */}
            <ImageBackground
              style={styles.imageBanner}
              source={{ uri: movie.img }}
              imageStyle={{ borderRadius: 10 }}
            />
            {/* Container para informações do filme */}
            <View style={styles.infoContainer}>
              <Text style={styles.title}>{movie.title}</Text>
              <Text style={styles.subTitle}>{movie.gender}</Text>
            </View>

            {/* Botão com ícone para editar/revisar o filme */}
            <TouchableOpacity
              style={styles.iconButton}
              onPress={() => navigation.navigate("Review", { id: movie._id })}
            >
              <Ionicons name="create-outline" size={30} color="#9400D3" />
            </TouchableOpacity>
          </TouchableOpacity>
        ))
      )}
    </View>
  );
}

// Estilos do componente
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  card: {
    flexDirection: "row",
    flexBasis: "100%",
    height: 120,
    marginVertical: 10,
    borderRadius: 10,
    backgroundColor: "white",
    alignItems: "center",
    overflow: "hidden",
    padding: 10,
  },
  imageBanner: {
    width: 100,
    height: "100%",
    borderRadius: 10,
    overflow: "hidden",
  },
  infoContainer: {
    marginLeft: 15,
    flex: 1,
    justifyContent: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 5,
  },
  subTitle: {
    fontSize: 14,
    color: "gray",
  },
  iconButton: {
    marginLeft: 10,
    justifyContent: "center",
  },
});
