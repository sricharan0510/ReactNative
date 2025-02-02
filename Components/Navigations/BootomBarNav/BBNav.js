import React from "react";
import { View, Text, StyleSheet } from 'react-native'
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Screen1 from "./Screen1"
import Screen2 from "./Screen2"
import Screen3 from "./Screen3";
import Screen4 from "./Screen4";
import ChatScreen from "./ChatScreen";
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { SafeAreaView } from "react-native-safe-area-context";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();

const BottomBar = () => {
    const icons = {
        Chats: { focused: 'chatbox-ellipses', unfocused: 'chatbox-ellipses-outline', component: Ionicons },
        Updates: { focused: 'update', unfocused: 'update', component: MaterialIcons },
        Community: { focused: 'account-group', unfocused: 'account-group', component: MaterialCommunityIcons },
        Calls: { focused: 'call-sharp', unfocused: 'call-outline', component: Ionicons }
    };

    const headerIcons = {
        Chats: [
            { name: 'qr-code-scanner', component: MaterialIcons },
            { name: 'camera-outline', component: MaterialCommunityIcons },
            { name: 'dots-vertical', component: MaterialCommunityIcons }
        ],
        Updates: [
            { name: 'qr-code-scanner', component: MaterialIcons },
            { name: 'search', component: Ionicons },
            { name: 'dots-vertical', component: MaterialCommunityIcons }
        ],
        Community: [
            { name: 'qr-code-scanner', component: MaterialIcons },
            { name: 'dots-vertical', component: MaterialCommunityIcons }
        ],
        Calls: [
            { name: 'qr-code-scanner', component: MaterialIcons },
            { name: 'search', component: Ionicons },
            { name: 'dots-vertical', component: MaterialCommunityIcons }
        ]
    };

    return (
        <BottomTab.Navigator
            screenOptions={({ route }) => ({
                headerShown: true,
                headerTitle: route.name === 'Chats' ? () => (
                    <Text style={styles.waText}>WhatsApp</Text>
                ) : <Text>{route.name}</Text>,
                headerRight: () => (
                    <View style={styles.topIcons}>
                        {headerIcons[route.name].map((icon, index) => {
                            const IconComponent = icon.component;
                            return <IconComponent key={index} name={icon.name} size={25} color='black' />;
                        })}
                    </View>
                ),
                tabBarActiveTintColor: "green",
                tabBarInactiveTintColor: 'grey',
                tabBarIcon: ({ focused, color }) => {
                    const { focused: focusedIcon, unfocused: unfocusedIcon, component: IconComponent } = icons[route.name];
                    const iconName = focused ? focusedIcon : unfocusedIcon;
                    return <IconComponent name={iconName} color={color} size={28} />;
                },
                tabBarStyle: {
                    height: 90,
                    paddingTop: 20,
                },
                tabBarLabelStyle: {
                    fontSize: 12,
                    fontWeight: "bold"
                }
            })}
        >
            <BottomTab.Screen name="Chats" component={Screen1} />
            <BottomTab.Screen name="Updates" component={Screen2} />
            <BottomTab.Screen name="Community" component={Screen3} />
            <BottomTab.Screen name="Calls" component={Screen4} />
        </BottomTab.Navigator>
    )
}

const BBNav = () => {

    const chatScreenHeaderIcons = [
        { name: 'call-outline', component: Ionicons },
        { name: 'video-outline', component: MaterialCommunityIcons },
        { name: 'dots-vertical', component: MaterialCommunityIcons }
    ]

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Home">
                    <Stack.Screen name="Home" component={BottomBar} options={{ headerShown: false }} />
                    <Stack.Screen name="ChatScreen" component={ChatScreen}
                        options={({ route }) => ({
                            headerTitle: route.params.name,
                            headerRight: () => (
                                <View style={styles.topIcons}>
                                    {chatScreenHeaderIcons.map((icon, index) => {
                                        const IconComponent = icon.component;
                                        return <IconComponent key={index} name={icon.name} size={25} color='black' />;
                                    })}
                                </View>
                            ),
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
    heading: {
        height: 80,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
        padding: 18,
        backgroundColor: "#fff"
    },
    topIcons: {
        flexDirection: "row",
        gap: 25,
        alignItems: "center",
        paddingRight: 10
    }
})

export default BBNav;