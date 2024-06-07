import { View, Text, Button } from 'react-native';

export default function HomeScreen(props) {
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