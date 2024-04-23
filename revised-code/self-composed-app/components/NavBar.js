import { StyleSheet, View, Text, Pressable } from "react-native"
import { useNavigation } from "@react-navigation/native";

export const NavBar = () => {
    const navigation = useNavigation()
    return (
        <View style={styles.navbarcontainer}>
            <Pressable onPress={() => navigation.navigate('Home')}>
                <Text style={styles.navbartext} onClick={() => navigation.navigate('Home')}>home</Text>
            </Pressable>
            <Text style={styles.navbartext}>journaling</Text>
            <Pressable onPress={() => navigation.navigate('SelfCare')}>
                <Text style={styles.navbartext} onClick={() => navigation.navigate('SelfCare')}>self-care</Text>
            </Pressable>
            <Pressable onPress={() => navigation.navigate('Profile')}>
                <Text style={styles.navbartext} onClick={() => navigation.navigate('Profile')}>profile</Text>
            </Pressable>
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