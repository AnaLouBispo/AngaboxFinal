import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Header from "../../Componentes/Header/Header";
import Search from "../../Componentes/Search";
import CardMovie from "../../Componentes/Cards/CardMovie";
import Footer from "../../Componentes/Footer/Footer";
import { useRoute } from "@react-navigation/native";
import axios from "axios";

export default function SearchPage() {
  // Estado para armazenar os dados do usuário
  const [user, setUser] = useState(null);

  const route = useRoute();
  const { id } = route.params || {};

  // Função para buscar os dados do usuário pela API
  const fetchUser = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/api/user/${id}`);
      setUser(response.data.user);
    } catch (error) {
      console.error("Erro ao buscar o usuário:", error.message);
      if (error.response) {
        console.error("Código de status da resposta:", error.response.status);
      }
    }
  };

  // useEffect para executar a busca de dados ao montar o componente
  useEffect(() => {
    if (id) {
      fetchUser();
    } else {
      console.warn("ID do usuário não fornecido.");
      console.log("ID:", id);
    }
  }, [id]);


  // Obtém o nome do usuário a partir do estado
  const nameUser = user.nameUser;
  return (
    <View style={styles.container}>
      <Text>Teste</Text>
      <Header user={nameUser} />
      <Search />
      <ScrollView>
        {/* Lista de cards de filmes */}
        <CardMovie />
        <CardMovie />
        <CardMovie />
        <CardMovie />
        <CardMovie />
      </ScrollView>
      <Footer id={id} />
    </View>
  );
}

// Estilização da página
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 60,
  },
});
