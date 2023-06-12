import { Text, View, TextInput, TouchableOpacity, SafeAreaView, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

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

    // Verifica se a data de nascimento está no formato correto
    if (!/^\d{2}\/\d{2}\/\d{4}$/.test(dataNascimento)) {
      console.log('Data de nascimento inválida. Utilize o formato dd/mm/yyyy.');
      return;
    }

    // Verifica se o número possui apenas números
    if (!/^\d+$/.test(numero)) {
      console.log('Número inválido. Apenas números são permitidos.');
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

      // Adiciona os novos dados ao array de objetos
      clientesSalvos.push({
        nome,
        cpf,
        dataNascimento,
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
    <SafeAreaView style={styles.container}>
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
        <TextInput
          style={styles.input}
          placeholder='Data de Nascimento (dd/mm/yyyy)'
          placeholderTextColor='gray'
          value={dataNascimento}
          onChangeText={setDataNascimento}
          keyboardType='numbers-and-punctuation'
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
          placeholder='Telefone'
          placeholderTextColor='gray'
          value={telefone}
          onChangeText={setTelefone}
          keyboardType='phone-pad'
        />

        <TouchableOpacity style={styles.bott} onPress={handleEnviar}>
          <Text style={styles.txt}>ENVIAR</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container3}></View>
    </SafeAreaView>
  );
}
  
  
  const styles = StyleSheet.create({
    logo:{
        width:300,
        height:250,
        alignSelf:'center',
    },
    container: {
      flex: 1,
      height:'100%',
      width:'100%',
      backgroundColor:'#fff'
      // Defina os estilos desejados para o container aqui
    },

    container1:{
        backgroundColor:'#000',
        width:'100%',
        height:'7%',
        top:-60,

    },
    container2:{
        width:'100%',
        height:'86%',


    },
    container3:{
        backgroundColor:'#000',
        width:'100%',
        height:'7%',
        bottom:-40,


    },

    input:{
        marginTop:20,
        alignSelf:'center',
        width:'80%',
        height:55,
        borderRadius:10,
        borderWidth:1,
        paddingLeft:25,
        paddingRight:25,
        fontSize:20,
        fontStyle:'italic',


    },
    bott:{
        alignSelf:'center',
        
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#000',
        width:'40%',
        height:65,
        borderRadius:50,
        marginTop:40,

    },
    txt:{
        color:'#FFF',
    },
  
  });
  export default Cadastrar;