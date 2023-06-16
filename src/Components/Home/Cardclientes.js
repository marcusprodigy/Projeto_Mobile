import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

function Cardclientes({ Nome, CPF, Date, clienteAberto, onDelete }) {

  const handleExcluir = () => {
    onDelete(CPF);
  };

  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Nome:</Text>
        <Text style={styles.text}>{Nome}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>CPF:</Text>
        <Text style={styles.text}>{CPF}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Data de Nascimento:</Text>
        <Text style={styles.text}>{Date}</Text>
      </View>
      {CPF === clienteAberto?.cpf && (
        <View style={styles.infoContainer}>
          <Text style={styles.label}>Cliente Aberto</Text>
        </View>
      )}
      <TouchableOpacity style={styles.deleteButton} onPress={handleExcluir}>
        <Text style={styles.deleteButtonText}>Excluir</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f3f3f3',
    borderRadius: 10,
    marginHorizontal: 10,
    marginVertical: 8,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
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
  infoContainer: {
    marginBottom: 8,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  text: {
    fontSize: 14,
    color: '#666',
  },
});

export default Cardclientes;
