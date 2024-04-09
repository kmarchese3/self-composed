// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, FlatList } from 'react-native';

const dataSource = [
    {key: '001', firstName: 'Task 1'},
    {key: '002', firstName: 'Task 2'},
    {key: '003', firstName: 'Task 3'},
    {key: '004', firstName: 'Task 4'},
];

export default function SelfCare() {
    return (
        <View style = {styles.container}>
        <View>
            <Text style = {styles.header}>Self Care</Text>
        </View>
        <View>
            <FlatList
                data={dataSource}
                renderItem={({item}) =>
                <Text style = {styles.item}>{item.firstName}</Text>
            }
            />
        </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
     paddingTop: 50,
     backgroundColor: '#D8FBBD',
    },
    header: {
        textAlign: 'center',
        fontSize: 20
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 54,
      borderWidth: 1,
      borderColor: "gray",
    },
  });  

// <View style={{flex: 1, paddingTop: 40, paddingBottom: 40, flexDirection: 'column'}}>
//             <Text style = {{ flex: 1, backgroundColor: "red" }}>Hello World!</Text>
//             <Text style = {{ flex: 1, backgroundColor: "blue" }}>Hello World!</Text>
//             <Text style = {{ flex: 1, backgroundColor: "yellow" }}>Hello World!</Text>
//         </View>