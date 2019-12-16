import React from 'react';
import { 
  Alert,
  AsyncStorage,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import globalStyles from '../GlobalStyles';
import api from '../services/api';

export default class DetalheDoacao extends React.Component{
  static navigationOptions = {
    title: 'Detalhes',
  };

  state = {
    doacao: this.props.navigation.getParam('doacao', 'undefined'),
  };

  realizaDoacao = () => {
    AsyncStorage.getItem('doador')
      .then((doador) => api.post(`doacao/${this.state.doacao.id}/doar`,{ doadorId: doador }))
      .then(() => {
        Alert.alert('Doação realizada. Obrigado!');
        this.props.navigation.navigate('MinhasDoacoes');
      })
      .catch(() => {
        Alert.alert('Desculpe, ocorreu um erro na sua solicitação.');
      })
  }

  doar = () => {
    Alert.alert(
      'Doar',
      'Você confirma que irá realizar esta doação?',
      [
        { text: 'Cancelar' },
        { text: 'Sim', onPress: () => this.realizaDoacao() },
      ]
    );
  }

  render () {
    const doacao = this.state.doacao;

    return (
      <View style={globalStyles.safeAreaView}>
        <View style={styles.container}>
          <Text style={styles.nome}>{`${doacao.crianca.nome}`}</Text>
          <Text style={styles.tituloDetalhe}>{`Idade: ${doacao.crianca.idade} anos`}</Text>
          <Text style={styles.tituloDetalhe}>{`Bairro: ${doacao.crianca.bairro}`}</Text>
          
          <Text style={styles.tituloDoacao}>Pedido:</Text>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Text style={styles.textoDoacao}>{doacao.textoPedido + doacao.textoPedido}</Text>
          </ScrollView>
        </View>

        {
          !this.state.doacao.doador && (
            <View style={styles.buttons}>
              <TouchableOpacity onPress={this.doar} style={styles.button}>
                  <Text style={styles.buttonText}>Realizar Doação</Text>
              </TouchableOpacity>
            </View>
          )
        }
        
      </View>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    height: 42,
    paddingHorizontal: 25,
    backgroundColor: '#33ace0',
    justifyContent: 'center',
    alignItems: 'center',
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

  container: {
    flex: 1,
    marginBottom: 10,
    marginLeft: 20,
    marginRight: 20,
  },

  tituloDetalhe:{
    fontSize: 18,
    color: '#333',
  },

  tituloDoacao:{
    fontSize: 18,
    color: '#333',
    fontWeight: "bold",
    marginTop: 10
  },

  nome:{
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 10
  },

  detalhe: {
    fontSize: 18,
  },

  textoDoacao: {
    fontSize: 17,
    textAlign:'justify',
  },

});

