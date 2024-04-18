import { StyleSheet, View, Text } from "react-native"

export const NavBar = () => {
  return (
    <View style={styles.navbarcontainer}>
        <Text style={styles.navbartext}>home</Text>
        <Text style={styles.navbartext}>journaling</Text>
        <Text style={styles.navbartext}>self-care</Text>
        <Text style={styles.navbartext}>profile</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    navbarcontainer: {
        display:'flex',
        justifyContent:'space-between',
        flexDirection:'row',
    },

    navbartext: {
        padding: 10,
    }
  });