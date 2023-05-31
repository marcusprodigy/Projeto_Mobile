import { Text, View, TextInput, TouchableOpacity, SafeAreaView, StyleSheet } from 'react-native';
import React from 'react';


function Cadastrar({ navigation }) {

    return(
        
        <SafeAreaView style ={styles.container}>

            <View style ={styles.container1}></View>
            <View style ={styles.container2}>

                <TextInput style ={styles.input} placeholder='Nome Completo' placeholderTextColor='gray'/>
                <TextInput style ={styles.input} placeholder='CPF' placeholderTextColor='gray'/>
                <TextInput style ={styles.input} placeholder='Data de Nascimento' placeholderTextColor='gray'/>
                <TextInput style ={styles.input} placeholder='Endereço' placeholderTextColor='gray'/>
                <TextInput style ={styles.input} placeholder='Numero' placeholderTextColor='gray'/>
                <TextInput style ={styles.input} placeholder='Bairro' placeholderTextColor='gray'/>
                <TextInput style ={styles.input} placeholder='Telefone' placeholderTextColor='gray'/>

                <TouchableOpacity style ={styles.bott}>
                    <Text style ={styles.txt}>ENVIAR</Text>
                </TouchableOpacity>
            </View>
            <View style ={styles.container3}></View>


        </SafeAreaView>
               


      )
  
  }
  
  const styles = StyleSheet.create({
    logo:{
        width:300,
        height:250,
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
        paddingTop:20,


    },
    container3:{
        backgroundColor:'#000',
        width:'100%',
        height:'7%',


    },

    input:{
        marginTop:20,
        alignSelf:'center',
        width:'80%',
        height:55,
        borderRadius:10,
        borderWidth:1,
        paddingLeft:25,
        paddingRight:25,
        fontSize:20,
        fontStyle:'italic',


    },
    bott:{
        alignSelf:'center',
        
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#000',
        width:'40%',
        height:65,
        borderRadius:50,
        marginTop:80,

    },
    txt:{
        color:'#FFF',
    },
  
  });
  export default Cadastrar;