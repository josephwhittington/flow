import {
    View, Text,
    TextInput, StyleSheet,
    Image
  } from 'react-native'

  import { Dimensions } from 'react-native';

  import InputElement from './InputElement';
  import TextAreaElement from './TextAreaElement';
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
      height: '80%',
      backgroundColor: '#fff',
      position: 'absolute',
      bottom: 0,
      borderTopLeftRadius: 65,
      paddingTop: 50,
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
      color: 'white',
      position: 'absolute',
      top: 0,
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

  export default function ProjectCreation({navigation}) {
    const navigateToVideoEdit = () => {
      console.log('Submit');
      navigation.navigate('VideoEdit');
    }
    return (
      <View style={styles.container}>
          <Text style={styles.bottomContainerHeader}>Create Project</Text>
        <View style={styles.bottomContainer}>
          <InputElement mb={30} style={styles.InputElement} ElementTitle='Project Name' ElementPlaceholder='NewProject' />
          <TextAreaElement mb={30} style={styles.InputElement} ElementTitle='Project Description' />
          <GenericButton  text='Create Project' onPress={navigateToVideoEdit} />
        </View>
      </View>
    )
  }
