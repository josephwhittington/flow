// Polyfills
import 'react-native-get-random-values';
import 'react-native-url-polyfill/auto';
import { ReadableStream } from 'web-streams-polyfill';
globalThis.ReadableStream = ReadableStream;

import {
    StyleSheet,
    View,
    Text,
} from 'react-native';

import React, {
    useState,
    useEffect
} from 'react';

import InputElement from './InputElement';
import GenericButton from './buttons/GenericButton';

import {
    CognitoIdentityProviderClient,
    SignUpCommand,
} from '@aws-sdk/client-cognito-identity-provider';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center'
    },
    containerHeader: {
        fontSize: 36,
        fontFamily: 'Roboto',
        fontWeight: 'semibold',
        textAlign: 'center',
        marginBottom: 50,
        color: '#fff',
        position: 'absolute',
        top: 50,
    },
    bottomContainer: {
        width: '100%',
        height: 200,
        backgroundColor: 'white',
        position: 'absolute',
        bottom: 0,
        height: '80%',
        borderTopLeftRadius: 65,
        paddingTop: 50,
    },
    bottomText: {
        color: 'black',
        textAlign: 'center',
        position: 'absolute',
        bottom: 30,
        width: '100%',
        fontWeight: 'bold',
        fontSize: 16,
    }
});

export default function AuthRegister({ navigation }) {

    const [nickname, setNickname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [registerButtonDisabled, setRegisterButtonDisabled] = useState(true);

    useEffect(() => {
    }, []);

    const handleLinkPress = () => {
        navigation.navigate('AuthLogin');
    };

    const handleRegister = () => {
        if (!validateEmail(email)) {
            console.log('Invalid email');
            return;
        }
        if (!validatePassword()) {
            console.log('Passwords do not match');
            return;
        }

        // cognito
        const client = new CognitoIdentityProviderClient({ region: 'us-east-1' });
        const params = {
            Nickname: nickname,
            Email: email,
            Password: password,
        };

        const command = new SignUpCommand(params);
        client.send(command)
            .then((data) => {
                console.log('Data', data);
                console.log('Registering user');
                navigation.navigate('ProjectsPage');
            })
            .catch((error) => {
                console.log('Error', error);
            });

    }

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validatePassword = () => {
        return password === confirmPassword;
    };

    const onNicknameChange = (value) => {
        setNickname(value);
        checkButtonState();
    };

    const onEmailChange = (value) => {
        setEmail(value);
        checkButtonState();
    };

    const onPasswordChange = (value) => {
        console.log('Confirm password', value);
        setPassword(value);
        checkButtonState();
    };

    const onConfirmPasswordChange = (value) => {
        console.log('Confirm password change', value);
        setConfirmPassword(value);
        checkButtonState();
    };

    const validateFields = () => {
        console.log('Validating fields');
        console.log('Nickname', nickname);
        console.log('Email', email);
        console.log('Password', password);
        console.log('Confirm password', confirmPassword);

        return nickname.length > 6 &&
            password == confirmPassword &&
            validateEmail(email) &&
            validatePassword();
    }

    const checkButtonState = () => {
        if (validateFields()) {
            console.log('Fields are valid');
            setRegisterButtonDisabled(false);
        } else {
            console.log('Fields are not valid');
            setRegisterButtonDisabled(true);
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.containerHeader}>Register</Text>
            <View style={styles.bottomContainer}>
                <InputElement mb={25} onChangeText={onNicknameChange} ElementTitle='Nickname' ElementPlaceholder='Display Name' />
                <InputElement mb={25} onChangeText={onEmailChange} ElementTitle='Email' ElementPlaceholder='sampleemail@email.com' />
                <InputElement mb={25} onChangeText={onPasswordChange} secure={true} ElementTitle='Password' ElementPlaceholder='********' />
                <InputElement mb={25} onChangeText={onConfirmPasswordChange} secure={true} ElementTitle='Confirm Password' ElementPlaceholder='********' />
                <GenericButton disabled={registerButtonDisabled} text='Register' onPress={handleRegister}/>

                <Text style={styles.bottomText} onPress={handleLinkPress}>Already have an account? <Text style={{ color: 'blue' }}>Login</Text></Text>
            </View>
        </View>
    );
}
