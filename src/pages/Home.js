import React, { Component } from 'react';
import { Image, Platform, SafeAreaView, StyleSheet, Text, View, ScrollView } from 'react-native';
import ChildList from '../components/ChildList';
import company from '../../assets/company.png';

export default function Home(){

  const child = [
    {
      id: 1,
      name: 'Brenon Rufino Barbosa',
      age: 15,
      neighborhood: 'Águas Compridas',
    },
    {
      id: 3,
      name: 'Lucas Vinicius',
      age: 10,
      neighborhood: 'Ibura',
    },
    {
      id: 4,
      name: 'Natalia Lima',
      age: 15,
      neighborhood: 'Pina',
    },
    {
      id: 5,
      name: 'Flavianne Lira',
      age: 5,
      neighborhood: 'Roda de Fogo',
    },
    {
      id: 6,
      name: 'Maria dos Santos',
      age: 3,
      neighborhood: 'Janga',
    },
    {
      id: 7,
      name: 'Jose da Silva',
      age: 11,
      neighborhood: 'Boa Viagem',
    },
    {
      id: 8,
      name: 'Juliana Farias',
      age: 6,
      neighborhood: 'Boa Vista',
    },
    {
      id: 9,
      name: 'José Henrique',
      age: 9,
      neighborhood: 'Derby',
    },
    {
      id: 10,
      name: 'Washington Luiz',
      age: 8,
      neighborhood: 'Imbiribeira',
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {child.map(item => <ChildList key={item.id} child={item} />)}
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333'
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

