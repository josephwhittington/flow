import {
    StyleSheet,
    View,
    Text,
    TextInput
} from 'react-native';

import AuthButton from './buttons/AuthButton';

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
    }
});

export default function AuthRegister() {
    return (
        <View style={styles.container}>
            <Text>Register</Text>
            <TextInput style={styles.input} placeholder='Username' />
            <TextInput style={styles.input} placeholder='Email' />
            <TextInput style={styles.input} placeholder='Password' />
            <TextInput style={styles.input} placeholder='Confirm Password' />
            <AuthButton text='Register' />
        </View>
    );
}