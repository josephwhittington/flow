// Polyfills
import 'react-native-get-random-values';
import 'react-native-url-polyfill/auto';
import { ReadableStream } from 'web-streams-polyfill';
globalThis.ReadableStream = ReadableStream;

import {
  View, Text,
  StyleSheet,
  Image
} from 'react-native'

import { Dimensions } from 'react-native';

import InputElement from './InputElement';
import GenericButton from './buttons/GenericButton';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center'
  },
  bottomContainer: {
    height: Dimensions.get('window').height -200,
    width: '100%',
    backgroundColor: '#fff',
    position: 'absolute',
    bottom: 0,
    borderTopLeftRadius: 65,
  },
  Image: {
    width: 100,
    height: 100,
    backgroundColor: '#fff',
    borderTopLeftRadius: 15,
    borderBottomRightRadius: 15,
    position: 'absolute',
    top: 50,
    resizeMode: 'cover',
  },
  bottomContainerHeader: {
    fontSize: 36,
    fontFamily: 'Roboto',
    fontWeight: 'semibold',
    textAlign: 'center',
    marginTop: 50,
    marginBottom: 50,
  },
  InputElement: {
    margin: 50,
  },
  bottomText: {
    fontSize: 16,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    textAlign: 'center',
    position: 'absolute',
    bottom: 50,
    width: '100%',
  },
})

export default function AuthLogin({navigation}) {
  const navigateToRegister = () => {
    console.log('Navigate to register')
    navigation.navigate('AuthRegister')
  }
  const navigateToStart = () => {
    console.log('Submit');
    navigation.navigate('ProjectsPage');
  }
  return (
    <View style={styles.container}>
      <Image style={styles.Image} source={require("../assets/FlowEditLogoMd.png")} />
      <View style={styles.bottomContainer}>
        <Text style={styles.bottomContainerHeader}>Login</Text>
        <InputElement mb={30} style={styles.InputElement} ElementTitle='Email' ElementPlaceholder='SampleEmail@email.com' />
        <InputElement mb={20} style={styles.InputElement} ElementTitle='Password' ElementPlaceholder='**********' />
        <GenericButton  text='Login' onPress={navigateToStart} />
        <Text style={styles.bottomText} onPress={navigateToRegister}>Don't have an account? Register</Text>
      </View>
    </View>
  )
}
