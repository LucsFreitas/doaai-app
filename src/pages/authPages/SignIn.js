import React from 'react';
import { 
  ActivityIndicator,
  KeyboardAvoidingView,
  Alert,
  AsyncStorage,
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import { validate as validateCPF } from 'gerador-validador-cpf';
import { format as formatCPF } from 'gerador-validador-cpf'


import api from '../../services/api';

export default class SignIn extends React.Component {
    state = {
        login:"", 
        senha:"",
        nome:"",
        bairro:"",
        cpf:"", 
        email:"",    
        isRequesting: false,
    };

    static navigationOptions = {
      title: 'Cadastro'
    };

    handleSubmit = async () => {
      
      const cpfValido = validateCPF(this.state.cpf);
      if (!cpfValido) {
        Alert.alert('CPF inválido, digite novamente.');
      }

      if (this.canSubmit() && cpfValido) {
        this.setState({ isRequesting: true });
        Keyboard.dismiss();
        
        api.put('/signup', { login: this.state.login, nome: this.state.nome, senha: this.state.senha, bairro: this.state.bairro, cpf: this.state.cpf, email: this.state.email})
          .then(response => response.data)
          .then((data) => {
            this.setState({ isRequesting: false });
            this.props.navigation.navigate('Login');
        })
        .catch(() => {
          this.setState({ isRequesting: false });
          Alert.alert('Desculpe, ocorreu um erro interno da aplicação.');
        });
      }
    }

    canSubmit = () => {
      return this.state.login && this.state.nome && this.state.senha
      && this.state.bairro && this.state.cpf && this.state.email;
    }

    loadForm = () => {
    return (
      <View style={styles.form}>
        <Text style={styles.label}>Nome </Text>
        <TextInput
          style={styles.input}
          placeholder="Nome"
          placeholderTextColor="#999"
          autoCapitalize="none"
          autoCorrect={false}
          value={this.state.nome}
          onChangeText={(nome) => this.setState({ nome })}
          returnKeyType={'next'}
          blurOnSubmit={false}
        />

        <Text style={styles.label}>CPF </Text>
        <TextInput
          style={styles.input}
          placeholder="CPF"
          placeholderTextColor="#999"
          autoCapitalize="none"
          autoCorrect={false}
          value={this.state.cpf}
          onChangeText={(cpf) => this.setState({ cpf })}
          returnKeyType={'next'}
          blurOnSubmit={false}
          maxLength={11}
          keyboardType={'number-pad'}
        />

        <Text style={styles.label}>Email </Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#999"
          autoCapitalize="none"
          autoCorrect={false}
          value={this.state.email}
          onChangeText={(email) => this.setState({ email })}
          returnKeyType={'next'}
          blurOnSubmit={false}
          autoCompleteType={"email"}
          selectTextOnFocus={true}
          keyboardType={'email-address'}
        />       

        <Text style={styles.label}>Bairro </Text>
        <TextInput
          style={styles.input}
          placeholder="Bairro"
          placeholderTextColor="#999"
          value={this.state.bairro}
          onChangeText={(bairro) => this.setState({ bairro })}
          returnKeyType={'next'}
          blurOnSubmit={false}
        />

        <Text style={styles.label}>Login </Text>
        <TextInput
          style={styles.input}
          placeholder="Login"
          placeholderTextColor="#999"
          autoCapitalize="none"
          autoCorrect={false}
          value={this.state.login}
          onChangeText={(login) => this.setState({ login })}
          returnKeyType={'next'}
          blurOnSubmit={false}
          textContentType={'nickname'}
        />

        <Text style={styles.label}>Senha </Text>
        <TextInput
          style={styles.input}
          placeholder="Senha"
          placeholderTextColor="#999"
          secureTextEntry={true}
          value={this.state.senha}
          onChangeText={(senha) => this.setState({ senha })}
          ref={(input) => { this.senhaInput = input; }}
          onSubmitEditing={this.handleSubmit}
        />

        <View style={styles.buttons}>
          <TouchableOpacity onPress={this.handleSubmit} disabled={!this.canSubmit()}
            style={[this.canSubmit() && styles.button, !this.canSubmit() && styles.buttonDisabled]}>
            <Text style={styles.buttonText}>Cadastrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  render () {
    return (
      <KeyboardAvoidingView behavior="posicion" style={styles.container}>
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
    alignItems: 'stretch'
  },

  form: {
    alignItems: 'stretch',
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