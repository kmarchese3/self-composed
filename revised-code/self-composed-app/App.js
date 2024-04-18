import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from "./pages/HomeScreen";
import Profile from "./pages/Profile"
import SelfCare from "./pages/SelfCare"
import SelfCareAdd from "./pages/SelfCareAdd"

export default function App() {
  return (
    <HomeScreen />
    //<Profile />
    //<SelfCare />
    //<SelfCareAdd />
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
