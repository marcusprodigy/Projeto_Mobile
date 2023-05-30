import React from 'react';
// Views
import Login from './src/Views/Login';

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


    </Stack.Navigator>
  );
} // Função de GUIAS 

