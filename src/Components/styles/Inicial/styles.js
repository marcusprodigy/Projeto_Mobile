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
        backgroundColor:'#01CCAA',


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
        backgroundColor:'#01CCAA',
        
    },

    containertext:{
        flexDirection:'row',

    },
    textnome:{

        marginLeft:4,
        color:'#01CCAA',
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
        width:150,
        height:150,
        
        borderRadius:30,
        backgroundColor:'#01CCAA',
        justifyContent:'center',

        

    },

    Textbotao:{
        fontSize:20,
        fontWeight:'bold',
        color:'#FFF',
        textAlign:'center',

    },

    containerquadros:{
    marginTop:20,

    },

    botaoretangulo:{
        width:350,
        height:80,
        
        borderRadius:30,
        backgroundColor:'#01CCAA',
        justifyContent:'center',



    },

});

  export default styles;