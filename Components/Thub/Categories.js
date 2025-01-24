import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

const Categories = () => {
    const data = [
        { id: "1", iconName: "home", itsName: "Home" },
        { id: "2", iconName: "settings", itsName: "Settings" },
        { id: "3", iconName: "account-circle", itsName: "Account" },
        { id: "4", iconName: "notifications", itsName: "Notifications" },
        { id: "5", iconName: "favorite", itsName: "Favorites" },
        { id: "6", iconName: "search", itsName: "Search" },
        { id: "7", iconName: "info", itsName: "Info" },
        { id: "8", iconName: "help", itsName: "Help" },
    ];

    return (
        <>
            <View>
                <View style={styles.buttonContainer}>
                    <Text style={styles.text}>Categories</Text>
                </View>
            </View>
            <View style={styles.containerOut}>
                <View style={styles.container}>
                    {data.map((item, index) => (
                        <View style={styles.iconOut} key={index}>
                            <View style={styles.inconIn}>
                                <Icon name={item.iconName} size={35} color="black" />
                            </View>
                            <Text style={styles.iconText}>{item.itsName}</Text>
                        </View>
                    ))}
                </View>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    text: {
        color: "green",
        fontSize: 16,
        fontWeight: "bold",
        marginLeft: 10,
    },
    buttonContainer: {
        marginTop: 10,
    },
    container: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 15,
        padding: 10,
        justifyContent: 'center',
    },
    containerOut: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconOut: {
        margin: 10,
    },
    inconIn: {
        width: 60,
        height: 60,
        justifyContent: "center",
        alignItems: "center",
        borderBottomRightRadius: 10,
        borderTopLeftRadius: 10,
        borderWidth: 3,
        borderColor: 'green',
    },
    iconText: {
        textAlign: 'center',
        fontWeight: 'bold',
        marginTop: 5,
        fontSize: 12,
        color: 'green',
    },
});

export default Categories;
