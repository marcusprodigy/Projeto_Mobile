import { StyleSheet } from "react-native";

const styles = StyleSheet.create({



        bg:{

            flex:1,
            justifyContent:'flex-end',
            width:'100%',
            height:'100%',
            
            position:'absolute',
            
            
        },
        Caixabola:{
            marginBottom:30,
            alignSelf:'center',
            width:170,
            height:170,
            alignItems:'center',
            justifyContent:'center',
            backgroundColor:'#fff',
            borderRadius:200,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 0.3,
            shadowRadius: 10,
            elevation: 2, // Esta propriedade é específica do Android
            
        },
        CaixaLogin:{
            
            paddingBottom:50,

            width:'100%',
            height:'70%',
            backgroundColor:'#FFF',

            shadowColor: '#000',
            shadowOffset: { width: 0, height: -2 },
            shadowOpacity: 0.3,
            shadowRadius: 20,
            elevation: 2, // Esta propriedade é específica do Android

        },
        caixa:{
            height:'100%',
            width:'100%',  
            paddingLeft:'10%',
            paddingRight:'10%',
                     
        },
        
       
        nome:{
            fontSize: 20,
            marginLeft: 15,
        },

        Login:{
            marginTop:'15%',

        },

        inp:{
            marginTop:'4%',
            backgroundColor:'#fff',
            borderWidth:1,
            borderColor:'#F0F0F0',
            borderRadius:30,

            width:'100%',
            height: 70,

            textAlign:'center',
            textAlignVertical:'center',

            fontSize:20,

        },
        txtsenha:{
            color:'#559DED',

        },
        containertxt:{
            marginTop:10,
            marginRight:20,
            flexDirection:'row',
            alignSelf:'flex-end'

        },

        butt:{
            alignSelf:'center',

            width:'70%',
            height: 55,

            marginTop:'10%',

            borderRadius:30,

            textAlign:'center',
            textAlignVertical:'center',

            backgroundColor:'#01CCAA',

            justifyContent:'center',


        },
        
        txtbutt:{
            textAlign:"center",
            color:'#fff',
            fontSize:35,
        },

        buttoken:{
            alignSelf:'center',
            backgroundColor:'#01CCAA',
            width:'100%',
            height:100,

        },
        txtbuttoken:{
            marginTop:12,
            fontSize:15,
            color:'#fff',
            
            textAlign:'center',

        },

  });

  export default styles;

