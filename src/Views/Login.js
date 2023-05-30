import { Text, View, TextInput, TouchableOpacity, Image, SafeAreaView, StyleSheet } from 'react-native';
import React from 'react';


function Login({ navigation }) {

    const logo = require('../../assets/logo.png')
    return(
        
        <SafeAreaView style ={styles.container}>

            <View style ={styles.container1}></View>
            <View style ={styles.container2}>

                <Image source={logo} style ={styles.logo} />

                <TextInput style ={styles.input} placeholder='CPF' placeholderTextColor='gray'></TextInput>
                <TextInput style ={styles.input} placeholder='SENHA' placeholderTextColor='gray' secureTextEntry={true}></TextInput>


                <TouchableOpacity style ={styles.bott}>
                    <Text style ={styles.txt}>LOGIN</Text>
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


    },
    container3:{
        backgroundColor:'#000',
        width:'100%',
        height:'7%',


    },

    input:{
        marginTop:50,
        alignSelf:'center',
        width:'70%',
        height:55,
        borderRadius:10,
        borderWidth:1,
        paddingRight:15,
        fontSize:20,
        textAlign:'center',
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


    },
    txt:{
        color:'#FFF',
    },
  
  });
  export default Login;