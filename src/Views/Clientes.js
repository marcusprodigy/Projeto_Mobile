import { View, ScrollView,TextInput, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native';
import Cardclientes from '../Components/Home/Cardclientes';
import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

function Clientes({ navigation }) {
  const [clientes, setClientes] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  

  //dados

  useEffect(() => {
    carregarClientes();
  }, []);

  const carregarClientes = async () => {
    try {
      const dadosClientes = await AsyncStorage.getItem('Clientes');
  
      if (dadosClientes !== null) {
        const clientesSalvos = JSON.parse(dadosClientes);
        setClientes(clientesSalvos);
      }
    } catch (error) {
      console.log('Erro ao carregar os clientes:', error);
    }
  };

  const handleVerPerfil = (cliente) => {
    // Navegar para a página de perfil do cliente, passando o objeto cliente como parâmetro
    navigation.navigate('ClienteProfile', { cliente: cliente });
  };


  //filtrar
  const filtrarClientes = () => {
    const clientesFiltrados = clientes.filter(
      (cliente) =>
        cliente.nome.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cliente.cpf.includes(searchQuery)
    );
    return clientesFiltrados;
  };

  
  const handleExcluirCliente = async (cpf) => {
    try {
      const dadosClientes = await AsyncStorage.getItem('Clientes');
      if (dadosClientes !== null) {
        const clientesSalvos = JSON.parse(dadosClientes);
        const clientesAtualizados = clientesSalvos.filter((cliente) => cliente.cpf !== cpf);
        await AsyncStorage.setItem('Clientes', JSON.stringify(clientesAtualizados));
        setClientes(clientesAtualizados);
      }
    } catch (error) {
      console.log('Erro ao excluir o cliente:', error);
    }
  };
  


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container1}>
      
      </View>

      <TextInput
        style={styles.searchInput}
        placeholder="Pesquisar por nome ou CPF"
        placeholderTextColor="gray"
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <ScrollView style={styles.container2}>
        {filtrarClientes().map((cliente, index) => (
          <TouchableOpacity key={index} onPress={() => handleVerPerfil(cliente)}>
            <Cardclientes
              Nome={cliente.nome}
              CPF={cliente.cpf}
              Date={cliente.dataNascimento}
              onDelete={handleExcluirCliente} // Certifique-se de passar a função handleExcluirCliente corretamente
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
  searchInput: {
    alignSelf:'center',
    marginTop:15,
    width: '80%',
    height: 40,
    borderRadius: 10,
    borderWidth: 1,
    paddingHorizontal: 10,
    fontSize: 16,
    fontStyle: 'italic',
  }, 
  
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container1: {
    backgroundColor: '#000',
    width: '100%',
    height: '10%',
    
  },
  container2: {
    marginTop:15,
    width: '100%',
    height: '80%',
  },
  container3: {
    backgroundColor: '#000',
    width: '100%',
    height: '10%',
  },
});

export default Clientes;