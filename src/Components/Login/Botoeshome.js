import { Text, View, TouchableOpacity,  StyleSheet } from 'react-native';
import React from 'react';


function Botaohome({ navigation, titulo1, titulo2, info1, info2}) {

    return(
        
                <View style ={styles.botaohome}>
                    <TouchableOpacity style ={styles.bott} onPress={info1}>
                        <Text style ={styles.txt}>{titulo1}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style ={styles.bott} onPress={info2}>
                        <Text style ={styles.txt}>{titulo2}</Text>
                    </TouchableOpacity>
                </View>



      )
  
  }
  
  const styles = StyleSheet.create({

    // botao
    botaohome:{
        flexDirection:'row',
        justifyContent:'space-around',

    },
    bott:{
        alignSelf:'center',
        
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#000',
        width:180,
        height:180,
        borderRadius:10,
        marginTop:30,

    },
    txt:{
        color:'#FFF',
    },
  
  });
  export default Botaohome;