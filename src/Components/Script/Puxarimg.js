import React from 'react';
import { Image, View } from 'react-native';

const Puxarimg = () => {
  return (
    <View>
      <Image
        source={require('../../assets/logo')} // Substitua pelo caminho correto com o nome do arquivo e extensão
        style={{ width: 200, height: 200 }}
      />
    </View>
  );
};

export default Puxarimg;