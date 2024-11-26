import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import Header from "../../Componentes/Header/Header";
import Banner from "../../Componentes/Banner";
import Texts from "../../Componentes/Text";
import FooterAdmin from "../../Componentes/Footer/FooterAdmin";
import CardMovieAdmin from "../../Componentes/Cards/CardMovieadmin";
import { useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";
import axios from "axios";

export default function HomeAdmin() {
  // Estado para armazenar os dados do usuário
  const [user, setUserState] = useState(null);
  const route = useRoute();
  const { id } = route.params || {};
  console.log("id do adm", id);

  // Função para buscar os dados do usuário
  const listUser = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/api/adm/${id}`);
      setUserState(response.data.adm);
      console.log("Usuário:", response.data.adm);
      console.log("Resposta da API:", response.data);
    } catch (error) {
      console.error("Erro ao buscar o usuário:", error.message);
      if (error.response) {
        console.error("Código de status da resposta:", error.response.status);
      }
    }
  };


  useEffect(() => {
    if (id) {
      listUser();
    } else {
      console.warn("ID do usuário não fornecido.");
    }
  }, [id]);


  if (!user) {
    return (
      <View>
        <Text>Carregando...</Text>
      </View>
    );
  }
  return (
    <View style={styles.containerPricipal}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Header user={user.admName} />
        <Banner />
        <Image
          style={styles.imageDecoration}
          source={require('../../Assets/Images/decoration.png')}
        />
        <Texts />

        <ScrollView
          horizontal
          style={styles.cardMovieContainer}
          showsHorizontalScrollIndicator={false}
        >
          {[...Array(2)].map((_, index) => (
            <CardMovieAdmin key={index} />
          ))}
        </ScrollView>

        <Texts />


        {[...Array(3)].map((_, index) => (
          <CardVideo key={index} />
        ))}
      </ScrollView>
      <FooterAdmin />
    </View>
  );
}

const styles = StyleSheet.create({
  containerPricipal: {
    flex: 1,
    backgroundColor: "white",
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 60,
  },
  cardMovieContainer: {
    flexDirection: "row",
    marginHorizontal: 5,
    paddingVertical: 5,
  },
  imageDecoration: {
    height: 30,
    marginTop: 10,
    marginLeft: 150,
    width: 100,
  },
});