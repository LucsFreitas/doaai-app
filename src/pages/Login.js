import React, { useState, useEffect } from 'react';
import { Alert, AsyncStorage, Image, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

import logo from '../../assets/logo.png';

export default function Login({ navigation }) {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    AsyncStorage.getItem('user').then(user => {
      if (user) {
        navigation.navigate('Home');
      }
    })
  }, []);

  async function handleSubmit() {
    if (login === "admin" && password === "123") {
        await AsyncStorage.setItem('user', login);
        navigation.navigate('Home');
    }
    else {
        Alert.alert('Login e/ou Senha inválidos.');
    }
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
          value={password}
          onChangeText={setPassword}
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