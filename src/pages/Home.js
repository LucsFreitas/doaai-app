import React, { useState, useEffect } from 'react';
import { 
  FlatList,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';

import api from '../services/api';
import ListaPedido from '../components/ListaPedido';
import globalStyles from '../GlobalStyles';

export default function Home ({ navigation }) {
  const [pedidos, setPedidos] = useState([]);

  useEffect(() => {
    api.get('/pedido')
      .then((response) => response.data)
      .then((data) => setPedidos(data))
  }, []);

  navigateToDetail = function (pedido) {
    navigation.navigate('DetalhePedido', { pedido });
  }

  return (
    <View style={globalStyles.safeAreaView}>
      <FlatList
        data={pedidos}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity key={item.id} onPress={() => this.navigateToDetail(item)}>
              <ListaPedido pedido={item}/>
          </TouchableOpacity>
        )}
        style={styles.container}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  }
});