import { Text, View, StyleSheet } from "react-native";

const Footer = () => {
    return (
        <View style={styles.footerCobtainer}>
            <View style={styles.footerDiv}>
                <Text style={styles.text}>Footer</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    footerCobtainer : {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
    footerDiv: {
        backgroundColor: 'green',
        width: '90%',
        height: 50,
        borderRadius: 10,
    },
    text: {
        color: 'white',
        fontSize: 15,
        textAlign: 'center',
        marginTop: 10,
    }
})

export default Footer;