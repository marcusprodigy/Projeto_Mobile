import { Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient'; // ou import LinearGradient from 'react-native-linear-gradient';
import styles from '../Components/styles/Login/styles';
import JanelaAviso from '../Components/Script/JanelaAviso';



function Login({ navigation }) {


    return(
        <LinearGradient
        colors={['#01CCAA','#48EAF7', '#01CCaa']} // Defina as cores do gradiente
        start={{ x: 1, y: 1 }} // Posição inicial do gradiente
        end={{ x: 1, y: 1 }} // Posição final do gradiente
        style={styles.bg}
        >   
                
                <View style={styles.Caixabola}>
                    <Image
                        source={require('../../assets/logo.png')}// Substitua pelo caminho correto com o nome do arquivo e extensão
                        style={{ width: 200, height: 200 }}
                    />
                </View>
                <View style={styles.CaixaLogin}>
                    <View style={styles.caixa}>
                        <View style={styles.Login}>
                            <Text style={styles.nome}>Nome</Text>
                            <TextInput style={styles.inp}></TextInput>
                        </View>
                        <View style={styles.Login}>
                            <Text style={styles.nome}>Senha</Text> 
                            <TextInput style={styles.inp} secureTextEntry={true}></TextInput>
                            <View style={styles.containertxt}>
                            </View>
                        </View>

                        <View style={styles.Login}>
                            <TouchableOpacity style={styles.butt} onPress={() => navigation.navigate('Inicial')}>
                                <Text style={styles.txtbutt}>Login</Text>
                            </TouchableOpacity>


                        </View>

                       
                    </View>
                    <JanelaAviso/>
                </View>

        </LinearGradient>

      )
  
  }

  export default Login;