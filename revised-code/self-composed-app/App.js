import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "./pages/HomeScreen";
import Profile from "./pages/Profile"
import SelfCare from "./pages/SelfCare"
import SelfCareAdd from "./pages/SelfCareAdd"

const Stack = createNativeStackNavigator();

global.journalingPrompts = [
  "what's your favorite thing about yourself and why?"
];
global.selfCareTasks = [
  'make your bed',
];
global.streak = 5;
global.mood = '';

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false,
      }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="SelfCare" component={SelfCare} />
        <Stack.Screen name="SelfCareAdd" component={SelfCareAdd} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
