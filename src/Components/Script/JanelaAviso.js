import React, { useState } from 'react';
import { Modal, View, TouchableOpacity, Text, TextInput } from 'react-native';
import styles from '../styles/CadastroCli/popstyle'



function JanelaAviso({tituloquadro}) {

 

    const [isPopupVisible, setPopupVisible] = useState(false);
  
    const handleEnviarClick = () => {
      setPopupVisible(true);
    };
  
    const handlePopupClose = () => {
      setPopupVisible(false);
    };
  
    return (
      <View>
        <TouchableOpacity onPress={handleEnviarClick}>
            <Text style={styles.txtbuttoken}>Tenho um token</Text>
        </TouchableOpacity>
        <View style={styles.containermodal}>
          <Modal style={styles.modal} transparent={true} visible={isPopupVisible} animationType='fade'>
            {/* Conteúdo do popup */}
            <View style={styles.modalcaixa}>
              <Text style={styles.txttoken}>TOKEN</Text>
              
              <TextInput style={styles.input} placeholder='INSIRA AQUI SEU TOKEN' placeholderTextColor={'#E4E4E4'} fontStyle={'italic'} textAlign='center'/>

              <TouchableOpacity  onPress={handlePopupClose} style={styles.botao}>
                <Text style={styles.txtbotao}>Enviar</Text>
              </TouchableOpacity>
            </View>
          </Modal>
        </View>
      </View>
    );
  }
  
  export default JanelaAviso;
  