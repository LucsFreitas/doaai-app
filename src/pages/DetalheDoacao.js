import React from 'react';
import { 
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import globalStyles from '../GlobalStyles';

export default class DetalheDoacao extends React.Component{
  static navigationOptions = {
    title: 'Detalhes',
  };

  render () {
    const { navigation } = this.props;
    const doacao = navigation.getParam('doacao', 'undefined');

    confirmar = () => {
      navigation.navigate('DoacoesPendentes');
    }

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

        <View style={styles.buttons}>
          <TouchableOpacity onPress={confirmar} style={styles.button}>
              <Text style={styles.buttonText}>Confirmar</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    height: 42,
    width: 300,
    backgroundColor: '#33ace0',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
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

