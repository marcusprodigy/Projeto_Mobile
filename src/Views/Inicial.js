import { Text, View } from 'react-native';
import React from 'react';
import styles from '../Components/styles/Inicial/styles';
import { TouchableOpacity } from 'react-native';

function Inicial({ navigation }) {


    return(

      <View style={styles.container}>
        <View style={styles.containerh}></View>
        <View style={styles.prompt}>
          
          <View style={styles.containertext}><Text>Olá,</Text><Text style={styles.textnome}>Marcus Vinicius Lins Lemos Filho</Text></View>
          <View style={styles.containerquadros}>
            <View style={styles.containerbotao}>
              <TouchableOpacity style={styles.botaotela} onPress={() => navigation.navigate('CadastroCli')}><Text style={styles.Textbotao}> Cadastrar</Text><Text style={styles.Textbotao}>Cliente</Text></TouchableOpacity>
              <TouchableOpacity style={styles.botaotela}><Text style={styles.Textbotao}>Marcar</Text><Text style={styles.Textbotao}>Consulta</Text></TouchableOpacity>
            </View>
            
        
        
            <View style={styles.containerbotao}>
              <TouchableOpacity style={styles.botaotela}><Text style={styles.Textbotao}>Consultas</Text><Text style={styles.Textbotao}>Marcadas</Text></TouchableOpacity>
              <TouchableOpacity style={styles.botaotela}><Text style={styles.Textbotao}>Criar</Text><Text style={styles.Textbotao}>Comanda</Text></TouchableOpacity>
            </View>
            <View style={styles.containerbotao}>
              <TouchableOpacity style={styles.botaoretangulo}><Text style={styles.Textbotao}>HISTÓRICO DE CONSULTA</Text></TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.containerf}></View>
      </View>

      
      )
  
  }

  export default Inicial;