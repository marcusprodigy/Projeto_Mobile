import { Text, View, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import styles from '../Components/styles/CadastroCli/style';
import Inputcadastro from '../Components/Script/Inputcadastro';

function Inicial({ navigation }) {


    return(

      <View style={styles.container}>
        <View style={styles.containerh}></View>
        <ScrollView showsVerticalScrollIndicator={false} style={styles.prompt}>
            <Text style={styles.titulo}>CADASTRO PACIENTE</Text>
            <Inputcadastro Info="Nome" />
            <Inputcadastro  Info="Data de Nascimento"/>
            <Inputcadastro Info="Telefone"/>                
            <Inputcadastro  Info="CPF"/>
            <Inputcadastro Info="Endereço"/>
            <Inputcadastro Info="Informações Adicionais..."/>
            <TouchableOpacity style={styles.botaofoot}>
                <Text style={styles.textobotao} onPress={() => navigation.navigate('Inicial')} >Enviar</Text>
            </TouchableOpacity>

        </ScrollView>
        <View style={styles.containerf}></View>
      </View>

      
      )
  
  }

  export default Inicial;