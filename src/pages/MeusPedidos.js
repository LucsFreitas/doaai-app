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

export default class MeusPedidos extends React.Component  {
  state = {
    pedidos: [],
    isRequesting: false
  };

  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Meus Pedidos',
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

  componentDidMount() {
    this.setState({ isRequesting: true });

    api.get(`usuario/${1}/pedido`)
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
  }
});