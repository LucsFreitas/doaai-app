import React from 'react';
import { withNavigation } from 'react-navigation';
import { View, StyleSheet, Text } from 'react-native';

function ChildList({ child, }) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{child.name}</Text>
      <Text style={styles.details}>{`Idade: ${child.age} anos`}</Text>
      <Text style={styles.details}>{`Bairro: ${child.neighborhood}`}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 10,
  },

  details: {
    fontSize: 20,
    color: '#999',
    marginTop: 5
  },
});

export default withNavigation(ChildList);