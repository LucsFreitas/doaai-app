import React, { Component } from 'react';
import { Image, Platform, SafeAreaView, StyleSheet, Text, View, ScrollView } from 'react-native';

import ChildList from '../components/ChildList';
import company from '../../assets/company.png';
import children from '../models/models';

export default function Home(){

  return (
    <SafeAreaView style={styles.safeAreView}>
      <Image style={styles.company} source={company}/>

      <ScrollView>
        { children.map(item => <ChildList key={item.id} child={item}/>) }
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  company: {
    height: 32,
    resizeMode: "contain",
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: '#eee'
  },

  safeAreView: {
    paddingTop: Platform.OS === 'android' ? 25 : 0,
    backgroundColor: '#eee',
  }

});

