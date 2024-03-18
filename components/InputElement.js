import {
    View,
    Text,
    TextInput,
    StyleSheet,
    Dimensions
} from 'react-native';

import React, { useRef } from 'react';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        width: '80%',
        borderRadius:12,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        marginLeft: Dimensions.get('window').width * 0.1,
    },
    inputTitle: {
        fontSize: 12,
        fontWeight: 'bold',
        marginTop: 5,
        marginLeft: 20,
        textAlign: 'left',
    },
    input: {
        marginTop: 0,
        marginBottom: 7,
        marginLeft: 20,
        opacity: 0.75,
        fontSize: 12,
    }
});

export default function InputElement({ElementTitle = 'Element Title', ElementPlaceholder='Placeholder', secure=false, mb, ...props}) {
    const inputRef = useRef();

    return (
        <View style={styles.container} marginBottom={mb}>
            <Text style={styles.inputTitle}>{ElementTitle}</Text>
            <TextInput ref={inputRef} secureTextEntry={secure} textContentType='password' placeholder={ElementPlaceholder} onChangeText={props.onChangeText} style={styles.input} />
        </View>
    );
}
