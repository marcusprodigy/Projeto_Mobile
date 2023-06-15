import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function ConsultaCard({ consulta }) {
  return (
    <View style={styles.card}>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Data da Consulta:</Text>
        <Text>{consulta.dataConsulta}</Text>
        <Text style={styles.label}>Hora da Consulta:</Text>
        <Text>{consulta.horaConsulta}</Text>
        <Text style={styles.label}>Observação:</Text>
        <Text>{consulta.observacao}</Text>
      </View>
      <View style={styles.clienteContainer}>
        <Text style={styles.label}>Nome do Cliente:</Text>
        <Text>{consulta.clienteNome}</Text>
        <Text style={styles.label}>Telefone do Cliente:</Text>
        <Text>{consulta.clienteTelefone}</Text>
        <Text style={styles.label}>CPF:</Text>
        <Text>{consulta.clienteCPF}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#c2c5cc',
    padding: 16,
    borderRadius: 8,
    marginBottom: 24,
  },
  infoContainer: {
    marginBottom: 8,
  },
  clienteContainer: {
    marginTop: 8,
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 4,
  },
});

export default ConsultaCard;
