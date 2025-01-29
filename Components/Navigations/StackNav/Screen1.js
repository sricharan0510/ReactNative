import React from "react";
import { View,Text } from "react-native";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const Screen1 = () =>{
    const navigation = useNavigation();
    const FunS2 =()=>{
        navigation.navigate("Sricharan")
    }
    return(
        <View  style={{flex: 1, alignItems: 'center', gap: 20}}>
            <Text style={{fontSize:20, margin: 10, fontWeight: 'bold'}}>This is Screen 1</Text>
            <Button mode="contained" style={{width:200}} onPress={FunS2} >Move to Screen 2</Button>
        </View>
    )

}
export default Screen1;