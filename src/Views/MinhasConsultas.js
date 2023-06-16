import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

function MinhasConsultas() {
  const [consultas, setConsultas] = useState([]);

  useEffect(() => {
    carregarConsultas();
  }, []);

  const carregarConsultas = async () => {
    try {
      const consultasSalvas = await AsyncStorage.getItem('Consultas');
      if (consultasSalvas !== null) {
        const consultasParseadas = JSON.parse(consultasSalvas);
        const consultasLimitadas = consultasParseadas.slice(0, 10).reverse(); // Limita para as 10 primeiras consultas e reverte a ordem
        setConsultas(consultasLimitadas);
      }
    } catch (error) {
      console.log('Erro ao carregar consultas:', error);
    }
  };
  const handleExcluirConsulta = async (consultaId) => {
    try {
      // Carrega as consultas salvas do AsyncStorage
      const consultasSalvas = await AsyncStorage.getItem('Consultas');
      if (consultasSalvas !== null) {
        const consultasParseadas = JSON.parse(consultasSalvas);
  
        // Encontra o índice da consulta com o id correspondente
        const consultaIndex = consultasParseadas.findIndex(consulta => consulta.id === consultaId);
  
        if (consultaIndex !== -1) {
          // Remove a consulta do array de consultas
          consultasParseadas.splice(consultaIndex, 1);
  
          // Salva as consultas atualizadas no AsyncStorage
          await AsyncStorage.setItem('Consultas', JSON.stringify(consultasParseadas));
  
          // Atualiza o estado das consultas
          setConsultas(consultasParseadas);
        }
      }
    } catch (error) {
      console.log('Erro ao excluir consulta:', error);
    }
  };
  
  
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <View style={styles.clienteContainer}>
        <Text style={styles.label}>Nome do Cliente:</Text>
        <Text>{item.clienteNome}</Text>
        <Text style={styles.label}>CPF:</Text>
        <Text>{item.clienteCPF}</Text>
        <Text style={styles.label}>Telefone do Cliente:</Text>
        <Text>{item.clienteTelefone}</Text>
      </View>
      <View style={styles.consultaContainer}>
        <Text style={styles.label}>Horário:</Text>
        <Text>{item.horaConsulta}</Text>
        <Text style={styles.label}>Observação:</Text>
        <Text>{item.observacao}</Text>
        <Text style={styles.label}>Data da Consulta:</Text>
        <Text>{item.dataConsulta}</Text>
      </View>
      <TouchableOpacity style={styles.deleteButton} onPress={() => handleExcluirConsulta(item.id)}>
        <Text style={styles.deleteButtonText}>Apagar Consulta</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Minhas Consultas</Text>
      {consultas.length > 0 ? (
        <FlatList
        data={consultas}
        renderItem={renderItem}
        keyExtractor={(item, index) => `consulta_${index}`} // Usando o índice como chave
        showsVerticalScrollIndicator={false} // Remove a barra de rolagem
      />
      ) : (
        <Text style={styles.noConsultasText}>Nenhuma consulta marcada.</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center', // Centraliza verticalmente o conteúdo
    width:'100%',
  },
  deleteButton: {
    backgroundColor: '#ff4d4d',
    padding: 8,
    borderRadius: 5,
    marginTop: 10,
    alignItems: 'center',
  },
  deleteButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  item: {
    width:'100%',
    marginBottom: 24,
    backgroundColor: '#f5f5f5',
    padding: 16,
    borderRadius: 8,
  },
  clienteContainer: {
    marginBottom: 8,
    
  },
  consultaContainer: {
    marginTop: 8,
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 4,
  },
  noConsultasText: {
    marginTop: 24,
    textAlign: 'center',
  },
});

export default MinhasConsultas;