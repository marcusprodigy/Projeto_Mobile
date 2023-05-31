import { Text,  TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';


function Cardclientes({ Nome, CPF, Date, Tag }) {

    return(


        <TouchableOpacity style ={styles.container4}>
            <Text style ={styles.txt1}>{Nome}</Text>
            <Text style ={styles.txt1}>CPF: {CPF}</Text>
            <Text style ={styles.txt1}>{Date}</Text>
            <Text style ={styles.txt4}>#1</Text>

        </TouchableOpacity>
 
               


      )
  
  }
  
  const styles = StyleSheet.create({

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
        marginBottom:15,
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
  export default Cardclientes;