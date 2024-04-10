import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={{fontWeight: 'bold', fontSize: '8vmin', paddingLeft: 20}}>hello, user</Text>
      <StatusBar style="auto" />

      <View style={styles.container2}>
        <Text style={styles.containertext}>how are you feeling today?</Text>
        <Text style={styles.containersubtext}>😃 😔 😠 🥱</Text>
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
    flex: 2,
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    borderRadius: 6,
    marginTop: 20,
    padding: 20,
  },
  containertext: {
    fontSize: '4vmin',
    lineHeight: '5vmin'
  },
  containersubtext: {
    fontSize: '3vmin',
    lineHeight: '4vmin'
  },
  emoji: {

  }
});
