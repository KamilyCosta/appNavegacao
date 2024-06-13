import { View } from 'react-native';
import { Card, Text, Button} from 'react-native-paper';


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


      <Card>
        <Card.Title title="Card Title" subtitle="Card Subtitle"/>
        <Card.Content>
          <Text variant="titleLarge">Card title</Text>
          <Text variant="bodyMedium">Card content</Text>
        </Card.Content>
        <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
        <Card.Actions>
          <Button>Cancel</Button>
          <Button>Ok</Button>
        </Card.Actions>
      </Card>


    </View>
  );
}