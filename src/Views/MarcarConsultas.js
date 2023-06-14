import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Linking } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

function MarcarConsultas({ route, navigation }) {
  const { cliente, adicionarConsultaId, adicionarConsulta } = route.params || {};
  const [dataConsulta, setDataConsulta] = useState('');
  const [horaConsulta, setHoraConsulta] = useState('');
  const [observacao, setObservacao] = useState('');

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => handleSalvarConsulta(adicionarConsultaId)}>
          <Text style={styles.headerButtonText}>Salvar</Text>
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  const handleSalvarConsulta = async () => {
    // Create a consultation object using the entered data
    const consulta = {
      dataConsulta,
      horaConsulta,
      observacao,
      clienteCPF: cliente.cpf, // Adicione o CPF do cliente à consulta
    };
  
    // Call the adicionarConsultaId function passed in the route params to update the consultations in ClienteProfile
    adicionarConsultaId();
  
    // Call the adicionarConsulta function passed in the route params to add the new consultation
    adicionarConsulta(consulta);
  
    // Save the consultation data in AsyncStorage or any other storage mechanism as required
    try {
      const consultasSalvas = await AsyncStorage.getItem('Consultas');
      const consultas = consultasSalvas ? JSON.parse(consultasSalvas) : [];
      consultas.push(consulta);
      await AsyncStorage.setItem('Consultas', JSON.stringify(consultas));
    } catch (error) {
      console.log('Erro ao salvar as consultas:', error);
    }
  
    // Navigate back to ClienteProfile
    navigation.goBack();
  };
  


  return (
    <View style={styles.container}>
      <View style={styles.laudoContainer}>
        <Text style={styles.laudoTitle}>Laudo do Cliente</Text>
        <Text style={styles.laudoText}>Nome: {cliente ? cliente.nome : ''}</Text>
        <Text style={styles.laudoText}>CPF: {cliente ? cliente.cpf : ''}</Text>
        <Text style={styles.laudoText}>Telefone: {cliente ? cliente.telefone : ''}</Text>
        <Text style={styles.laudoText}>Data de Nascimento: {cliente ? cliente.dataNascimento : ''}</Text>
      </View>
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.formContainer}>
          <Text style={styles.label}>Data da Consulta:</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite a data da consulta"
            value={dataConsulta}
            onChangeText={setDataConsulta}
          />
          <Text style={styles.label}>Hora da Consulta:</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite a hora da consulta"
            value={horaConsulta}
            onChangeText={setHoraConsulta}
          />
          <Text style={styles.label}>Observação:</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite uma observação"
            value={observacao}
            onChangeText={setObservacao}
            multiline
          />
          <TouchableOpacity style={styles.button} onPress={handleSalvarConsulta}>
            <Text style={styles.buttonText}>Salvar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: '15%',
    flex: 1,
    backgroundColor: '#fff',
  },
  laudoContainer: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  laudoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  laudoText: {
    fontSize: 16,
    marginBottom: 5,
  },
  scrollContainer: {
    flex: 1,
    marginTop: 20,
    paddingHorizontal: 20,
  },
  formContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  headerButtonText: {
    color: '#000',
    fontSize: 16,
    marginRight: 10,
  },
});

export default MarcarConsultas;
