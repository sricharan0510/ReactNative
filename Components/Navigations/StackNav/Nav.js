import React from "react";
import Screen1 from "./Screen1"
import Screen2 from "./Screen2"
import Screen3 from "./Screen3"
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Icon from 'react-native-vector-icons/FontAwesome'

const Nav = () =>{
    const Stack = createStackNavigator();
    return(
        <NavigationContainer>
            <Stack.Navigator 
                screenOptions={{
                    headerStyle:{
                        backgroundColor:'green',
                        height:200
                    },
                    headerTintColor :"white",
                    headerTitleAlign : "center",
                    // headerRight:() => (
                    //     <Icon name="bell" color="yellow" size={20} style={{marginRight:15}}/>
                    // ),
                    // headerLeft:() => (
                    //     <></>
                    // ),
                    headerTitleStyle:{
                        fontWeight:900,
                        fontSize:30
                    },
                    headerShown : true
                }}
            >
                <Stack.Screen name="Technical Hub" component={Screen1} />
                <Stack.Screen name="Sricharan" component={Screen2} />
                <Stack.Screen name="Kittu" component={Screen3} />
            </Stack.Navigator>

        </NavigationContainer>
    )

}
export default Nav;