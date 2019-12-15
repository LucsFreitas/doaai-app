import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  StyleSheet,
  Image,
  View,
} from 'react-native';

import logo from '../../assets/logo.png';

export default class AuthLoadingScreen extends React.Component {
  componentDidMount() {
    AsyncStorage.getItem('user').then(user => {
        this.props.navigation.navigate(user ? 'Home' : 'Login');
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={logo}/>
        <ActivityIndicator size="large" color="#33ace0" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }
})
