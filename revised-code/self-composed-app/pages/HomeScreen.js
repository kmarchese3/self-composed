import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { NavBar } from '../components/NavBar';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  const navigation = useNavigation()


  /*
  <Text style={{fontWeight: 'bold', fontSize: 50, paddingLeft: 20, paddingTop: 50}}>hello, user</Text>
        <StatusBar style="auto" />

        <View style={styles.container2}>
          <Text style={styles.containertext}>how are you feeling today?</Text>
          <Text style={styles.emoji}>😃 😔 😠 🥱</Text>
        </View>
        
        <View style={styles.container2}>
          <Text style={styles.containertext}>journaling prompt</Text>
          <Text style={styles.containersubtext}>(prompt goes here)</Text>
          <Text style={styles.containertext} onClick={() => navigation.navigate('SelfCare')}>daily tasks</Text>
          <Text style={styles.containersubtext}>(tasks go here)</Text>
        </View>
  */

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={{fontWeight: 'bold', fontSize: 50, paddingLeft: 20, paddingTop: 50}}>hello, user</Text>

        <View style={styles.container2}>
          <Text>how are you feeling today?</Text>
          <View style={styles.emoji}>
            <Text style={styles.emojis}>😃</Text>
            <Text style={styles.emojis}>😔</Text>
            <Text style={styles.emojis}>😠</Text>
            <Text style={styles.emojis}>🥱</Text>
          </View>
        </View>

        <View style={styles.container2}>
          <Text>journaling prompt</Text>
          <Text>(prompt goes here)</Text>
          <Text onClick={() => navigation.navigate('SelfCare')}>daily tasks</Text>
          <Text>(tasks go here)</Text>
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
  emoji: {
    paddingTop: 10,
    textAlign: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
  }, emojis: {
    fontSize: 40,
  }
});
