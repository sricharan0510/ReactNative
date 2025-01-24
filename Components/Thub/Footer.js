import { Text, View, StyleSheet } from "react-native";

const Footer = () => {
    return (
        <View style={styles.footerDiv}>
            <Text style= {styles.text}>Footer</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    footerDiv: {
        backgroundColor: 'green',
        width: '100%',
        height: 50,
    },
    text : {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
        marginTop: 10,
    }
})

export default Footer;