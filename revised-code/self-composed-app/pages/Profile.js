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
          
          <Text style={{fontWeight: 'bold', paddingTop: 10}}>✨{streak}-day task streak!</Text>
          <StatusBar style="auto" />
        </View>

          <Text>tasks completed chart</Text>
          <View style={styles.container2}>
            <Text>(tasks completed chart goes here)</Text>
          </View>
          
          <View style={styles.container2}>
            {mood !== '' && <Text>mood today: {mood}</Text>}
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
  profileheader: {
    paddingTop: 50,
    alignItems: 'center',
  },
});
