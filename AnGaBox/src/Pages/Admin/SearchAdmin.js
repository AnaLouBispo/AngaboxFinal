import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import Header from '../../Componentes/Header/Header';
import Search from '../../Componentes/Search';
import FooterAdmin from '../../Componentes/Footer/FooterAdmin';
import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import Header from '../../Componentes/Header/Header';
import Search from '../../Componentes/Search';
import FooterAdmin from '../../Componentes/Footer/FooterAdmin';
import CardMovieAdmin from '../../Componentes/Cards/CardMovieadmin';


export default function SearchPage() {
  return (
    <View style={styles.container}>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Header />
        <Search />

        {/* Exibição de múltiplos cards de filmes */}
        <CardMovieAdmin />
        <CardMovieAdmin />
        <CardMovieAdmin />
        <CardMovieAdmin />
        <CardMovieAdmin />
      </ScrollView>
      <FooterAdmin />
    </View>
  );
}

// Estilização do componente
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 60,
  },
});
