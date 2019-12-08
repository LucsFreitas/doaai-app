import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, Text, View, Platform, ScrollView } from 'react-native';


export default function Home() {

  return (
    <ScrollView style={styles.container}>
      <View style={styles.postContainer}>
        <Text style={styles.postTitle}>Brenon Rufino Barbosa</Text>
        <Text style={styles.postDescription}>
          Idade: 15 anos
          Local: Aguas Compridas
        </Text>
      </View>

      <View style={styles.postContainer}>
        <Text style={styles.postTitle}>Lucas Vinicius</Text>
        <Text style={styles.postDescription}>
          Idade: 10 anos
          Local: Ibura
        </Text>
      </View>

      <View style={styles.postContainer}>
        <Text style={styles.postTitle}>Natalia Lima</Text>
        <Text style={styles.postDescription}>
          Idade: 15 anos
          Local: Pina
        </Text>
      </View>

      <View style={styles.postContainer}>
        <Text style={styles.postTitle}>Flavianne Lira</Text>
        <Text style={styles.postDescription}>
          Idade: 5 anos
          Local: Roda de Fogo
        </Text>
      </View>

      <View style={styles.postContainer}>
        <Text style={styles.postTitle}>Maria dos Santos</Text>
        <Text style={styles.postDescription}>
          Idade: 3 anos
          Local: Janga
        </Text>
      </View>

      <View style={styles.postContainer}>
        <Text style={styles.postTitle}>Jose da silva</Text>
        <Text style={styles.postDescription}>
          Idade: 11 anos
          Local: Boa Viagem
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  postContainer: {
    marginHorizontal: 20,
    marginVertical: 10,
    padding: 20,
    backgroundColor: "#FFF",
    borderRadius:3
  },

  postTitle:{
    fontSize: 18,
    fontWeight: "bold",
    marginBottom:5
  },

  postDescription:{
    color: "#666"
  }

});

