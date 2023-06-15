import React, { useEffect, useState } from 'react';
import { Text, View, SafeAreaView, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MinhasConsultas from './MinhasConsultas';

function ClienteProfile({ route, navigation }) {
  const { cliente } = route.params;
  const [consultasMarcadas, setConsultasMarcadas] = useState([]);

  useEffect(() => {
    fetchConsultasMarcadas();
  }, []);

  const fetchConsultasMarcadas = async () => {
    try {
      const consultasSalvas = await AsyncStorage.getItem('Consultas');
      console.log(consultasSalvas);
      const consultas = consultasSalvas ? JSON.parse(consultasSalvas) : [];
      console.log(consultas);
      const consultasCliente = consultas.filter(consulta => consulta.clienteCPF === cliente.cpf);
      console.log(consultasCliente);
      setConsultasMarcadas(consultasCliente);
    } catch (error) {
      console.log('Erro ao buscar as consultas:', error);
    }
  };

  const handleNavigateToPage = () => {
    navigation.navigate('MarcarConsultas', { cliente: cliente });
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
        <View style={styles.consultasContainer}>
          <Text style={styles.consultasTitle}>Consultas Marcadas:</Text>
          {consultasMarcadas.length > 0 ? (
            <MinhasConsultas
              consultas={consultasMarcadas.filter(item => consulta.clienteCPF === item.cpf)}
            />
          
          ) : (
            <Text style={styles.noConsultasText}>Nenhuma consulta marcada.</Text>
          )}
        </View>
      </ScrollView>
      <TouchableOpacity style={styles.footerButton} onPress={handleNavigateToPage}>
        <Text style={styles.footerButtonText}>Criar Consultas</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 24,
    flex: 1,
    backgroundColor: '#fff',
  },
  consultasContainer: {
    flexGrow: 1,
    alignItems: 'center',
    marginTop: 20,
  },
  scrollContainer: {
    paddingTop: 15,
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
  consultasTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  noConsultasText: {
    fontStyle: 'italic',
  },
});

export default ClienteProfile;
