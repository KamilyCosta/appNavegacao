import { View, Text, Button } from 'react-native';

export default function ProdutosScreen(props) {
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