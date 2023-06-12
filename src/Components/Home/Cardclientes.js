import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function Cardclientes({ Nome, CPF, Date }) {
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
