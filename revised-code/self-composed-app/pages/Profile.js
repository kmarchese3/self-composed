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
    flexDirection: 'column',
    backgroundColor: '#D8FBBD',
    alignItems: 'center',
    justifyContent: 'top',
    padding: 20,
    fontFamily: 'Inter'
  },
  container2: {
    backgroundColor: '#FFFFFF',
    borderRadius: 6,
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
