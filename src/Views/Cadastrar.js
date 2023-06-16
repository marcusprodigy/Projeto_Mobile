import { Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DatePicker from 'react-native-datepicker';
import { parse, isValid, format } from 'date-fns';

function Cadastrar({ navigation }) {
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [endereco, setEndereco] = useState('');
  const [numero, setNumero] = useState('');
  const [bairro, setBairro] = useState('');
  const [telefone, setTelefone] = useState('');

  const handleEnviar = async () => {
    // Verifica se o CPF possui apenas números
    if (!/^\d+$/.test(cpf)) {
      console.log('CPF inválido. Apenas números são permitidos.');
      return;
    }

    // Verifica se o número possui apenas números
    if (!/^\d+$/.test(numero)) {
      console.log('Número inválido. Apenas números são permitidos.');
      return;
    }

 
    const parsedDataNascimento = parse(dataNascimento, 'dd/MM/yyyy', new Date());
    if (!isValid(parsedDataNascimento) || parsedDataNascimento > new Date()) {
      console.log('Data de nascimento inválida. Utilize o formato dd/mm/yyyy.');
      return;
    }

    // Verifica se o telefone possui exatamente 11 dígitos
    if (telefone.length !== 11 || !/^\d+$/.test(telefone)) {
      console.log('Telefone inválido. O telefone deve conter exatamente 11 dígitos.');
      return;
    }

    try {
      // Obtém os dados existentes do AsyncStorage
      const dadosClientes = await AsyncStorage.getItem('Clientes');

      let clientesSalvos = [];
      if (dadosClientes !== null) {
        // Converte os dados existentes em um array de objetos
        clientesSalvos = JSON.parse(dadosClientes);
      }

      // Verifica se clientesSalvos é um array
      if (!Array.isArray(clientesSalvos)) {
        clientesSalvos = [];
      }
      const dataFormatada = format(parsedDataNascimento, 'dd/MM/yyyy');
      // Adiciona os novos dados ao array de objetos
      clientesSalvos.push({
        nome,
        cpf,
        dataNascimento: dataFormatada, // Salva a data formatada
        endereco,
        numero,
        bairro,
        telefone
      });
   
      // Salva o array de objetos atualizado no AsyncStorage
      await AsyncStorage.setItem('Clientes', JSON.stringify(clientesSalvos));
      console.log('Dados de cadastro salvos com sucesso!');

      // Navega para a próxima tela após salvar os dados
      navigation.navigate('Clientes');
    } catch (error) {
      console.log('Erro ao salvar os dados de cadastro:', error);
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View style={styles.container1}></View>
      <View style={styles.container2}>
        <TextInput
          style={styles.input}
          placeholder='Nome Completo'
          placeholderTextColor='gray'
          value={nome}
          onChangeText={setNome}
        />
        <TextInput
          style={styles.input}
          placeholder='CPF'
          placeholderTextColor='gray'
          value={cpf}
          onChangeText={setCpf}
          keyboardType='numeric'
        />
        <DatePicker
          style={styles.input}
          date={dataNascimento}
          mode="date"
          placeholder="Data de Nascimento"
          format="DD/MM/YYYY"
          confirmBtnText="Confirmar"
          cancelBtnText="Cancelar"
          customStyles={{
            dateInput: {
              borderWidth: 0,
              alignItems: 'flex-start',
            },
            dateText: {
              fontSize: 20,
              fontStyle: 'italic',
              color: 'gray',
            },
            placeholderText: {
              fontSize: 20,
              fontStyle: 'italic',
              color: 'gray',
            },
          }}
          onDateChange={(date) => setDataNascimento(date)}
          useNativeDriver={false}
        />

        <TextInput
          style={styles.input}
          placeholder='Endereço'
          placeholderTextColor='gray'
          value={endereco}
          onChangeText={setEndereco}
        />
        <TextInput
          style={styles.input}
          placeholder='Número'
          placeholderTextColor='gray'
          value={numero}
          onChangeText={setNumero}
          keyboardType='numeric'
        />
        <TextInput
          style={styles.input}
          placeholder='Bairro'
          placeholderTextColor='gray'
          value={bairro}
          onChangeText={setBairro}
        />
        <TextInput
          style={styles.input}
          placeholder='Telefone (ddd + num)'
          placeholderTextColor='gray'
          value={telefone}
          onChangeText={setTelefone}
          keyboardType='phone-pad'
        />

        <TouchableOpacity style={styles.button} onPress={handleEnviar}>
          <Text style={styles.buttonText}>ENVIAR</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container3}></View>
    </KeyboardAvoidingView>
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
    height: '100%',
    width: '100%',
    backgroundColor: '#fff'
  },
  container1: {
    backgroundColor: '#7b7b7b',
    width: '100%',
    height: '10%',
  },
  container2: {
    width: '100%',
    height: '80%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container3: {
    backgroundColor: '#7b7b7b',
    width: '100%',
    height: '10%',
  },
  input: {
    marginTop: 20,
    alignSelf: 'center',
    width: '80%',
    height: '8%',
    borderRadius: 10,
    borderWidth: 1,
    paddingLeft: 25,
    paddingRight: 25,
    fontSize: 20,
    fontStyle: 'italic',
  },
  button: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#7b7b7b',
    width: '50%',
    height: 65,
    borderRadius: 50,
    marginTop: 40,
  },
  buttonText: {
    color: '#FFF',
  },
});

export default Cadastrar;
