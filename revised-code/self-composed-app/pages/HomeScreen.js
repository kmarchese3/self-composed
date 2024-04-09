import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={{fontWeight: 'bold'}}>hello, user</Text>
      <StatusBar style="auto" />

      <View style={styles.container2}>
        <Text>(mood bar goes here)</Text>
      </View>
      
      <View style={styles.container2}>
        <Text>(this is the prompts area)</Text>
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
    padding: 20
  }
});
