import React from 'react';
import { 
  ActivityIndicator,
  Alert,
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

import { validate as validateCPF } from 'gerador-validador-cpf';

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

        const { nome, cpf, email, bairro, login, senha } = this.state;
        
        this.setState({ isRequesting: true });
        Keyboard.dismiss();
        
        api.put('/signup', { nome, cpf, email, bairro, login, senha })
          .then(response => response.data)
          .then(() => {
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
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View>

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
              onSubmitEditing={() => this.cpfInput.focus()}
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
              ref={(input) => this.cpfInput = input}
              onSubmitEditing={() => this.emailInput.focus()}
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
              ref={(input) => this.emailInput = input}
              onSubmitEditing={() => this.bairroInput.focus()}
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
              ref={(input) => this.bairroInput = input}
              onSubmitEditing={() => this.loginInput.focus()}
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
              ref={(input) => this.loginInput = input}
              onSubmitEditing={() => this.senhaInput.focus()}
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
              ref={(input) => this.senhaInput = input}
              onSubmitEditing={this.handleSubmit}
            />

            <View>
              <TouchableOpacity onPress={this.handleSubmit} disabled={!this.canSubmit()}
                style={[this.canSubmit() && styles.button, !this.canSubmit() && styles.buttonDisabled]}>
                <Text style={styles.buttonText}>Cadastrar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </View>
    )
  }

  render () {
    return (
      <View style={[!this.state.isRequesting && styles.container, this.state.isRequesting && styles.loading]}>
        {
          this.state.isRequesting
          ? <View style={styles.indicator}><ActivityIndicator style={styles.activity} size={'large'} color={'#33ace0'}/></View>
          : this.loadForm()
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  
  loading: {
    flex: 1,
    alignItems: 'center'
  },

  activity: {
    flex: 1,
    alignSelf: 'center',
  },

  form: {
    alignItems: 'stretch',
    paddingHorizontal: 30,
    marginTop: 20,
  },

  label: {
    fontWeight: 'bold',
    color: '#444',
    marginBottom: 5,
  },

  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    paddingHorizontal: 20,
    fontSize: 16,
    color: '#444',
    height: 44,
    marginBottom: 10,
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