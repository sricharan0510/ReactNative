import React from 'react'
import { View, Text, Button } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import AudioCalls from './AudioCalls'
import VideoCalls from './VideoCalls'

function Screen4() {
    const TopBar = createMaterialTopTabNavigator();
    return (
        <>
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
                <TopBar.Screen name="Audio Calls" component={AudioCalls} options={{ tabBarIcon: ({ color }) => <Ionicons name="call" size={25} color={color} /> }} />
                <TopBar.Screen name="Video Calls" component={VideoCalls} options={{ tabBarIcon: ({ color }) => <FontAwesome name="video-camera" size={25} color={color} /> }} />
            </TopBar.Navigator>
        </>
    )
}

export default Screen4
