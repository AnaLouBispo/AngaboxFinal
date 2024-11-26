// Importação das bibliotecas necessárias
import React, { useEffect, useState } from "react";
import { StyleSheet, View, ImageBackground, Text, ActivityIndicator, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons'; 
import { useNavigation } from "@react-navigation/native"; 
import axios from "axios"; 

// Componente principal do CardVideoAdmin
export default function CardVideoAdmin() {
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
  
    // Função para deletar um filme pelo ID
    const deleteMovie = async (id) => {
        try {
            await axios.delete(`http://localhost:8080/api/movie/${id}`); 
            setMovies((prevMovies) => prevMovies.filter((movie) => movie._id !== id)); 
            alert("Filme deletado com sucesso!"); 
        } catch (error) {
            console.error("Erro ao deletar filme:", error); 
            alert("Erro ao deletar o filme. Tente novamente."); 
        }
    };
  
    // useEffect para carregar os filmes ao montar o componente
    useEffect(() => {
        listMovies();
    }, []);
  
    // Renderização do componente
    return (
        <View style={styles.container}>
            {loading ? ( 
                <ActivityIndicator size="large" color="#9400D3" />
            ) : (
                movies.map((movie) => ( 
                    <View key={movie._id} style={styles.card}>
                        <ImageBackground
                            style={styles.imageBanner}
                            source={{ uri: movie.img }} 
                            imageStyle={{ borderRadius: 10 }}
                        />
                        <View style={styles.infoContainer}>
                            <Text style={styles.title}>{movie.title}</Text>
                            <Text style={styles.subTitle}>{movie.gender}</Text> 
                        </View>
                        <View style={styles.buttonGroup}>
                            {/* Botão para editar */}
                            <TouchableOpacity
                                style={styles.iconButton}
                                onPress={() => navigation.navigate("Review", { id: movie._id })}
                            >
                                <Ionicons name="create-outline" size={30} color="#9400D3" />
                            </TouchableOpacity>
                            {/* Botão para deletar */}
                            <TouchableOpacity
                                style={styles.iconButton}
                                onPress={() => deleteMovie(movie._id)}
                            >
                                <Ionicons name="trash-outline" size={30} color="red" />
                            </TouchableOpacity>
                        </View>
                    </View>
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
    buttonGroup: {
        flexDirection: "row",
        alignItems: "center",
    },
    iconButton: {
        marginLeft: 10,
        justifyContent: "center",
    },
});
