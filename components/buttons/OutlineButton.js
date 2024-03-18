import {
    TouchableOpacity,
    Text,
    StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
    button: {
        marginTop: 12,
        width: 250,
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        borderStyle: 'solid',
        borderColor: 'white',
        borderWidth: 1,
        opacity: 0.75,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontFamily: 'Roboto',
        fontSize: 24,
        fontWeight: 'ultralight',
    }
})

export default function OutlineButton({ text, navigation, ...props }) {
    return (
        <TouchableOpacity onPress={props.onPress} style={styles.button}>
            <Text style={styles.buttonText}>{text}</Text>
        </TouchableOpacity>
    );
}
