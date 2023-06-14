import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Linking } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import PDFLib, { PDFDocument, PDFPage } from 'react-native-pdf-lib';

// Função adicionarConsultaId
function adicionarConsultaId() {
  // Implemente sua lógica aqui
}

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

  const handleSalvarConsulta = async (adicionarConsultaFn) => {
    try {
      const consultasSalvas = await AsyncStorage.getItem('Consultas');
      let consultas = [];

      if (consultasSalvas !== null) {
        consultas = JSON.parse(consultasSalvas);
      }

      consultas.push({
        clienteId: cliente.id,
        clienteNome: cliente.nome,
        clienteTelefone: cliente.telefone, 
        dataConsulta,
        horaConsulta,
        observacao,
      });

      adicionarConsulta();

      await AsyncStorage.setItem('Consultas', JSON.stringify(consultas));
      console.log('Consulta agendada com sucesso!');

      // Criação do PDF
      const pdfPath = await createPDF(cliente, dataConsulta, horaConsulta, observacao);
      console.log('PDF criado:', pdfPath);

      setDataConsulta('');
      setHoraConsulta('');
      setObservacao('');

      // Chamando a função adicionarConsultaId
      adicionarConsultaId();
      adicionarConsulta();
    } catch (error) {
      console.log('Erro ao salvar a consulta:', error);
    }
  };

  const createPDF = async (cliente, dataConsulta, horaConsulta, observacao) => {
    const pdfPath = `${PDFLib.CacheDirectoryPath}/consulta.pdf`;

    const page1 = PDFPage.create()
      .setMediaBox(595.276, 841.890) // Tamanho A4
      .drawText(`Nome: ${cliente.nome}`, {
        x: 50,
        y: 750,
        color: '#000000',
        fontName: 'Helvetica',
        fontSize: 16,
      })
      .drawText(`CPF: ${cliente.cpf}`, {
        x: 50,
        y: 700,
        color: '#000000',
        fontName: 'Helvetica',
        fontSize: 16,
      })
      .drawText(`Data de Nascimento: ${cliente.dataNascimento}`, {
        x: 50,
        y: 650,
        color: '#000000',
        fontName: 'Helvetica',
        fontSize: 16,
      })
      .drawText(`Data da Consulta: ${dataConsulta}`, {
        x: 50,
        y: 600,
        color: '#000000',
        fontName: 'Helvetica',
        fontSize: 16,
      })
      .drawText(`Hora da Consulta: ${horaConsulta}`, {
        x: 50,
        y: 550,
        color: '#000000',
        fontName: 'Helvetica',
        fontSize: 16,
      })
      .drawText(`Observação: ${observacao}`, {
        x: 50,
        y: 500,
        color: '#000000',
        fontName: 'Helvetica',
        fontSize: 16,
      });

    const pdfDoc = PDFDocument.create(pdfPath);
    pdfDoc.addPages(page1);
    await PDFLib.writeAsync(pdfDoc).catch((error) => {
      throw new Error(`Failed to create PDF: ${error}`);
    });

    return pdfPath;
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
