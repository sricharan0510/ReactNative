import React from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import Screen1 from "./Screen1"
import Screen2 from "./Screen2"
import Screen3 from "./Screen3"

const TBNav = () => {
    const TopBar = createMaterialTopTabNavigator();
    return (
        <SafeAreaView style={{flex: 1}}>
            <NavigationContainer>
                <TopBar.Navigator
                    screenOptions={{
                        tabBarActiveTintColor: "white",
                        tabBarInactiveTintColor: "grey",
                        tabBarLabelStyle : {
                            fontSize: 18,
                        },
                        tabBarIndicatorStyle: {
                            backgroundColor: "grey",
                            height: 5,
                        },
                        swipeEnabled: true,
                        tabBarStyle: {
                            backgroundColor: '#075E54',
                            height: 80,
                            alignItems: 'center',
                        },
                        lazy: true
                    }}
                >
                    <TopBar.Screen name="Chats" component={Screen1} />
                    <TopBar.Screen name="Status" component={Screen2} />
                    <TopBar.Screen name="Calls" component={Screen3} />
                </TopBar.Navigator>
            </NavigationContainer>
        </SafeAreaView>
    )
}

export default TBNav;