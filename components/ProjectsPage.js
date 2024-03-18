import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

import OutlineButton from './buttons/OutlineButton';
import ProjectCard from './ProjectCard';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        // justifyContent: 'center'
    },
    containerHeader: {
        fontSize: 36,
        fontFamily: 'Roboto',
        fontWeight: 'semibold',
        textAlign: 'center',
        marginBottom: 50,
        color: '#fff',
        position: 'relative',
        top: 50,
    },
    buttonView: {
        marginTop: 30,
    },
    projectsView: {
        marginTop: 30,
        width: '100%',
    }
});


export default function ProjectsPage({ navigation }) {
    const data = [
        {
            Title: 'Project Title',
            Desc: 'Project Description',
            TimeStamp: '12/12/1995'
        }
    ];

    const handlePress = () => {
        navigation.navigate('ProjectCreation');
    }

    return (
        <View style={styles.container}>
            <Text style={styles.containerHeader}>Projects</Text>

            <View style={styles.buttonView}>
                <OutlineButton text='+ New Project' onPress={handlePress} />
            </View>

            <View style={styles.projectsView}>
                { data.map((project, index) => {
                    return (
                        <ProjectCard
                            key={index}
                            Title={project.Title}
                            Desc={project.Desc}
                            TimeStamp={project.TimeStamp}
                        />
                    );
                })}
            </View>
        </View>
    );
}
