import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import Screen1 from "./Screen1"
import Screen2 from "./Screen2"
import Screen3 from "./Screen3"
import Screen4 from './Screen4'
import ChatScreen from "./ChatScreen";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();
const TopBar = createMaterialTopTabNavigator();

const TopBarNav = () => ( 
    <TopBar.Navigator
        screenOptions={{
            tabBarActiveTintColor: "green",
            tabBarInactiveTintColor: "grey",
            tabBarLabelStyle: {
                fontSize: 12,
                fontWeight: "bold"
            },
            tabBarIndicatorStyle: {
                backgroundColor: "green",
                height: 4,
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
        <TopBar.Screen name="Chats" component={Screen1} options={{ tabBarIcon: ({ color }) => <MaterialIcons name="chat" size={25} color={color} /> }} />
        <TopBar.Screen name="Status" component={Screen2} options={{ tabBarIcon: ({ color }) => <MaterialIcons name="update" size={25} color={color} /> }} />
        <TopBar.Screen name="Community" component={Screen4} options={{ tabBarIcon: ({ color }) => <FontAwesome name="group" size={25} color={color} /> }} />
        <TopBar.Screen name="Calls" component={Screen3} options={{ tabBarIcon: ({ color }) => <MaterialIcons name="call" size={25} color={color} /> }} />
    </TopBar.Navigator>
);

const TBNav = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Home">
                    <Stack.Screen name="Home" component={TopBarNav}
                        options={{
                            header: () => (
                                <View style={styles.TopView}>
                                    <Text style={styles.waText}>WhatsApp</Text>
                                    <MaterialCommunityIcons name="dots-vertical" size={28} color='black' />
                                </View>
                            )
                        }}
                    />
                    <Stack.Screen name="ChatScreen" component={ChatScreen}
                        options={({route}) => ({        
                            headerShown: true,
                            headerTitle: route.params.name,
                            headerStyle: {
                                backgroundColor: "#fff",
                                height: 80,
                            },
                            headerTintColor: "black",
                            headerTitleStyle: {
                                fontSize: 20,
                                fontWeight: "500",
                            },
                        })}
                    />
                </Stack.Navigator>
            </NavigationContainer>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    waText: {
        color: 'green',
        fontWeight: 'bold',
        fontSize: 26,
    },
    TopView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
        padding: 18,
        backgroundColor: "#fff"
    }
})

export default TBNav;