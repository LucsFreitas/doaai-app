import React from 'react';
import { 
  ActivityIndicator,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';

import api from '../services/api';
import ListaDoacao from '../components/ListaDoacao';
import globalStyles from '../GlobalStyles';

export default class DoacoesPendentes extends React.Component  {
  state = {
    doacoes: [],
    isRequesting: false
  };

  static navigationOptions = {
    headerShown: false
  };

  componentDidMount() {
    this.setState({ isRequesting: true });

    api.get('/doacao/pendentes')
      .then((response) => response.data)
      .then((data) => this.setState({ doacoes: data }))
      .then(() => this.setState({ isRequesting: false }));
  }

  navigateToDetail = function (doacao) {
    this.props.navigation.navigate('DetalheDoacao', { doacao });
  }

  loadList = () => {
    return (
      <FlatList
        data={this.state.doacoes}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity key={item.id} onPress={() => this.navigateToDetail(item)}>
              <ListaDoacao doacao={item}/>
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