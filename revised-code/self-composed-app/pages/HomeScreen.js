import { StyleSheet, Text, View, ScrollView, Pressable } from 'react-native';
import Checkbox from 'expo-checkbox';
import { useState } from 'react';
import { NavBar } from '../components/NavBar';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  const navigation = useNavigation();
  const[isChecked, setChecked] = useState(false)

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={{fontWeight: 'bold', fontSize: 50, paddingLeft: 20, paddingTop: 50}}>hello, user</Text>

        <View style={styles.container2}>
          <Text style={styles.containerheader}>how are you feeling today?</Text>
          <View style={styles.emoji}>
            <Pressable onPress={() => mood='happy'}>
              <Text style={styles.emojis}>😃</Text>
            </Pressable>
            <Pressable onPress={() => mood='sad'}>
              <Text style={styles.emojis}>😔</Text>
            </Pressable>
            <Pressable onPress={() => mood='angry'}>          
              <Text style={styles.emojis}>😠</Text>
            </Pressable>
            <Pressable onPress={() => mood='tired'}>
              <Text style={styles.emojis}>🥱</Text>
            </Pressable>
          </View>
        </View>

        <View style={styles.container2}>
          
          <Text style={styles.containerheader}>journaling prompt</Text>
          <View style={styles.row}>
            <Checkbox style={styles.checkbox} value={isChecked} onValueChange={setChecked} color='gray' />
            <Text style={isChecked ? styles.checkedText : styles.uncheckedText}>{journalingPrompts[0]}</Text>
          </View>

          <Pressable onPress={() => navigation.navigate('SelfCare')} >
            <Text style={styles.containerheader} onClick={() => navigation.navigate('SelfCare')}>self-care tasks</Text>
          </Pressable>
            {
              selfCareTasks.map((task, i) => (
                <View style={styles.row}>
                    <Checkbox style={styles.checkbox} value={isChecked} onValueChange={setChecked} color='gray' />
                    <Text style={isChecked ? styles.checkedText : styles.uncheckedText}>{task}</Text>
                </View>
              ))
            }
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
  row: {
    flexDirection: 'row',
    paddingTop: 5,
  },
  containerheader: {
    fontSize: 20
  },
  emoji: {
    paddingTop: 10,
    textAlign: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
  }, emojis: {
    fontSize: 40,
  }, uncheckedText: {
    padding: 5,
    alignItems: 'center',
  }, checkedText: {
    padding: 5,
    alignItems: 'center',
    textDecorationLine: 'line-through',
    color: 'gray',
  }
});
