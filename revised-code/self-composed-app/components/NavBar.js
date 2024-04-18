import { StyleSheet, View, Text } from "react-native"
import { useNavigation } from "@react-navigation/native";

export const NavBar = () => {
    const navigation = useNavigation()
    return (
        <View style={styles.navbarcontainer}>
            <Text style={styles.navbartext}>home</Text>
            <Text style={styles.navbartext}>journaling</Text>
            <Text style={styles.navbartext}>self-care</Text>
            <Text style={styles.navbartext} onClick={() => navigation.navigate('Profile')}>profile</Text>
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