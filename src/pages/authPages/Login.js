import React from 'react';
import { 
  ActivityIndicator,
  Alert,
  AsyncStorage,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { Header } from 'react-navigation-stack';

import logo from '../../../assets/logo.png';
import api from '../../services/api';

export default class Login extends React.Component {
  state = {
    login: "",
    senha: "",
    isRequesting: false,
  };

  static navigationOptions = {
    headerShown: false
  };

  handleSubmit = async () => {
    if (this.canSubmit()) {
      this.setState({ isRequesting: true });
      Keyboard.dismiss();
      
      api.post('/login', { login: this.state.login, senha: this.state.senha })
        .then(response => response.data)
        .then((data) => {
          this.setState({ isRequesting: false });
          if (data){
            AsyncStorage.setItem('doador', data.toString());
            this.props.navigation.navigate('DoacoesPendentes');
          }
          else {
            Alert.alert('Usuário/Senha inválidos');
        }
      })
      .catch(() => {
        this.setState({ isRequesting: false });
        Alert.alert('Desculpe, ocorreu um erro interno da aplicação.');
      });
    }
  }

  signIn = () => {
    this.props.navigation.navigate('SignIn');
  }

  canSubmit = () => {
    return this.state.login && this.state.senha;
  }

  loadForm = () => {
    return (
      <View style={styles.form}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View>
            <Text style={styles.label}>Login *</Text>
            <TextInput
              style={styles.input}
              placeholder="Seu login"
              placeholderTextColor="#999"
              autoCapitalize="none"
              autoCorrect={false}
              value={this.state.login}
              onChangeText={(login) => this.setState({ login })}
              returnKeyType={'next'}
              blurOnSubmit={false}
              onSubmitEditing={() => this.senhaInput.focus()}
            />

            <Text style={styles.label}>Senha *</Text>
            <TextInput
              style={styles.input}
              placeholder="Senha..."
              placeholderTextColor="#999"
              secureTextEntry={true}
              value={this.state.senha}
              onChangeText={(senha) => this.setState({ senha })}
              ref={(input) => this.senhaInput = input}
              onSubmitEditing={this.handleSubmit}
            />

            <View style={styles.buttons}>
              <TouchableOpacity onPress={this.handleSubmit} disabled={!this.canSubmit()}
                style={[this.canSubmit() && styles.button, !this.canSubmit() && styles.buttonDisabled]}>
                <Text style={styles.buttonText}>Conectar</Text>
              </TouchableOpacity>
              
              <Text style={styles.signIn}>{`Ainda não é cadastrado? `}
                <Text onPress={this.signIn} style={styles.signInButton}>Cadastre-se aqui.</Text>
              </Text>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </View>
    )
  }

  render () {
    return (
      <KeyboardAvoidingView keyboardVerticalOffset={Header.HEIGHT + 20} behavior="padding" style={styles.container}>
        <Image source={logo}/>
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

  label: {
    fontWeight: 'bold',
    color: '#444',
    marginBottom: 8,
  },

  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    paddingHorizontal: 20,
    fontSize: 16,
    color: '#444',
    height: 44,
    marginBottom: 20,
    borderRadius: 20
  },

  button: {
    height: 42,
    backgroundColor: '#33ace0',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    paddingHorizontal: 20,
    marginHorizontal: 60
  },

  buttonDisabled: {
    height: 42,
    backgroundColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    marginHorizontal: 60
  },

  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },

  signIn: {
    marginTop: 15,
    alignSelf: 'center',
  },

  signInButton: {
    fontWeight: 'bold',
    textDecorationLine: 'underline'
  },

  
});