import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Image, ImageBackground } from 'react-native';
import { NavBar } from '../components/NavBar';

export default function Profile() {

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.profileheader}>
          <View>
            <Image source={require('../assets/profile-pic.png')} style={{width: 150, height: 150}}/>
          </View>
          
          {streak > 0 && <Text style={{fontWeight: 'bold', paddingTop: 10, fontSize: 20}}>✨{streak}-day task streak!</Text>}
          <StatusBar style="auto" />
        </View>

          <Text style={{marginTop: 20, fontSize: 20, padding: 5}}>tasks completed this week</Text>
          <View style={styles.container2}>
            <Text>no data found</Text>
          </View>
          
          <Text style={{fontSize: 20, padding: 5}}>mood tracker</Text>
          <View style={styles.container2}>
            {mood !== '' ? ( <Text>mood today: {mood}</Text> ) : ( <Text>no data found</Text> )}
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
    marginBottom: 20,
    padding: 20,
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
  },
  profileheader: {
    paddingTop: 50,
    alignItems: 'center',
  },
});
