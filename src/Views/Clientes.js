import { View, ScrollView, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native';
import Cardclientes from '../Components/Home/Cardclientes';
import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

function Clientes({ navigation }) {
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    carregarClientes();
  }, []);

  const carregarClientes = async () => {
    try {
      const dadosClientes = await AsyncStorage.getItem('Clientes');
      console.log('Dados do AsyncStorage:', dadosClientes); // Verifique os dados retornados
  
      if (dadosClientes !== null) {
        const clientesSalvos = JSON.parse(dadosClientes);
        console.log('Clientes salvos:', clientesSalvos); // Verifique se os clientes são um array válido
        setClientes(clientesSalvos);
      }
    } catch (error) {
      console.log('Erro ao carregar os clientes:', error);
    }
  };

  const handleVerPerfil = (cliente) => {
    // Navegar para a página de perfil do cliente, passando o objeto cliente como parâmetro
    navigation.navigate('ClienteProfile', { cliente });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container1}></View>
      <ScrollView style={styles.container2}>
        {clientes.map((cliente, index) => (
          <TouchableOpacity key={index} onPress={() => handleVerPerfil(cliente)}>
            <Cardclientes
              Nome={cliente.nome}
              CPF={cliente.cpf}
              Date={cliente.dataNascimento}
            />
          </TouchableOpacity>
        ))}
      </ScrollView>
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
    backgroundColor: '#000',
    width: '100%',
    height: '7%',
    top: -60,
  },
  container2: {
    width: '100%',
    height: '86%',
  },
  container3: {
    backgroundColor: '#000',
    width: '100%',
    height: '7%',
    bottom: -40,
  },
});

export default Clientes;