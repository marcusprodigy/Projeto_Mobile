import { Text, View, ScrollView, TouchableOpacity, SafeAreaView, StyleSheet } from 'react-native';
import Cardclientes from '../Components/Home/Cardclientes';
import React from 'react';


function Clientes({ navigation }) {

    return(
        
        <SafeAreaView style ={styles.container}>

            <View style ={styles.container1}></View>
            <ScrollView style ={styles.container2}>

                <Cardclientes Nome="Marcus Vinicius Lins Lemos Filho" CPF="808.090.142-20" Date="31/05/1999"/>
                <Cardclientes Nome="Marcus Vinicius Lins Lemos Filho" CPF="808.090.142-20" Date="31/05/1999"/>
                <Cardclientes Nome="Marcus Vinicius Lins Lemos Filho" CPF="808.090.142-20" Date="31/05/1999"/>
                <Cardclientes Nome="Marcus Vinicius Lins Lemos Filho" CPF="808.090.142-20" Date="31/05/1999"/>
                <Cardclientes Nome="Marcus Vinicius Lins Lemos Filho" CPF="808.090.142-20" Date="31/05/1999"/>
                
             
            </ScrollView>
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

    // QUADRO 
    container4:{
        position:'relative',
        alignSelf:'center',
        backgroundColor:'#000',
        width:'90%',
        height:180,
        borderRadius:10,
        paddingLeft:20,
        paddingTop:20,
    },

    txt1:{
        color:'#fff',
        fontSize:15,
        marginTop:3,

    },

    txt4:{
        position:'absolute',
        color:'#fff',
        fontSize:30,
        right:20,
        top:130,

    },
  
  });
  export default Clientes;