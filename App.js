
import Welcome from './app/perfil/Welcome';
import Login from './app/perfil/Login';
import RegistroPlantas from './app/perfil/RegistroPlantas';
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="RegistroPlantas" component={RegistroPlantas} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;



