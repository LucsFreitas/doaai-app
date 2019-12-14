import React, { useState, useEffect } from 'react';
import { Image, ScrollView, TouchableOpacity, View } from 'react-native';

import api from '../services/api';
import ListaPedido from '../components/ListaPedido';
import company from '../../assets/company.png';
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
      <Image style={globalStyles.company} source={company}/>

      <ScrollView>
        { pedidos.map(item => (
          <TouchableOpacity key={item.id} onPress={() => this.navigateToDetail(item)}>
              <ListaPedido pedido={item}/>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  )
}