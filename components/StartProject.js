import {
    StyleSheet,
    View,
    Text,
    TextInput,
    Button
} from 'react-native';

// Make stylesheet
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    form: {
        width: '80%',
    },
    input: {
        height: 40,
        width: '100%',
        marginTop: 12,
        borderWidth: 1,
        borderRadius: 5,
        padding: 10
    }
});

export default function StartProject() {
    return (
        <View style={styles.container}>
            <View style={styles.form}>
                <Text>Start Project</Text>
                <TextInput placeholder='Project Name' style={styles.input} />
            </View>
        </View>
    );
}
