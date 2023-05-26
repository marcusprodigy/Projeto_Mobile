import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    container: {

      flex:1,
    },   

    containerh:{
        width:'100%',
        height:'5%',
        backgroundColor:'#01CCAA',


    },
    titulo:{

        fontSize:25,
        textAlign:'center',
        fontWeight:'bold',
        color:'#01CCAA',

    },
    prompt:{
        flex:1,
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
    botaofoot:{
        marginTop:'18%',
        justifyContent:'center',
        alignSelf:"center",
        width:'80%',
        height:70,
        borderRadius:100,
        backgroundColor:'#01CCAA',
        color:'#fff',
        marginBottom:50,


    },

    textobotao:{
        
        textAlign:'center',
        color:'#fff',
        fontSize:25,
        fontWeight:'bold',


    }

});

  export default styles;