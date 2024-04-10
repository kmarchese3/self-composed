import { StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native";

export default function SelfCareAdd() {
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.header}>Self Care</Text>
            </View>
            <View>
                <Text>task title</Text>
                <TextInput
                    style={styles.inputShort}
                    placeholder="enter title"
                />
            </View>
            <View style={styles.main}>
                <View>
                    <Text>description of task</Text>
                    <TextInput
                        style={styles.inputLong}
                        placeholder="enter title"
                    />
                </View>
                <View>
                    <Text>repeat</Text>
                    <TextInput
                            style={styles.inputShort}
                            placeholder="enter title"
                    />
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonTitle}>Submit</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
     flex: 1,
     paddingTop: 50,
     paddingLeft: 15,
     backgroundColor: '#D8FBBD',
     justifyContent: 'space-between',
    },
    headerContainer: {
        paddingBottom: 20,
    },
    header: {
        fontSize: 20,
    },
    inputShort: {
        backgroundColor: "white",
        height: 40,
        marginRight: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
    },
    inputLong: {
        backgroundColor: "white",
        height: 150,
        marginRight: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
    },
    main: {
        flex: 2,
        flexDirection: 'column',
        justifyContent: 'space-evenly',
    },
    buttonContainer: {
        alignItems: 'center',
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 150,
        height: 50,
        padding: 5,
        backgroundColor: '#106F00',
        borderRadius: 8,
    },
    buttonTitle: {
        color: "white",
        fontSize: 20,
    }
});