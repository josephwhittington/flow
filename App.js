// Polyfills
import 'react-native-get-random-values';
import 'react-native-url-polyfill/auto';
import { ReadableStream } from 'web-streams-polyfill';
globalThis.ReadableStream = ReadableStream;

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AuthLogin from './components/AuthLogin';
import AuthRegister from './components/AuthRegister';
import StartProject from './components/StartProject';
import ProjectsPage from './components/ProjectsPage';
import ProjectCreation from './components/ProjectCreation';
import VideoEdit from './components/VideoEdit';

const Stack = createNativeStackNavigator();
const StackOptions = {
  headerShown: false
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='AuthLogin' component={AuthLogin} options={StackOptions} />
        <Stack.Screen name='AuthRegister' component={AuthRegister} options={StackOptions} />
        <Stack.Screen name='ProjectsPage' component={ProjectsPage} options={StackOptions} />
        <Stack.Screen name='StartProject' component={StartProject} options={StackOptions} />
        <Stack.Screen name='ProjectCreation' component={ProjectCreation} options={StackOptions} />
        <Stack.Screen name='VideoEdit' component={VideoEdit} options={StackOptions} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
