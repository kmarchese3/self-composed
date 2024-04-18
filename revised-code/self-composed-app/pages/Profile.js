import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { NavBar } from '../components/NavBar';

export default function Profile() {
  return (
    <View style={styles.container}>
      <ScrollView>
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
      </ScrollView>
      <View>
        <NavBar />
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
  },
  container2: {
    backgroundColor: '#FFFFFF',
    borderRadius: 6,
    marginTop: 20,
    padding: 20,
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
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
