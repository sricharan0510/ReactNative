import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Screen1 from "./Screen1"
import Screen2 from "./Screen2"
import Icon from "react-native-vector-icons/Ionicons"

const BBNav = () => {
  const BottomTab = createBottomTabNavigator();
  return(
    <NavigationContainer>
      <BottomTab.Navigator
        screenOptions={({route}) =>({
          headerShown:true,
          tabBarActiveTintColor:"green",
          tabBarInactiveTintColor:'black',
          tabBarIcon:({focused,color}) => {
            let IconName ;
            if(route.name == 'Home'){
              IconName = focused ? 'home' : 'home-outline'
            }
            else if(route.name == 'Events'){
              IconName = focused ? "bar-chart" : "bar-chart-outline"
            }
            return <Icon name={IconName} color={color} size={25} />
          },
          tabBarStyle:{
            height:80,
          },
          tabBarLabelStyle:{
            fontSize:16
          }
        })}
      >
        <BottomTab.Screen name="Home" component={Screen1} />
        <BottomTab.Screen name="Events" component={Screen2} />
      </BottomTab.Navigator>
    </NavigationContainer>
  )
}

export default BBNav;