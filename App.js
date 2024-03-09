import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AuthLogin from './components/AuthLogin';
import AuthRegister from './components/AuthRegister';
import StartProject from './components/StartProject';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='AuthLogin' component={AuthLogin} />
        <Stack.Screen name='AuthRegister' component={AuthRegister} />
        <Stack.Screen name='StartProject' component={StartProject} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
