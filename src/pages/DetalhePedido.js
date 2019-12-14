import React from 'react';
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import company from '../../assets/company.png';
import globalStyles from '../GlobalStyles';

// export default function ChildDetails({ navigation, child }){
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

            <Text style={styles.tituloDetalhe}>Nome:</Text>
            <Text style={styles.detalhe}>{pedido.crianca.nome}</Text>
            <Text style={styles.tituloDetalhe}>Idade:</Text>
            <Text style={styles.detalhe}>{pedido.crianca.nome}</Text>
            <Text style={styles.tituloDetalhe}>Endereço:</Text>
            <Text style={styles.detalhe}>{pedido.crianca.bairro}</Text>
            <Text style={styles.tituloDetalhe}>Pedido:</Text>
            <Text style={styles.detalhe}>{pedido.textoPedido}</Text>

            <TouchableOpacity onPress={confirmar} style={styles.button}>
                <Text style={styles.buttonText}>Confirmar</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={voltar} style={styles.button}>
                <Text style={styles.buttonText}>Voltar</Text>
            </TouchableOpacity>
        </View>
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

  buttons: {
    marginBottom: 0
  },

  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  tituloDetalhe:{
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
    marginTop: 10
  },

  detalhe: {
    color: '#666'
  }

});

