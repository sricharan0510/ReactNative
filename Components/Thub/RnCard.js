import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";  
import { Card } from "react-native-paper";
import topImage from "../../assets/topImage.png";

const RnCard = () => {
    return (
        <>
            <View style={styles.container}>
                <Card style={styles.card}>
                    <Card.Cover
                        source={topImage}
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
        height: 190,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    card: {
        width: '90%',
        height: '90%',
        backgroundColor: 'yellow'
    },
    imageIn: {
        width: '100%',  
        height: '100%',
        backgroundColor : 'green'
    },
});

export default RnCard;
