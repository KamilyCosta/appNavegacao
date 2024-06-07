import { View, Text, Button } from 'react-native';

export default function ContatoScreen(props) {
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