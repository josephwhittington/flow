
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

import * as ImagePicker from 'expo-image-picker';

import ImportMediaButton from './buttons/ImportMediaButton';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
    },
    pageTitle: {
        fontSize: 36,
        fontFamily: 'Roboto',
        fontWeight: 'semibold',
        textAlign: 'center',
        marginBottom: 50,
        color: '#fff',
        position: 'absolute',
        top: 50,
    },
});

export default function VideoEdit({navigation}) {
    const handlePress = () => {
        console.log('Handle Press');
        const options = {
            mediaTypes: ImagePicker.MediaTypeOptions.Videos,
            allowsEditing: true,
            quality: 1,
        };

        ImagePicker.launchImageLibraryAsync(options).then((response) => {
            console.log(response);
        });
    }

    return (
        <View style={styles.container}>
            <Text style={styles.pageTitle}>ProjectName</Text>
            <ImportMediaButton  onPress={handlePress}/>
        </View>
    );
}
