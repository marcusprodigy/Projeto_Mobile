import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

function MinhasConsultas({ consultas, clienteCPF }) {
  const [consultasMarcadas, setConsultasMarcadas] = useState([]);

  useEffect(() => {
    setConsultasMarcadas(consultas.reverse());
  }, [consultas]);

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
  
  const renderItem = ({ item }) => {
    if (item.clienteCPF !== clienteCPF) {
      return null; // Não renderiza a consulta se o CPF do cliente for diferente
    }

    return (
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
          <Text style={styles.label}>Data da Consulta:</Text>
          <Text>{item.dataConsulta}</Text>
          <Text style={styles.label}>Horário:</Text>
          <Text>{item.horaConsulta}</Text>
          <Text style={styles.label}>Observação:</Text>
          <Text>{item.observacao}</Text>
          
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Minhas Consultas</Text>
      {consultasMarcadas.length > 0 ? (
        <FlatList
          data={consultasMarcadas}
          renderItem={renderItem}
          keyExtractor={(index) => `consulta_${index}`}
          showsVerticalScrollIndicator={false}
          style={styles.flta}
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
    justifyContent: 'center',
    width: '100%',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  item: {
    marginTop:10,
    width: '100%',
    height:260,
    backgroundColor: '#115aee',
    padding: 16,
    borderRadius: 8,
    justifyContent:'space-around',
  },
  clienteContainer: {
    marginBottom: 8,
  },
  consultaContainer: {
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
