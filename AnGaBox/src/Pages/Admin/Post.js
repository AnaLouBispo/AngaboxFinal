import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import FooterAdmin from '../../Componentes/Footer/FooterAdmin';
import HeaderImage from '../../Componentes/Header/HeaderImage';

export default function PostPage() {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [image, setImage] = useState(null);

  const [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_700Bold,
  });

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const handlePost = () => {
    if (!title || !text || !image) {
      Alert.alert('Error', 'All fields are required!');
    } else {
      Alert.alert('Success', 'Your post has been submitted!');
    }
  };

  return (
    <View style={styles.container}>
      <HeaderImage />

      <ScrollView style={styles.containerScroll}>
        <Text style={styles.title}>CREATE A POST</Text>

        <TouchableOpacity style={styles.imagePicker} onPress={pickImage}>
          {image ? (
            <Image source={{ uri: image }} style={styles.image} />
          ) : (
            <Ionicons name="image-outline" size={50} color="#9400D3" />
          )}
        </TouchableOpacity>

        {/* Campo para título */}
        <TextInput
          style={styles.input}
          placeholder="Title"
          value={title}
          onChangeText={setTitle}
        />

        {/* Campo para texto da postagem */}
        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="Write your text here..."
          value={text}
          onChangeText={setText}
          multiline
        />

        {/* Botão para publicar o post */}
        <TouchableOpacity style={styles.postButton} onPress={handlePost}>
          <Text style={styles.postButtonText}>Post</Text>
        </TouchableOpacity>
      </ScrollView>
      <FooterAdmin />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  containerScroll: {
    flex: 1,
    padding: 20,
  },
  imageHeader: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  title: {
    fontSize: 30,
    fontFamily: 'Montserrat_400Regular',
    color: '#9400D3',
    marginBottom: 20,
  },
  imagePicker: {
    backgroundColor: '#f0f0f0',
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#9400D3',
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
    fontFamily: 'Montserrat_400Regular',
    marginBottom: 15,
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  postButton: {
    backgroundColor: '#9400D3',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  postButtonText: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'Montserrat_400Regular',
  },
});
