import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import FontAwesome6 from "react-native-vector-icons/FontAwesome6";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Categories = () => {

    const data = [
        { id: 1, name: "Programs", icon: "microsoft-visual-studio-code", tag: "MaterialCommunityIcons" },
        { id: 2, name: "Courses", icon: "graduation-cap", tag: "FontAwesome6" },
        { id: 3, name: "Certifications", icon: "certificate", tag: "MaterialCommunityIcons" },
        { id: 4, name: "OwlCoder", icon: "owl", tag: "MaterialCommunityIcons" },
        { id: 5, name: "Placements", icon: "chess-pawn", tag: "FontAwesome6" },
        { id: 6, name: "Team", icon: "people-group", tag: "FontAwesome6" },
        { id: 7, name: "Partners", icon: "handshake", tag: "FontAwesome6" },
        { id: 8, name: "Registration", icon: "app-registration", tag: "MaterialIcons" },
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
                                {React.createElement(
                                    item.tag === "MaterialIcons" ? MaterialIcons :
                                        item.tag === "FontAwesome6" ? FontAwesome6 :
                                            MaterialCommunityIcons,
                                    { name: item.icon, size: 25, color: "black" }
                                )}
                            </View>
                            <Text style={styles.iconText}>{item.name}</Text>
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
        borderBottomRightRadius: 15,
        borderTopLeftRadius: 15,
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
