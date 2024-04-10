// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';

const dataSource = [
    {key: '001', firstName: 'Task 1'},
    {key: '002', firstName: 'Task 2'},
    {key: '003', firstName: 'Task 3'},
    {key: '004', firstName: 'Task 4'},
];

export default function SelfCare() {
    return (
        <View style={styles.container}>
        <View style={styles.headerContainer}>
            <Text style={styles.header}>Self Care</Text>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonTitle}>+</Text>
            </TouchableOpacity>
        </View>
        <View>
            <FlatList
                data={dataSource}
                renderItem={({item}) =>
                <Text style={styles.item}>{item.firstName}</Text>
            }
            />
        </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
     flex: 1,
     paddingTop: 50,
     backgroundColor: '#D8FBBD',
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingRight: 10,
        paddingBottom: 2,
    },
    header: {
        fontSize: 20,
        paddingLeft: 10,
    },
    button: {
        paddingLeft: 5,
        paddingRight: 5,
    },
    buttonTitle: {
        color: "green",
        fontSize: 30,
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 54,
      borderWidth: 1,
      borderColor: "gray",
    },
  });  