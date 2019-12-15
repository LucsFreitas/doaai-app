import React, { useState } from 'react';
import { 
  Alert,
  AsyncStorage,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import logo from '../../assets/logo.png';
import api from '../services/api';

export default function Login({ navigation }) {
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');

  async function handleSubmit() {
    Keyboard.dismiss();
    
    api.post('/login', { login, senha })
      .then(response => response.data)
      .then((data) => {
        if (data.login){
          AsyncStorage.setItem('user', data.login);
          navigation.navigate('Home');
        }
        else {
          showIndicator = false;
          Alert.alert('Usuário/Senha inválidos');
        }
      })
      .catch( error => {
        console.log(error);
        showIndicator = false;
        Alert.alert('Desculpe, ocorreu um erro interno da aplicação.');
      });
  }

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <Image source={logo}/>
      
      <View style={styles.form}>
        <Text style={styles.label}>Login *</Text>
        <TextInput
          style={styles.input}
          placeholder="Seu login"
          placeholderTextColor="#999"
          autoCapitalize="none"
          autoCorrect={false}
          value={login}
          onChangeText={setLogin}
        />

        <Text style={styles.label}>Senha *</Text>
        <TextInput
          style={styles.input}
          placeholder="Senha..."
          placeholderTextColor="#999"
          secureTextEntry={true}
          value={senha}
          onChangeText={setSenha}
        />

        <TouchableOpacity onPress={handleSubmit} style={styles.button}>
          <Text style={styles.buttonText}>Conectar</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
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
    borderRadius: 2
  },

  button: {
    height: 42,
    backgroundColor: '#33ace0',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
  },

  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
});