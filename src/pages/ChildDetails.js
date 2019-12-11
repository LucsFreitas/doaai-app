import React from 'react';
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import company from '../../assets/company.png';
import children from '../models/models';
import globalStyles from '../GlobalStyles';

// export default function ChildDetails({ navigation, child }){
  export default class ChildDetails extends React.Component{

    render () {
      const { navigation } = this.props;
      const child = navigation.getParam('child', 'undefined');

      voltar = () => {
        navigation.navigate('Home');
      }
  
      confirmar = () => {
        navigation.navigate('Home');
      }

      return (
        <SafeAreaView style={globalStyles.safeAreaView}>
          <Image style={globalStyles.company} source={company}/>

          <View style={styles.container}>
            <Text style={styles.label}>Nome:</Text>
            <Text style={styles.childName}>{child.name}</Text>
            <Text style={styles.label}>Idade:</Text>
            <Text style={styles.childName}>{child.age}</Text>
            <Text style={styles.label}>Endereço:</Text>
            <Text style={styles.childName}>{child.neighborhood}</Text>
            <Text style={styles.label}>Pedido:</Text>
            <Text style={styles.childName}>{child.text}</Text>
          </View>

          <TouchableOpacity onPress={confirmar} style={styles.button}>
              <Text style={styles.buttonText}>Confirmar</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={voltar} style={styles.button}>
              <Text style={styles.buttonText}>Voltar</Text>
          </TouchableOpacity>

        </SafeAreaView>
      )
    }
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

