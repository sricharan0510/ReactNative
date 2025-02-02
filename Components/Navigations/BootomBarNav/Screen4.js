import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import AudioCalls from './AudioCalls'
import VideoCalls from './VideoCalls'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

function Screen4() {
    const TopBar = createMaterialTopTabNavigator();
    return (
        <>
            <View style={styles.addStatusView}>
                <View style={styles.profile}>
                    <FontAwesome name='heart' size={25} color={'green'} />
                </View>
                <View style={styles.StatusUpdateTex}>
                    <Text style={styles.CommunityText}>Add Favorites</Text>
                </View>
            </View>
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
                        height: 75,
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

const styles = StyleSheet.create({
    addStatusView: {
        flexDirection: "row",
        marginTop: 7,
        alignItems: "center",
        gap: 10,
        borderWidth: 1,
        borderColor: 'white',
        padding: 15,
        backgroundColor: 'white'
    },
    profile: {
        height: 50,
        width: 50,
        borderWidth: 2.5,
        borderRadius: 50,
        borderColor: 'green',
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    CommunityText: {
        fontSize: 18,
        fontWeight: '600'
    }
})

export default Screen4
