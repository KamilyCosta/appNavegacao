// In App.js in a new project

import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen(props) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title='Ir para Sobre'
        onPress={() => props.navigation.navigate('Sobre')}
      />
       <Button
        title='Ir para Produtos' any
        onPress={() => props.navigation.navigate('Produtos')}
      />
      <Button
        title='Ir para Contato' any
        onPress={() => props.navigation.navigate('Contato')}
      />
    </View>
  );
}

function SobreScreen(props) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Sobre Screen</Text>
        <Button
        title='Ir para Home'
        onPress={() => props.navigation.navigate('Home')}
      />
       <Button
        title='Ir para Produtos' any
        onPress={() => props.navigation.navigate('Produtos')}
      />
      <Button
        title='Ir para Contato' any
        onPress={() => props.navigation.navigate('Contato')}
      />
      </View>
    );
  }
  
  function ProdutosScreen(props) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Produtos Screen</Text>
        <Button
        title='Ir para Home'
        onPress={() => props.navigation.navigate('Home')}
      />
       <Button
        title='Ir para Sobre' any
        onPress={() => props.navigation.navigate('Sobre')}
      />
      <Button
        title='Ir para Contato' any
        onPress={() => props.navigation.navigate('Contato')}
      />
      </View>
    );
  }

  function ContatoScreen(props) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Contato Screen</Text>
        <Button
        title='Ir para Home'
        onPress={() => props.navigation.navigate('Home')}
      />
       <Button
        title='Ir para Sobre' any
        onPress={() => props.navigation.navigate('Sobre')}
      />
       <Button
        title='Ir para Produtos' any
        onPress={() => props.navigation.navigate('Produtos')}
      />
      
     
      </View>
    );
  }
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Sobre" component={SobreScreen} />
        <Stack.Screen name="Produtos" component={ProdutosScreen} />
        <Stack.Screen name="Contato" component={ContatoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;[]