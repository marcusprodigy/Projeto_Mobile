import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    container: {

      flex:1,
      backgroundColor: '#fff',
      width: '100%',
      height: '100%',

    },

    containerh:{
        width:'100%',
        height:'5%',
        backgroundColor:'#559DED',


    },
    prompt:{

        width:'100%',
        height:'90%',
        backgroundColor: '#fff',

        padding:'7%',

    },

    containerf:{
        width:'100%',
        height:'5%',
        backgroundColor:'#559DED',
        
    },

    containertext:{
        flexDirection:'row',

    },
    textnome:{

        marginLeft:4,
        color:'#559DED',
        fontWeight:'bold',
    },
    containerbotao:{
        width:'100%',
        flexDirection:'row',
        marginTop:'10%',
        justifyContent:'space-around',
        textAlign:'center',



    },

    botaotela:{
        width:170,
        height:170,
        
        borderRadius:30,
        backgroundColor:'#559DED',
        justifyContent:'center',

        

    },

    Textbotao:{
        fontSize:20,
        fontWeight:'bold',
        color:'#FFF',

    },

    containerquadros:{
    marginTop:20,

    },

    botaoretangulo:{
        width:350,
        height:80,
        
        borderRadius:30,
        backgroundColor:'#559DED',
        justifyContent:'center',



    },

});

  export default styles;