import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import company from '../../assets/company.png';
import globalStyles from '../GlobalStyles';

export default class ChildDetails extends React.Component{

  render () {
    const { navigation } = this.props;
    const pedido = navigation.getParam('pedido', 'undefined');

    voltar = () => {
      navigation.navigate('Home');
    }

    confirmar = () => {
      navigation.navigate('Home');
    }

    return (
      <View style={globalStyles.safeAreaView}>
        <Image style={globalStyles.company} source={company}/>

        <View style={styles.container}>
          <Text style={styles.nome}>{`${pedido.crianca.nome}`}</Text>
          {/* <Text style={styles.detalhe}>{pedido.crianca.nome}</Text> */}
          <Text style={styles.tituloDetalhe}>{`Idade: ${pedido.crianca.idade} anos`}</Text>
          <Text style={styles.tituloDetalhe}>{`Bairro: ${pedido.crianca.bairro}`}</Text>
          <Text style={styles.tituloPedido}>Pedido:</Text>

          {/* <Text style={styles.tituloDetalhe}>Nome:</Text>
          <Text style={styles.detalhe}>{pedido.crianca.nome}</Text>
          <Text style={styles.tituloDetalhe}>Idade:</Text>
          <Text style={styles.detalhe}>{`${pedido.crianca.idade} anos`}</Text>
          <Text style={styles.tituloDetalhe}>Bairro:</Text>
          <Text style={styles.detalhe}>{pedido.crianca.bairro}</Text>
          <Text style={styles.tituloDetalhe}>Pedido:</Text> */}
          {/* <ScrollView> */}
            <Text style={styles.textoPedido}>{pedido.textoPedido}</Text>
          {/* </ScrollView> */}
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
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20,
  },

  tituloDetalhe:{
    fontSize: 18,
    color: '#333',
  },

  tituloPedido:{
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

  textoPedido: {
    fontSize: 17,
    textAlign:'justify',
  },

});

