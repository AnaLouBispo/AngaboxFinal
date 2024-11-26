import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import Footer from '../../Componentes/Footer/Footer';
import axios from 'axios';
import { useRoute } from '@react-navigation/native';

export default function User() {
  const [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_700Bold,
  });

  // Estado para armazenar os dados do usuário
  const [user, setUserState] = useState(null);

  // Hook para acessar parâmetros da rota atual
  const route = useRoute();
  const { id } = route.params || {};

  // Função para buscar os dados do usuário pela API
  const listUser = async () => {
    try {
      console.log("Id: ", id);
      const response = await axios.get(`http://localhost:8080/api/user/${id}`);
      setUserState(response.data.user);
      console.log("Usuário:", response.data.user);
      console.log("Resposta da API:", response.data);
    } catch (error) {
      if (error.response) {
        console.error("Código de status da resposta:", error.response.status);
      }
    }
  };

  // useEffect para buscar os dados do usuário ao montar o componente
  useEffect(() => {
    if (id) {
      listUser();
    } else {
      console.warn("ID do usuário não fornecido.");
      console.log(id);
    }
  }, [id]);

  // Retorna uma mensagem de carregamento enquanto os dados não são carregados
  if (!user) {
    return (
      <View>
        <Text>Carregando...</Text>
      </View>
    );
  }

  // Renderiza o layout principal
  return (
    <View style={styles.container}>
      {/* Saudação ao usuário */}
      <View style={styles.containerText}>
        <Text style={styles.hello}>Hello,</Text>
        <Text style={styles.username}>{user.nameUser}</Text>
      </View>

      {/* Informações do usuário */}
      <View style={styles.containerInfo}>
        <Text style={styles.info}>Your Information</Text>
      </View>

      {/* Campos para nome, email e senha */}
      <View style={styles.field}>
        <Ionicons name="person-outline" size={30} color="#9400D3" />
        <TextInput
          style={styles.input}
          placeholder={user.nameUser}
        />
      </View>

      <View style={styles.field}>
        <Ionicons name="mail-outline" size={30} color="#9400D3" />
        <TextInput
          style={styles.input}
          placeholder={user.email}
        />
      </View>

      <View style={styles.field}>
        <Ionicons name="key-outline" size={30} color="#9400D3" />
        <TextInput
          style={styles.input}
          placeholder="************" // Placeholder para a senha
          secureTextEntry
        />
      </View>

      <Image
        style={styles.imageFooter}
        source={require('../../Assets/Images/footer.png')}
      />
      <Footer id={id} />
    </View>
  );
}

// Estilos do componente
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    backgroundColor: "white",
  },
  scrollContent: {
    alignItems: 'center',
    paddingTop: 40,
  },
  hello: {
    color: 'gray',
    fontSize: 40,
    fontFamily: 'Montserrat_400Regular',
  },
  username: {
    fontSize: 40,
    color: "#9400D3",
    fontFamily: 'Montserrat_400Regular',
  },
  image: {
    marginTop: 50,
    width: 100,
    height: 100,
    borderRadius: 75,
  },
  info: {
    color: '#9400D3',
    fontSize: 16,
    fontFamily: 'Montserrat_700Bold',
    textAlign: 'left',
    borderBottomWidth: 1,
    borderBottomColor: '#9400D3',
    marginBottom: 20,
    marginTop: 100
  },
  containerText: {
    justifyContent: "flex-start",
    flexDirection: "row",
    padding: 20,
    marginTop: 150
  },
  field: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 25,
    paddingBottom: 5,
  },
  input: {
    fontSize: 16,
    flex: 1,
    marginLeft: 10,
    color: "#333",
  },
  editIcon: {
    marginLeft: 10,
  },
  containerInfo: {
    marginTop: 0,
    alignSelf: 'flex-start',
    marginLeft: 25,
  },
  imageFooter: {
    marginTop: 100,
    width: 500,
    height: 200
  }
});
