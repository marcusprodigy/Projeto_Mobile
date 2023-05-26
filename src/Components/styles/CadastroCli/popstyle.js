import { Platform, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // Defina os estilos desejados para o container aqui
  },

  buttoken:{
    alignSelf:'center',
    textAlign:'center',
    marginBottom:10,

  },
  txtbuttoken:{
      
      textAlign:'center',
      fontSize: Platform.OS === 'ios' ? 18 : 15,
      color:'rgba(0,53,73,1)',
      fontWeight:'bold',
      marginTop:-50,

  },

  containermodal:{
    width:'100%',
    height:'100%',
    
    

  },

  modal:{
    justifyContent:'center',
  },

  modalcaixa:{
    padding:20,    
    width:300,
    height:200,
    borderRadius:20,
    backgroundColor:'rgba(0,53,73,1)',
    alignSelf:'center',
    marginTop:300,
    justifyContent:'space-around',
  },

  txttoken:{
    
    height:50,
    margin:0,
    alignSelf:'center',
    fontSize: Platform.OS === 'ios' ? 50 : 50,
    fontWeight:'bold',
    color:'#fff',


  },

  input:{
    alignSelf:'center',
    width:'90%',
    height:35,
    borderRadius:20,
    backgroundColor:'#003F57',
    color:'#fff',

  },

  botao:{
    
    alignSelf:'center',
    width:'75%',
    height:40,
    backgroundColor:'#052632',
    borderRadius:20,

  },

  txtbotao:{
    color:'#fff',
    textAlign:'center',
    fontWeight:'bold',
    marginTop:5,
    fontSize:25,
    
  }
});

  export default styles;

