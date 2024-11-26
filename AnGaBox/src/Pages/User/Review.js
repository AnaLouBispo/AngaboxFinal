import React, { useEffect, useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  ActivityIndicator,
  Alert,
} from "react-native";
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";
import MyButton from "../../Componentes/Button";
import Footer from "../../Componentes/Footer/Footer";
import CardReview from "../../Componentes/Cards/CardReview";
import axios from "axios";
import { useRoute, useNavigation } from "@react-navigation/native";

// Componente principal da tela de reviews
export default function Review() {
  const route = useRoute();
  const navigation = useNavigation();
  const { id, nameUser } = route.params || {};

  // Estados para armazenar informações do formulário e do filme
  const [movie, setMovie] = useState(null);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [rating, setRating] = useState("");
  const [movieTitle, setMovieTitle] = useState("");
  const [director, setDirector] = useState("");
  const [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_700Bold,
  });

  // Função para buscar os dados do filme pela API
  const listMovie = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/movie/${id}`
      );
      setMovie(response.data.movieFound);
      console.log("resposta da API", response.data);
    } catch (error) {
      console.error("Erro ao buscar o filme:", error);
    }
  };

  // Efeito para buscar os dados do filme ao montar o componente
  useEffect(() => {
    listMovie();
  }, [id]);

  // Atualiza os dados do filme quando eles forem carregados
  useEffect(() => {
    if (movie) {
      console.log("obj", movie);
      setMovieTitle(movie.title);
      setDirector(movie.director);
    }
  }, [movie]);

  // Mostra indicador de carregamento enquanto as fontes não carregam
  if (!fontsLoaded) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#9400D3" />
      </View>
    );
  }

  // Função para enviar a review
  const handleReviewSubmit = async () => {
    try {
      const response = await axios.post(
        `http://localhost:8080/api/post/${id}`,
        {
          title,
          content,
          rating,
          movieTitle,
          director,
          author: nameUser,
        }
      );
      Alert.alert("Review Postada");
      navigation.navigate("Home");
      console.log("Review submitted:", response.data);
    } catch (error) {
      console.error("Erro ao enviar a review:", error);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        {movie && (
          <>
            <Image
              style={styles.imageHeader}
              source={require("../../Assets/Images/header.png")}
            />
            <Image style={styles.image} source={{ uri: movie.img }} />
            <Text style={styles.title}>
              {movie?.title || "Título indisponível"}
            </Text>
            <Text style={styles.question}>
              {movie?.description || "Descrição indisponível"}
            </Text>
          </>
        )}
        {/* Inputs do formulário */}
        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="Review Title"
          value={title}
          onChangeText={setTitle}
        />
        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="Write your review here..."
          multiline
          value={content}
          onChangeText={setContent}
        />
        <TextInput
          style={styles.input}
          placeholder="Rating (1-5)"
          value={rating}
          onChangeText={setRating}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          placeholder="Movie Title"
          value={movieTitle}
          editable={false}
        />
        <TextInput
          style={styles.input}
          placeholder="Director"
          value={director}
          editable={false}
        />
        {/* Botão para submeter a review */}
        <View style={styles.containerButton}>
          <MyButton
            title="Submit Review"
          />
        </View>
        <CardReview />
      </ScrollView>

      <Footer />
    </View>
  );
}

// Estilos do componente
const styles = StyleSheet.create({
  container: {
    paddingBottom: 80,
    alignItems: "center",
    flex: 1,
    backgroundColor: "white",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  imageHeader: {
    position: "absolute",
    width: "100%",
    height: 200,
  },
  image: {
    width: 200,
    marginLeft: 10,
    height: 250,
    borderRadius: 10,
    marginBottom: 20,
    resizeMode: "cover",
    marginTop: 100,
  },
  title: {
    marginLeft: 10,
    fontSize: 32,
    color: "black",
    marginBottom: 10,
    fontFamily: "Montserrat_700Bold",
  },
  question: {
    textAlign: "justify",
    padding: 15,
    color: "gray",
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 15,
    fontFamily: "Montserrat_400Regular",
  },
  input: {
    marginLeft: 10,
    marginTop: 20,
    height: 50,
    width: 390,
    borderColor: "#9400D3",
    borderWidth: 1,
    marginBottom: 12,
    paddingLeft: 8,
    borderRadius: 5,
    fontFamily: "Montserrat_400Regular",
  },
  containerButton: {
    alignItems: "center",
    marginBottom: 30,
  },
  textArea: {
    height: 100,
    textAlignVertical: "top",
  },
});
