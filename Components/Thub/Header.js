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
            {/* <Text style={styles.text}>Technical Hub</Text> */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 50,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'center'
        // borderWidth: 1,
    },
    text: {
        width: '70%',
        fontSize: 17,
        // borderWidth: 1,
        display : 'flex',
        justifyContent : 'center',
        alignItems : 'center',
        textAlign :'center'
    },
    imageOut:{
        width: '30%',
        height: '90%',
        fontSize: 30,
        // borderWidth: 1,
        display : 'flex',
        justifyContent : 'center',
        alignItems : 'center',
    },
    imageIn: {
        width: '90%',
        height: '90%',
        // borderWidth: 1,  
        marginLeft: '5%',
    }
});
