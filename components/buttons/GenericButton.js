import {
    Pressable,
    Text,
    StyleSheet,
    Dimensions,
} from 'react-native';

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'black',
        marginTop: 12,
        padding: 10,
        width: '80%',
        borderRadius: 12,
        borderTopRightRadius: 0,
        marginLeft: Dimensions.get('window').width * 0.1,
        marginRight: Dimensions.get('window').width * 0.1,
        textAlign: 'center',
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 16,
        padding: 10,
    },
});

const buttonDisabledStyle = styles.button;
buttonDisabledStyle.backgroundColor = 'grey';

export default function GenericButton({text='Button Text', disabled=false, ...props}) {
    return (
        <Pressable onPress={disabled? console.log('Disabled') : props.onPress} style={props.disabled? buttonDisabledStyle : styles.button}>
            <Text style={styles.buttonText}>{text}</Text>
        </Pressable>
    );
}
