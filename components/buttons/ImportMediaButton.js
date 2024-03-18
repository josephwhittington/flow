import {
    Pressable,
    Text,
    StyleSheet,
    Dimensions
} from 'react-native';

const styles = StyleSheet.create({
    button: {
        position: 'absolute',
        top: 200,
        backgroundColor: 'black',
        marginTop: 12,
        padding: 10,
        width: '60%',
        height: 200,
        borderRadius: 12,
        marginLeft: Dimensions.get('window').width * 0.1,
        marginRight: Dimensions.get('window').width * 0.1,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'white',
        borderStyle: 'dashed'
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 16,
        padding: 10
    }
});

export default function ImportMediaButton({ text = 'Button Text', ...props }) {
    return (
        <Pressable onPress={props.onPress} style={styles.button}>
            <Text style={styles.buttonText}>+ Import Media</Text>
        </Pressable>
    );
}
