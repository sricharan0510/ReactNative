import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";  // Added Image import
import { Card } from "react-native-paper";

const RnCard = () => {
    return (
        <>
            <View style={styles.container}>
                <Card style={styles.card}>
                    <Card.Cover
                        // source={{ uri: 'https://maya.technicalhub.io/assets/images/logo/logo-dark.png' }}
                        style={styles.imageIn}
                        resizeMode="contain"  
                    />
                </Card>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 150,
        // borderWidth: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    card: {
        width: '90%',
        height: '90%',
        // borderWidth: 1
    },
    imageIn: {
        width: '100%',  
        height: '100%',
        backgroundColor : 'green'
    },
});

export default RnCard;
