import React from 'react';
import { 
  FlatList,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';

import api from '../services/api';
import ListaPedido from '../components/ListaPedido';
import globalStyles from '../GlobalStyles';

export default class Home extends React.Component  {
  state = {
    pedidos: []
  };

  componentDidMount() {
    api.get('/pedido')
      .then((response) => response.data)
      .then((data) => this.setState({ pedidos: data }));
  }

  navigateToDetail = function (pedido) {
    this.props.navigation.navigate('DetalhePedido', { pedido });
  }

  render () {
    return (
      <View style={globalStyles.safeAreaView}>
        <FlatList
          data={this.state.pedidos}
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
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  }
});