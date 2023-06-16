import { Text, View, TextInput, TouchableOpacity, Image, SafeAreaView, StyleSheet } from 'react-native';
import React, { useState } from 'react';

function Login({ navigation }) {
  const [cpf, setCpf] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = () => {
    if (cpf === 'admin' && senha === '123') {
      navigation.navigate('Home');
    } else {
      alert('Credenciais inválidas');
    }
  };

  const logo = require('../../assets/logo.png');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container1}></View>
      <View style={styles.container2}>
        <Image source={logo} style={styles.logo} />
        <TextInput
          style={styles.input}
          placeholder="CPF"
          placeholderTextColor="gray"
          value={cpf}
          onChangeText={setCpf}
        />
        <TextInput
          style={styles.input}
          placeholder="SENHA"
          placeholderTextColor="gray"
          secureTextEntry={true}
          value={senha}
          onChangeText={setSenha}
        />
        <TouchableOpacity style={styles.bott} onPress={handleLogin}>
          <Text style={styles.txt}>LOGIN</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container3}></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 300,
    height: 250,
    alignSelf: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container1: {
    backgroundColor: '#7b7b7b',
    width: '100%',
    height: '7%',
  },
  container2: {
    width: '100%',
    height: '86%',
  },
  container3: {
    backgroundColor: '#7b7b7b',
    width: '100%',
    height: '7%',
  },
  input: {
    marginTop: 50,
    alignSelf: 'center',
    width: '80%',
    height: 55,
    borderRadius: 10,
    borderWidth: 1,
    paddingRight: 15,
    fontSize: 20,
    textAlign: 'center',
    fontStyle: 'italic',
  },
  bott: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#7b7b7b',
    width: '40%',
    height: 65,
    borderRadius: 50,
    marginTop: '15%',
  },
  txt: {
    color: '#FFF',
  },
});

export default Login;
