import React from 'react';
import styles from './src/Components/styles/styles';
// Views
import Login from './src/Views/Login';
import Inicial from './src/Views/Inicial';
import CadastroCli from './src/Views/CadastroCli';
import Token from './src/Views/Token';

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
        name="Inicial" 
          component={Inicial} 
            options={{ headerShown: false, 
                       headerLeft: null, 
                       gestureEnabled: true }}/>
                       

    <Stack.Screen 
            name="CadastroCli" 
              component={CadastroCli} 
               />

    <Stack.Screen 
                name="Token" 
                  component={Token}  
                  options={{
                    headerShown: false,
                    gestureEnabled: true 
                  
                  }}
                    />


    </Stack.Navigator>
  );
} // Função de GUIAS 

