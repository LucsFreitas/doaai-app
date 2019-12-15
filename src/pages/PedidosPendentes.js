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

export default class PedidosPendentes extends React.Component  {
  state = {
    pedidos: [],
    isRequesting: false
  };

  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Pedidos Pendentes',
      headerRight: () => (
        <Button
          onPress={() => {
            AsyncStorage.clear();
            navigation.navigate('Login');
          }}
          title="Sair"
          color="#f88"
        />
      ),
    }
  };

  static tabBarOptions = () => {
    return {
      title: 'Pedidos Pendentes',
      activeTintColor: '#e91e63',
      labelStyle: {
        fontSize: 12,
      },
      style: {
        backgroundColor: 'blue',
      },
    }
  }

  componentDidMount() {
    this.setState({ isRequesting: true });

    api.get('/pedido')
      .then((response) => response.data)
      .then((data) => this.setState({ pedidos: data }))
      .then(() => this.setState({ isRequesting: false }));
  }

  navigateToDetail = function (pedido) {
    this.props.navigation.navigate('DetalhePedido', { pedido });
  }

  loadList = () => {
    return (
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
    )
  }

  render () {
    return (
      <View style={globalStyles.safeAreaView}>
        { 
          this.state.isRequesting
          ? <ActivityIndicator style={styles.activity} size={'large'} color={'#33ace0'}/>
          : this.loadList()
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  activity: {
    flex: 1,
    alignSelf: 'center',
  },
  emptyMessage:{
    fontSize: 20,
  },
  hasNoData: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});