import { Text, View, SafeAreaView, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';

function ClienteProfile({ route, navigation }) {
  const { cliente } = route.params;
  const [consultasMarcadas, setConsultasMarcadas] = useState([]);

  useEffect(() => {
    console.log('Dados do cliente:', cliente);
  }, []);

  const handleNavigateToPage = () => {
    // Navegar para a página desejada
    navigation.navigate('MarcarConsultas', { cliente: cliente, adicionarConsulta: adicionarConsultaMarcada });
  };

  const adicionarConsultaMarcada = (consulta) => {
    setConsultasMarcadas((prevConsultas) => [...prevConsultas, consulta]);
  };

  const handleConsultaPress = (consulta) => {
    // Faça algo quando o botão da consulta for pressionado
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
        <ScrollView contentContainerStyle={styles.consultasContainer}>
          {consultasMarcadas.map((consulta, index) => (
            <TouchableOpacity
              style={styles.consultaItem}
              key={index}
              onPress={() => handleConsultaPress(consulta)}
            >
              <Text>Data: {consulta.data}</Text>
              <Text>Hora: {consulta.hora}</Text>
              <Text>Observação: {consulta.observacao}</Text>
            </TouchableOpacity>
          ))}

          
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
