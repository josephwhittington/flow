import { 
  View, Text,
  TextInput, StyleSheet,
} from 'react-native'

import AuthButton from './buttons/AuthButton'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
    height: 40,
    width: 250,
    marginTop: 12,
    borderWidth: 1,
    borderRadius: 5, 
    padding: 10
  },
  button: {
    marginTop: 12,
    width: 250,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    backgroundColor: 'black',
  },
  registerText: {
    marginTop: 12,
    color: 'blue'
  }
})

export default function AuthLogin({navigation}) {
  const navigateToRegister = () => {
    console.log('Navigate to register')
    navigation.navigate('AuthRegister')
  }
  const navigateToStart = () => {
    console.log('Submit');
    navigation.navigate('StartProject');
  }
  return (
    <View style={styles.container}>
      <Text>Authentication</Text>
      <TextInput style={styles.input} placeholder='Username'></TextInput>
      <TextInput style={styles.input} placeholder='Password'></TextInput>
      <AuthButton text='Submit' navigation={navigation}/>
      <Text style={styles.registerText} onPress={navigateToRegister}>Register for New Account</Text>
    </View>
  )
}