import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={{fontWeight: 'bold'}}>hello, user</Text>
      <StatusBar style="auto" />

      <View style={styles.container2}>
        <Text>how are you feeling today?</Text>
        <Text>(mood buttons go here)</Text>
      </View>
      
      <View style={styles.container2}>
        <Text>journaling prompt</Text>
        <Text>(prompt goes here)</Text>
        <Text>daily tasks</Text>
        <Text>(tasks go here)</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#D8FBBD',
    alignItems: 'left',
    justifyContent: 'top',
    padding: 20
  },
  container2: {
    backgroundColor: '#FFFFFF',
    marginTop: 20,
    padding: 20,
  }
});
