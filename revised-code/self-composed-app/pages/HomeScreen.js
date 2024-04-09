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
    backgroundColor: '#D8FBBD',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container2: {
    backgroundColor: '#FFFFFF'
  }
});
