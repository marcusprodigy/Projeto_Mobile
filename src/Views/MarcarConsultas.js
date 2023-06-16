import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Linking } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { format } from 'date-fns';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import SendIntentAndroid from 'react-native-send-intent';

function MarcarConsultas({ route, navigation }) {
  const { cliente } = route.params;
  const [dataConsulta, setDataConsulta] = useState('');
  const [horaConsulta, setHoraConsulta] = useState('');
  const [observacao, setObservacao] = useState('');
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleDateConfirm = (date) => {
    setDataConsulta(format(date, 'dd/MM/yyyy'));
    hideDatePicker();
  };

  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };

  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };

  const handleTimeConfirm = (time) => {
    setHoraConsulta(format(time, 'HH:mm'));
    hideTimePicker();
  };

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
        clienteNome: cliente.nome, // Adiciona o nome do cliente à consulta
        clienteCPF: cliente.cpf, // Adiciona o CPF do cliente à consulta
        clienteDataNascimento: cliente.dataNascimento, // Adiciona a data de nascimento do cliente à consulta
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

      // Envia uma mensagem para o WhatsApp do cliente
      const mensagem = `Olá, ${cliente.nome}! Sua consulta foi marcada para o dia ${dataConsulta} às ${horaConsulta}, ${observacao}.`;
      const numeroWhatsApp = '55' + cliente.telefone; // Supondo que o objeto cliente tenha uma propriedade "telefone"
      const url = `https://api.whatsapp.com/send?phone=${numeroWhatsApp}&text=${encodeURIComponent(mensagem)}`;
      
      // Abre o WhatsApp com a mensagem pré-preenchida
      Linking.openURL(url);

      // Redireciona para a página ClienteProfile, passando o objeto cliente como parâmetro
      navigation.navigate('ClienteProfile', { cliente: cliente });
    } catch (error) {
      console.log('Erro ao salvar a consulta:', error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.laudoContainer}>
        <Text style={styles.laudoTitle}>Marcar Consulta</Text>
        <Text style={styles.laudoText}>Nome: {cliente.nome}</Text>
        <Text style={styles.laudoText}>CPF: {cliente.cpf}</Text>
        <Text style={styles.laudoText}>Data de Nascimento: {cliente.dataNascimento}</Text>
        {/* Adicione outras informações do cliente que desejar */}
      </View>
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.formContainer}>
          <Text style={styles.label}>Data da Consulta:</Text>
          <TouchableOpacity style={styles.dateButton} onPress={showDatePicker}>
            <Text style={styles.dateButtonText}>{dataConsulta || 'Selecionar Data'}</Text>
          </TouchableOpacity>
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={handleDateConfirm}
            onCancel={hideDatePicker}
          />

          <Text style={styles.label}>Hora da Consulta:</Text>
          <TouchableOpacity style={styles.timeButton} onPress={showTimePicker}>
            <Text style={styles.timeButtonText}>{horaConsulta || 'Selecionar Hora'}</Text>
          </TouchableOpacity>
          <DateTimePickerModal
            isVisible={isTimePickerVisible}
            mode="time"
            onConfirm={handleTimeConfirm}
            onCancel={hideTimePicker}
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
            <Text style={styles.buttonText}>Salvar e Enviar</Text>
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
    paddingTop: '15%',
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
  dateButton: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    justifyContent: 'center',
  },
  dateButtonText: {
    fontSize: 16,
  },
  timeButton: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    justifyContent: 'center',
  },
  timeButtonText: {
    fontSize: 16,
  },
  input: {
    height: 80,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    textAlignVertical: 'top',
  },
  button: {
    backgroundColor: '#7b7b7b',
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
