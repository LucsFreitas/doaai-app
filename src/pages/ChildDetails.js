import React from 'react';
import { Image, SafeAreaView, StyleSheet, ScrollView } from 'react-native';

import company from '../../assets/company.png';
import children from '../models/models';
import globalStyles from '../GlobalStyles';

export default function ChildDetails({ Child }){

  return (
    <SafeAreaView style={globalStyles.safeAreaView}>
      <Image style={globalStyles.company} source={company}/>

      { children.push(item => <ChildList key={item.id} child={item}/>) }

      <View style={styles.container}>
        <Text style={styles.label}>Nome</Text>
        <Text style={styles.childName}>{item.name}</Text>
        <Text style={styles.label}>Idade</Text>
        <Text style={styles.childName}>{item.age}</Text>
        <Text style={styles.label}>Endereco</Text>
        <Text style={styles.childName}>{item.neighborhood}</Text>
        <Text style={styles.label}>Pedido</Text>
        <Text style={styles.childName}>{item.text}</Text>
      </View>

      

      
      <TouchableOpacity onPress={handleSubmit} style={styles.button}>
          <Text style={styles.buttonText}>Confirmar</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleSubmit} style={styles.button}>
          <Text style={styles.buttonText}>Voltar</Text>
      </TouchableOpacity>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  button: {
    height: 42,
    backgroundColor: '#33ace0',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
  },

  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },

  label:{
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5
  },

  childName: {
    color: '#666'
  }

});

