import React from 'react';
// Views
import Login from './src/Views/Login';
import Home from './src/Views/Home';
import Cadastrar from './src/Views/Cadastrar';
import Clientes from './src/Views/Clientes';
import ClienteProfile from './src/Views/ClienteProfile';
import MarcarConsultas from './src/Views/MarcarConsultas';
import MinhasConsultas from './src/Views/MinhasConsultas';

//Func telas
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'; 


// Var's
const Stack = createStackNavigator();


export default function App() {
  
return (
       
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>

  );
}// Telas


function MyStack() {
  return (
  
    <Stack.Navigator>
    <Stack.Screen 
      name="Login" 
        component={Login} 
          options={{ headerShown: false }}/>
          
    <Stack.Screen
      name="Home"
      component={Home}
          options={{ headerShown: false, 
            gestureEnabled: false, }}/>

      <Stack.Screen 
              name="Cadastrar" 
                component={Cadastrar} 
                  options={{ headerShown: false }}/>

      <Stack.Screen 
              name="Clientes" 
                component={Clientes} 
                  options={{ headerShown: false }}/>

      <Stack.Screen 
              name="ClienteProfile" 
                component={ClienteProfile} 
                  options={{ headerShown: false }}/>


      <Stack.Screen 
              name="MarcarConsultas" 
                component={MarcarConsultas} 
                  options={{ headerShown: false }}/>  

      <Stack.Screen 
              name="MinhasConsultas" 
                component={MinhasConsultas} 
                  options={{ headerShown: false }}/>  

                  


    </Stack.Navigator>
  );
} // Função de GUIAS 

