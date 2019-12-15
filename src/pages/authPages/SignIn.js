import React from 'react';
import { 
  ActivityIndicator,
  KeyboardAvoidingView,
  StyleSheet,
  View,
} from 'react-native';

import api from '../../services/api';

export default class SignIn extends React.Component {
    state = {
        isRequesting: false,
    };

    loadForm = () => {
    return (
      <View style={styles.form}>

          
      </View>
    )
  }

  render () {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        { 
          this.state.isRequesting
          ? <ActivityIndicator size={'large'} color={'#33ace0'}/>
          : this.loadForm()
        }
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  form: {
    alignSelf: 'stretch',
    paddingHorizontal: 30,
    marginTop: 30,
  },
});