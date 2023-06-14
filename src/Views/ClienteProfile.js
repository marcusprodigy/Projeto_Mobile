import React, { useEffect, useState } from 'react';
import { Text, View, SafeAreaView, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import MinhasConsultas from './MinhasConsultas';
import AsyncStorage from '@react-native-async-storage/async-storage';

function ClienteProfile({ route, navigation }) {
  const { cliente } = route.params;
  const [consultasMarcadas, setConsultasMarcadas] = useState([]);

  useEffect(() => {
    fetchConsultasMarcadas();
  }, []);

  const fetchConsultasMarcadas = async () => {
    try {
      const consultasSalvas = await AsyncStorage.getItem('Consultas');
      const consultas = consultasSalvas ? JSON.parse(consultasSalvas) : [];
      setConsultasMarcadas(consultas);
    } catch (error) {
      console.log('Erro ao buscar as consultas:', error);
    }
  };

  const handleNavigateToPage = () => {
    navigation.navigate('MarcarConsultas', {
      cliente,
      adicionarConsultaId: adicionarConsultaId,
      adicionarConsulta: adicionarConsultaMarcada,
    });
  };

  const adicionarConsultaId = (consultaId) => {
    console.log('ID da consulta:', consultaId);
  };

  const adicionarConsultaMarcada = async (consulta) => {
    try {
      const consultasSalvas = await AsyncStorage.getItem('Consultas');
      const consultas = consultasSalvas ? JSON.parse(consultasSalvas) : [];
      consultas.push(consulta);
      await AsyncStorage.setItem('Consultas', JSON.stringify(consultas));
      setConsultasMarcadas(consultas);
    } catch (error) {
      console.log('Erro ao salvar as consultas:', error);
    }
  };

  const handleConsultaPress = (consulta) => {
    console.log('Consulta pressionada:', consulta);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.clienteInfoContainer}>
          {Object.entries(cliente).map(([key, value]) => (
            <View style={styles.clienteInfoRow} key={key}>
              <View style={styles.clienteInfoBox}>
                <Text style={styles.clienteInfoKey}>{key}:</Text>
              </View>
              <View style={styles.clienteInfoBox}>
                <Text style={styles.clienteInfoValue}>{value}</Text>
              </View>
            </View>
          ))}
        </View>
        <ScrollView>
          <MinhasConsultas cpf={cliente.cpf} />
        </ScrollView>
      </ScrollView>
      <TouchableOpacity style={styles.footerButton} onPress={handleNavigateToPage}>
        <Text style={styles.footerButtonText}>Criar Consultas</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    paddingTop:24,
    flex: 1,
    backgroundColor: '#fff',
  },
  consultasContainer: {
    flexGrow: 1,
    alignItems: 'center',
    marginTop: 20,
  },
  scrollContainer: {
    
    paddingTop:15,
    flexGrow: 1,
    alignItems: 'center',
    paddingTop: 20,
  },
  clienteInfoContainer: {
    width: '80%',
  },
  clienteInfoRow: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  clienteInfoBox: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 10,
    marginRight: 10,
    borderRadius: 5,
  },
  clienteInfoKey: {
    fontWeight: 'bold',
    color: '#333',
  },
  clienteInfoValue: {
    color: '#555',
  },
  footerButton: {
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
  },
  footerButtonText: {
    color: '#FFF',
    fontSize: 16,
  },
  consultasContainer: {
    flexGrow: 1,
    alignItems: 'center',
    marginTop: 20,
  },
  consultaItem: {
    backgroundColor: '#F5F5F5',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
  },
});

export default ClienteProfile;
