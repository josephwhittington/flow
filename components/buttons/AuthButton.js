import { 
    StyleSheet,
    Pressable,
    Text 
} from 'react-native'

const styles = StyleSheet.create({
    button: {
        marginTop: 12,
        width: 250,
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        backgroundColor: 'black',
    },
    buttonText: {
        color: 'white',
        textAlign: 'center'
    }
})

export default function AuthButton({ text, navigation }) {
    const handlePress = () => {
        navigation.navigate('StartProject');
    };
    return (
        <Pressable onPress={handlePress} style={styles.button}>
            <Text style={styles.buttonText}>{text}</Text>
        </Pressable>
    );
}