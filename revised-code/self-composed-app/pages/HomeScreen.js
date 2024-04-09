import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>hello, user</Text>
      <StatusBar style="auto" />
      <View style={{ backgroundColor: '#FFFFFF'}}>
        <Text>mood bar goes here</Text>
      </View>
      <View>
        <Text>this is the prompts area</Text>
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
});
