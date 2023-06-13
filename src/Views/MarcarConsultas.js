import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SendIntent from 'react-native-send-intent';

function MarcarConsultas({ route, navigation }) {
  const { cliente } = route.params;
  const [dataConsulta, setDataConsulta] = useState('');
  const [horaConsulta, setHoraConsulta] = useState('');
  const [observacao, setObservacao] = useState('');

  const handleSalvarConsulta = async () => {
    try {
      // Obtém as consultas existentes do AsyncStorage
      const consultasSalvas = await AsyncStorage.getItem('Consultas');
      let consultas = [];

      if (consultasSalvas !== null) {
        // Converte as consultas existentes em um array de objetos
        consultas = JSON.parse(consultasSalvas);
      }

      // Adiciona a nova consulta ao array de objetos
      consultas.push({
        clienteId: cliente.id, // Supondo que o objeto cliente tenha uma propriedade "id"
        dataConsulta,
        horaConsulta,
        observacao,
      });

      // Salva o array de objetos atualizado no AsyncStorage
      await AsyncStorage.setItem('Consultas', JSON.stringify(consultas));
      console.log('Consulta agendada com sucesso!');

      // Limpa os campos do formulário
      setDataConsulta('');
      setHoraConsulta('');
      setObservacao('');

      // Envia mensagem por WhatsApp ao cliente
      const mensagem = `Olá ${cliente.nome}, sua consulta foi agendada para o dia ${dataConsulta} às ${horaConsulta}.`;
      SendIntent.sendText({
        title: 'Marcar Consulta',
        text: mensagem,
        type: SendIntent.TEXT_PLAIN,
        phone: cliente.numeroTelefone, // Supondo que o objeto cliente tenha uma propriedade "numeroTelefone"
      });

      // Redireciona para a página ClienteProfile
      navigation.navigate('ClienteProfile', { cliente: cliente });
    } catch (error) {
      console.log('Erro ao salvar a consulta:', error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.laudoContainer}>
        <Text style={styles.laudoTitle}>Laudo do Cliente</Text>
        <Text style={styles.laudoText}>Nome: {cliente.nome}</Text>
        <Text style={styles.laudoText}>CPF: {cliente.cpf}</Text>
        <Text style={styles.laudoText}>Data de Nascimento: {cliente.dataNascimento}</Text>
        {/* Adicione outras informações do cliente que desejar */}
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
});

export default MarcarConsultas;
