import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function Profile() {
  return (
    <View style={styles.container}>
      <View>
        <Text>(profile pic goes here)</Text>
      </View>
      
      <Text style={{fontWeight: 'bold'}}>(display task streak)</Text>
      <StatusBar style="auto" />

      <View style={styles.container2}>
        <Text>(tasks completed chart goes here)</Text>
      </View>
      
      <View style={styles.container2}>
        <Text>(mood chart goes here)</Text>
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
