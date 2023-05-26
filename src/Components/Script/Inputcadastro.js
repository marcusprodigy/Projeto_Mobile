import React from 'react'
import { TextInput, StyleSheet, View } from 'react-native'



const Inputcadastro = ({ Info, modelo}) => {
  return (
  
  <View style={styles.container}>
    <TextInput style={styles.inp} placeholder={Info} placeholderTextColor={'rgba(0, 0, 0, 0.5)'}  ></TextInput>
  </View>

  )
}

const styles = StyleSheet.create({
  container:{
    justifyContent:'center',

  },
    
    inp:{
        
        marginTop:30,
        paddingLeft:"8%",
        width:'100%',
        height:60,
        borderRadius:100,
        backgroundColor: 'transparent',
        borderWidth:1,
        fontStyle:'italic',
        

    },
  });

  
export default Inputcadastro