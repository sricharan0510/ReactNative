import React from "react";
import { Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import Screen1 from "./Screen1"
import Screen2 from "./Screen2"
import Screen3 from "./Screen3"
import Screen4 from './Screen4'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const TBNav = () => {
    const TopBar = createMaterialTopTabNavigator();
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Text style={styles.waText}>Whatsapp</Text>
            <NavigationContainer>
                <TopBar.Navigator
                    screenOptions={{
                        tabBarActiveTintColor: "green",
                        tabBarInactiveTintColor: "green",
                        tabBarLabelStyle: {
                            fontSize: 12,
                            fontWeight: "bold"
                        },
                        tabBarIndicatorStyle: {
                            backgroundColor: "green",
                            height: 5,
                        },
                        swipeEnabled: true,
                        tabBarStyle: {
                            backgroundColor: 'white',
                            height: 80,
                            alignItems: 'center',
                        },
                        lazy: true
                    }}
                >
                    <TopBar.Screen name="Chats" component={Screen1} options={{ tabBarIcon: () => <MaterialIcons name="chat" size={25} color="green" /> }} />
                    <TopBar.Screen name="Status" component={Screen2} options={{ tabBarIcon: () => <MaterialIcons name="update" size={25} color="green" /> }} />
                    <TopBar.Screen name="Community" component={Screen4} options={{ tabBarIcon: () => <FontAwesome name="group" size={25} color="green" /> }} />
                    <TopBar.Screen name="Calls" component={Screen3} options={{ tabBarIcon: () => <MaterialIcons name="call" size={25} color="green" /> }} />
                </TopBar.Navigator>
            </NavigationContainer>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    waText: {
        color : 'green',
        padding: 15,
        fontWeight: 'bold',
        fontSize: 26,
    }
})

export default TBNav;