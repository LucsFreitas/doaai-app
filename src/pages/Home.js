import React, { Component } from 'react';
import { Image, Platform, SafeAreaView, StyleSheet, Text, View, ScrollView } from 'react-native';

import company from '../../assets/company.png';

export default function Home() {

  return (
    <SafeAreaView style={styles.safeAreView}>
      <Image style={styles.company} source={company}/>
      
      <ScrollView>
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

        <View style={styles.postContainer}>
          <Text style={styles.postTitle}>Jose da silva</Text>
          <Text style={styles.postDescription}>
            Idade: 11 anos
            Local: Boa Viagem
          </Text>
        </View>

        <View style={styles.postContainer}>
          <Text style={styles.postTitle}>Jose da silva</Text>
          <Text style={styles.postDescription}>
            Idade: 11 anos
            Local: Boa Viagem
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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  company: {
    height: 32,
    resizeMode: "contain",
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 10
  },

  postContainer: {
    marginHorizontal: 20,
    marginVertical: 10,
    padding: 5,
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
  },

  safeAreView: {
    paddingTop: Platform.OS === 'android' ? 25 : 0
  }

});

