import React from 'react';
import { 
  ActivityIndicator,
  AsyncStorage,
  FlatList,
  StyleSheet,
  Button,
  TouchableOpacity,
  View,
} from 'react-native';

import api from '../services/api';
import ListaPedido from '../components/ListaPedido';
import globalStyles from '../GlobalStyles';

export default class ConfigPage extends React.Component  {
  static navigationOptions = ({
    title: 'Configurações',
  });

  render () {
    return (
      <View style={globalStyles.safeAreaView}>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
});