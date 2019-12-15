import React from 'react';
import { 
  ActivityIndicator,
  KeyboardAvoidingView,
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';

import { validate as validateCPF } from 'gerador-validador-cpf';

import api from '../../services/api';

export default class SignIn extends React.Component {
    state = {
        senha:"",
        nome:"",
        idade:"",
        bairro:"",
        cpf:"", 
        email:"",    
        isRequesting: false,
    };

    // handleSubmit = async () => {
    //   if (this.canSubmit()) {
    //     this.setState({ isRequesting: true });
    //     Keyboard.dismiss();
        
    //     api.singup('/login', { login: this.state.login, senha: this.state.senha })
    //       .then(response => response.data)
    //       .then((data) => {
    //         this.setState({ isRequesting: false });
    //         if (data){
    //           AsyncStorage.setItem('doador', data.toString());
    //           this.props.navigation.navigate('DoacoesPendentes');
    //         }
    //         else {
    //           Alert.alert('Usuário/Senha inválidos');
    //       }
    //     })
    //     .catch(() => {
    //       this.setState({ isRequesting: false });
    //       Alert.alert('Desculpe, ocorreu um erro interno da aplicação.');
    //     });
    //   }
    // }


    loadForm = () => {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.form}>
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
          keyboardType={"number-pad"}
        />

        <Text style={styles.label}>Idade </Text>
        <TextInput
          style={styles.input}
          placeholder="Idade"
          placeholderTextColor="#999"
          autoCapitalize="none"
          autoCorrect={false}
          value={this.state.idade}
          onChangeText={(idade) => this.setState({ idade })}
          returnKeyType={'next'}
          blurOnSubmit={false}
          maxLength={2}
          keyboardType={"number-pad"}
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
          keyboardType={"email-address"}
        />       

        <Text style={styles.label}>Bairro </Text>
        <TextInput
          style={styles.input}
          placeholder="Bairro"
          placeholderTextColor="#999"
          autoCapitalize="none"
          autoCorrect={false}
          value={this.state.bairro}
          onChangeText={(bairro) => this.setState({ bairro })}
          returnKeyType={'next'}
          blurOnSubmit={false}
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
      </KeyboardAvoidingView>
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

});