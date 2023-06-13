import { Text, View, Image, SafeAreaView, StyleSheet } from 'react-native';
import Botaohome from '../Components/Login/Botoeshome';
import React from 'react';


function Home({ navigation }) {

    const logo = require('../../assets/logo.png')
    return(
        
        <SafeAreaView style ={styles.container}>

            <View style ={styles.container1}></View>
            <View style ={styles.container2}>

                <Image source={logo} style ={styles.logo} />
                <Botaohome titulo1="CADASTRAR  CLIENTE" titulo2="MEUS CLIENTE" info1={() => navigation.navigate('Cadastrar')} info2={() => navigation.navigate('Clientes')} exibirBotao2={true}/>
                <Botaohome titulo1="MINHA CONSULTAS" titulo2="MEUS CLIENTES" info1={() => navigation.navigate('MinhasConsultas')} info2={() => navigation.navigate('Clientes')} exibirBotao2={false} />



           
           
           </View>
            <View style ={styles.container3}></View>


        </SafeAreaView>
               


      )
  
  }
  
  const styles = StyleSheet.create({
    logo:{
        width:200,
        height:150,
        alignSelf:'center',
    },
    container: {
      flex: 1,
      backgroundColor:'#fff'
      // Defina os estilos desejados para o container aqui
    },

    container1:{
        backgroundColor:'#000',
        width:'100%',
        height:'7%',


    },
    container2:{
        width:'100%',
        height:'86%',


    },
    container3:{
        backgroundColor:'#000',
        width:'100%',
        height:'7%',


    },

  });
  export default Home;