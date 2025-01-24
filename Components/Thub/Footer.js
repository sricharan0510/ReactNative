import { Text, View, StyleSheet } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import AntDesign from "react-native-vector-icons/AntDesign";

const Footer = () => {
    return (
        <View style={styles.footerCobtainer}>
            <View style={styles.footerDiv}>
                <View>
                    <MaterialIcons name='home' size={30} color="green" />
                    <Text>Home</Text>
                </View>
                <View>
                    <AntDesign name="calendar" size={30} color="green" />
                    <Text>Events</Text>
                </View>
                <View>
                    <MaterialIcons name='post-add' size={30} color="green" />
                    <Text>Join</Text>
                </View>
                <View>
                    <AntDesign name="user" size={30} color="green" />
                    <Text>Profile</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    footerCobtainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
    footerDiv: {
        width: '100%',
        height: 80,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    },
})

export default Footer;