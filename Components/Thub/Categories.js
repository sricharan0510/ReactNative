import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

const Categories = () => {
    const data = [
        { id: "1", iconName: "home", itsName: "Home" },
        { id: "2", iconName: "settings", itsName: "Settings" },
        { id: "3", iconName: "account-circle", itsName: "Account" },
        { id: "4", iconName: "notifications", itsName: "Notifications" },
        { id: "5", iconName: "favorite", itsName: "Favorites" },
        { id: "6", iconName: "search", itsName: "Search" },
        { id: "7", iconName: "shopping-cart", itsName: "Cart" },
        { id: "8", iconName: "help", itsName: "Help" },
        { id: "9", iconName: "info", itsName: "Info" },
    ];
    const [showAll, setShowAll] = useState(true); 

    const toggleDisplay = () => {
        setShowAll(!showAll); 
    };

    

    return (
        <>
            <View>
                <View style={styles.buttonContainer}>
                <Text style={styles.text}>Categories :</Text>
                    <TouchableOpacity style={styles.button} onPress={toggleDisplay}>
                        <Text style={styles.buttonText}>
                            {showAll ? "More" : "Less"} 
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.containerOut}>
                <View style={styles.container}>
                    {data.slice(0 , showAll ? 8 : data.length).map((item, index) => (
                        <View style={styles.iconOut} key={index}>
                            <View style={styles.inconIn}>
                                <Icon name={item.iconName} size={40} color="black" />
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
        fontSize: 17,
        fontWeight: "bold",
        marginLeft: 10,
    },
    buttonContainer: {
        flexDirection: "row",
        marginTop: 10,
        justifyContent: 'space-between',
    },
    button: {
        backgroundColor: "green",
        // paddingLeft: 10,paddingRight:10,
        paddingBottom:5,paddingTop:5,
        width:70,
        borderRadius: 5,
        marginHorizontal: 10,
    },
    buttonText: {
        color: "white",
        fontWeight: "bold",
        textAlign : 'center'
    },
    container: {
        width: '90%',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 10,
    },
    containerOut: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconOut: {
        margin: 8,
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
        fontSize:10,
        color: 'green',
    },
});

export default Categories;
