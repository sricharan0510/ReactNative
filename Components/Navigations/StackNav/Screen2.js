import React from "react";
import { View,Text } from "react-native";
import { Button } from "react-native-paper";
import { useNavigation,useRoute } from "@react-navigation/native";
import { use } from "react";

const Screen2 = () =>{
    const navigation  = useNavigation()
    const route = useRoute();
    console.log(route)
    const Fun=()=>{
        navigation.navigate('Technical Hub')
    }
    return(
        <View>
            <Text>Screen 2</Text>
            <Button mode="contained" onPress={Fun}>Move to Screen 1</Button>
        </View>
    )

}
export default Screen2;