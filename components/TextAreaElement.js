import {
    View,
    Text,
    TextInput,
    StyleSheet,
    Dimensions
} from 'react-native';

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
        textAlign: 'left',
    }
});

export default function TextAreaElement({ElementTitle = 'Element Title', ElementPlaceholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', mb, ...props}) {
    return (
        <View style={styles.container} marginBottom={mb}>
            <Text  style={styles.inputTitle}>{ElementTitle}</Text>
            <TextInput numberOfLines={4} placeholder={ElementPlaceholder} style={styles.input} />
        </View>
    );
}
