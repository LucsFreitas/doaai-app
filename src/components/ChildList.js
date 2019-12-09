import React from 'react';
import { withNavigation } from 'react-navigation';
import { View, StyleSheet, Text } from 'react-native';

function ChildList({ child, }) {
  return (
    <View style={styles.container}>
      <View style={styles.postContainer}>
        <Text style={styles.postTitle}>{child.name}</Text>
        <Text style={styles.postDetails}>{`Idade: ${child.age} anos`}</Text>
        <Text style={styles.postDetails}>{`Bairro: ${child.neighborhood}`}</Text>
      </View>  
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333"
  },

  postContainer: {
    marginHorizontal: 20,
    marginVertical: 10,
    padding: 20,
    backgroundColor: "#FFF",
    borderRadius: 5
  },

  postTitle:{
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5
  },

  postDetails: {
    color: '#666'
  },
});

export default withNavigation(ChildList);