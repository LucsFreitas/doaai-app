import React from 'react';
import { withNavigation } from 'react-navigation';
import { View, StyleSheet, Text } from 'react-native';

function ChildList({ child, }) {
  return (
    <View style={styles.container}>
        <Text style={styles.childName}>{child.name}</Text>
        <Text style={styles.childDetails}>{`Idade: ${child.age} anos`}</Text>
        <Text style={styles.childDetails}>{`Bairro: ${child.neighborhood}`}</Text>
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

export default withNavigation(ChildList);