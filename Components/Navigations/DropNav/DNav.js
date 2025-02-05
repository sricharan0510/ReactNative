import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Screen1 from './Screen1'
import Screen2 from './Screen2'
import Ionicons from "react-native-vector-icons/Ionicons"

function DNav() {
    const DropBar = createDrawerNavigator();
    return (
        <View style={{ flex: 1 }}>
            <NavigationContainer>
                <DropBar.Navigator
                    screenOptions={{
                        drawerStyle: {
                            width: 250,
                            backgroundColor: "white",
                        },
                        drawerActiveBackgroundColor: "green",
                        drawerInactiveTintColor: "black",
                        drawerActiveTintColor: "white"
                    }}
                >
                    <DropBar.Screen
                        name="Home"
                        component={Screen1}
                        options={{
                            drawerIcon: ({ focused, color, size }) => (
                                <Ionicons name={focused ? "home" : "home-outline"} size={size} color={color} />
                            ),
                        }}
                    />
                    <DropBar.Screen
                        name="Profile"
                        component={Screen2}
                        options={{
                            drawerIcon: ({ focused, color, size }) => (
                                <Ionicons name={focused ? "person" : "person-outline"} size={size} color={color} />
                            ),
                        }}
                    />
                </DropBar.Navigator>
            </NavigationContainer>
        </View>
    )
}

export default DNav
