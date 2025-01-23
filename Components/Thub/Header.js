import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

export default function Header() {
    return (
        <View style={[styles.container, { textAlign: 'center' }]}>
            <View style={styles.imageOut}>
                <Image
                    source={{uri : 'https://maya.technicalhub.io/assets/images/logo/logo-dark.png'} }
                    style={styles.imageIn}
                    resizeMode="contain"
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 120,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'center'
        // borderWidth: 1,
    },
    imageOut:{
        width: '40%',
        height: '90%',
        fontSize: 30,
        display : 'flex',
        justifyContent : 'center',
        alignItems : 'center',
    },
    imageIn: {
        width: '80%',
        height: '80%',
        marginLeft: '5%',
    }
});
