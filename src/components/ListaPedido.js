import React from 'react';
import { withNavigation } from 'react-navigation';
import { View, StyleSheet, Text } from 'react-native';

function ListaPedido({ pedido, }) {

  return (
    <View style={styles.container}>
        <Text style={styles.childName}>{pedido.crianca.nome}</Text>
        <Text style={styles.childDetails}>{`Idade: ${pedido.crianca.idade} anos`}</Text>
        <Text style={styles.childDetails}>{`Bairro: ${pedido.crianca.bairro}`}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    marginHorizontal: 20,
    marginVertical: 5,
    padding: 15,
    borderRadius: 5
  },

  childName:{
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5
  },

  childDetails: {
    color: '#666'
  },
});

export default withNavigation(ListaPedido);