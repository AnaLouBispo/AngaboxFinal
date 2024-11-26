import React, { useState } from "react";
import {
  Image,
  Text,
  View,
  StyleSheet,
  ActivityIndicator,
  TextInput,
  Alert,
  TouchableOpacity,
} from "react-native";

import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";

import MyButton from "../Componentes/Button";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
export default function Register() {
  const navigation = useNavigation();
  const [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_700Bold, 
  });

  const [nameUser, setNameUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    const url = "http://localhost:8080/api/user";

    try {
      console.log({
        nameUser,
        email,
        password,
      });

      const response = await axios.post(url, {
        nameUser: nameUser, 
        email: email,
        password: password,
      });
      Alert.alert("Sucesso", "Usuário registrado com sucesso!");
      console.log("Resposta do servidor:", response.data);
    } catch (error) {
      console.log("Erro na requisição:", error.message);
      if (error.response) {
        console.log("Erro detalhes:", error.response.data);
        Alert.alert(
          "Erro",
          "Falha ao registrar. Verifique os dados e tente novamente."
        );
      } else {
        Alert.alert("Erro", "Não foi possível conectar ao servidor.");
      }
    }
  };

  if (!fontsLoaded) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../Assets/Images/logoImage.png")}
      />
      <Text style={styles.logo}>SIGN UP</Text>

      <TextInput
        style={styles.input}
        placeholder=" Your Name"
        value={nameUser}
        onChangeText={setNameUser}
      />
      <TextInput
        style={styles.input}
        placeholder="Your Email"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Your Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <MyButton
        title="Register"
        onPress={async () => {
          await handleSubmit();
          navigation.navigate("Login");
        }}
      />

      <View style={styles.containerText}>
        <Text style={styles.question}>Have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={styles.register}>Sign in</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 20,
    backgroundColor: "white",
  },
  image: {
    marginTop: 60,
    width: 300,
    height: 300,
  },
  logo: {
    marginTop: 10,
    fontSize: 26,
    marginBottom: 25,
    color: "black",
    fontFamily: "Montserrat_400Regular",
  },
  containerText: {
    justifyContent: "flex-start",
    flexDirection: "row",
  },
  question: {
    color: "gray",
    marginTop: 20,
    fontFamily: "Montserrat_400Regular",
  },
  register: {
    marginTop: 20,
    marginLeft: 5,
    color: "#9400D3",
    fontFamily: "Montserrat_400Regular",
  },
  input: {
    marginTop: 20,
    height: 50,
    width: 330,
    borderColor: "#ddd",
    borderWidth: 1,
    marginBottom: 12,
    paddingLeft: 8,
    borderRadius: 5,
    fontFamily: "Montserrat_400Regular",
  },
});
