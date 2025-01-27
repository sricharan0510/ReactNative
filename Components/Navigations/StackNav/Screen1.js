import React from "react";
import { View,Text } from "react-native";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const Screen1 = () =>{
    const navigation = useNavigation();
    const Fun=()=>{
        navigation.navigate('Screen2',{name:"Sricharan"})
    }
    return(
        <View>
            <Text>Screen 1</Text>
            <Button mode="contained" style={{width:200}} onPress={Fun} >Move to Screen 2</Button>
        </View>
    )

}
export default Screen1;