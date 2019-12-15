import React from 'react';
import { 
  Alert,
  AsyncStorage,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { ScrollView } from 'react-native-gesture-handler';
import Constants from 'expo-constants';
import { Linking } from 'expo';

import { textoSobre } from '../data';

export default class MaisPage extends React.Component  {


  linkNacc = () => {
    Linking.openURL('http://www.nacc.org.br/')
  }

  logout = () => {
    Alert.alert(
      'Deslogar',
      'Você tem certeza que quer deslogar do aplicativo?',
      [
        { text: 'Cancelar' },
        { text: 'OK', onPress: () => {
            AsyncStorage.clear();
            this.props.navigation.navigate('Login');
          }
        },
      ]
    );
    
  }

  
  render () {
    cliqueAqui = () => {
      return <Text onPress={this.linkNacc} style={styles.link}>aqui</Text>
    }

    return (
      <View style={styles.safeAreaView}>
        <View style={styles.container}>
          <Text style={styles.tituloSobre}>Sobre o DOAAI:</Text>
          <ScrollView style={styles.scroll}>
              <View style={styles.container}>
                <Text style={styles.textoSobre}>{textoSobre}</Text>
                <Text style={styles.textoSaibaMais}>
                  {"\n"}Clique {cliqueAqui()} e saiba mais sobre o NACC.
                </Text>
              </View>
          </ScrollView>
        </View>

        <View style={styles.buttons}>
          <TouchableOpacity onPress={this.logout} style={styles.button}>
              <Text style={styles.buttonText}>Deslogar</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    height: 42,
    paddingHorizontal: 35,
    backgroundColor: '#ff6047',
    justifyContent: 'center',
    alignItems: 'stretch',
    borderRadius: 20,
  },
  buttons: {
    marginBottom: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  safeAreaView: {
    flex: 1,
    backgroundColor: '#eee',
    paddingTop: Constants.statusBarHeight,
  },
  container: {
    flex: 1,
    margin: 10,
  },
  scroll: {
    flex: 1,
    marginHorizontal: 15,
    marginVertical: 5,
  },
  textoSobre: {
    fontSize: 18,
    textAlign:'justify',
  },
  textoSaibaMais: {
    fontSize: 18,
    textAlign:'justify',
  },
  tituloSobre:{
    fontSize: 18,
    color: '#333',
    fontWeight: "bold",
    marginTop: 10
  },
  link: {
    fontWeight: 'bold',
    textDecorationLine: 'underline'
  },
});