import {
    View,
    Text,
    StyleSheet,
    Dimensions,
} from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: '80%',
        marginLeft: Dimensions.get('window').width * .1,
        marginRight: Dimensions.get('window').width * .1,
        padding: 20,
        borderRadius: 10,
        borderTopRightRadius: 2,
        borderBottomLeftRadius: 2,
        opacity: 0.75,
    },
    header: {
        fontSize: 15,
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        width: '100%',
        color: '#000',
    },
    description: {
        color: '#000',
        width: '100%',
        fontWeight: 'regular',
        fontSize: 14,
    },
    timeStamp: {
        color: '#000',
        width: '100%',
        fontWeight: 'thin',
        fontSize: 12,
    }
});

export default function ProjectCars({ Title='Project Title', Desc='Project Description', TimeStamp='12/12/1995' }) {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>{Title}</Text>
            <Text style={styles.description}>{Desc}</Text>
            <Text style={styles.timeStamp}>Last Edited: {TimeStamp}</Text>
        </View>
    );
}
