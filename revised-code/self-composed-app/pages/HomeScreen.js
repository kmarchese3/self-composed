import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={{fontWeight: 'bold', fontSize: '8vmin'}}>hello, user</Text>
      <StatusBar style="auto" />

      <View style={styles.container2}>
        <Text style={styles.containertext}>how are you feeling today?</Text>
        <Text style={styles.containersubtext}>(mood buttons go here)</Text>
      </View>
      
      <View style={styles.container2}>
        <Text style={styles.containertext}>journaling prompt</Text>
        <Text style={styles.containersubtext}>(prompt goes here)</Text>
        <Text style={styles.containertext}>daily tasks</Text>
        <Text style={styles.containersubtext}>(tasks go here)</Text>
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
    padding: 20,
    fontFamily: 'Inter'
  },
  container2: {
    backgroundColor: '#FFFFFF',
    marginTop: 20,
    padding: 20,
  },
  containertext: {
    fontSize: '3vmin',
    lineHeight: '4vmin'
  },
  containersubtext: {
    fontSize: '2.5vmin',
    lineHeight: '3.5vmin'
  }
});
