import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Screen1 from './Screen1'
import Screen2 from './Screen2'

function DNav() {
    const DropBar = createDrawerNavigator();
    return (
        <View style={{flex: 1}}>
            <NavigationContainer>
                <DropBar.Navigator 
                screenOptions={{
                    drawerStyle: {
                        width: 220,
                        backgroundColor : "white",
                    },
                    drawerLabelStyle : {
                        fontSize: 16 
                    },
                    drawerActiveBackgroundColor: "green",
                    drawerInactiveTintColor: "black",
                    drawerActiveTintColor: "white"
                }}
                >
                    <DropBar.Screen name='Home' component={Screen1}/>
                    <DropBar.Screen name='Profile' component={Screen2}/>
                </DropBar.Navigator>
            </NavigationContainer>
        </View>
    )
}

export default DNav
