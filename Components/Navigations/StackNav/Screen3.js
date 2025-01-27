import React from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-paper";
import { useNavigation, useRoute } from "@react-navigation/native";

const Screen3 = () => {
    const navigation = useNavigation();
    const route = useRoute();
    console.log(route.name)
    const FunS1 = () => {
        navigation.navigate('Technical Hub')
    }
    const FunS2 = () => {
        navigation.navigate('Sricharan')
    }
    return (
        <View style={{ flex: 1, alignItems: 'center', gap: 20 }}>
            <Text style={{ fontSize: 20, margin: 10 }}>Screen 2</Text>
            <Button mode="contained" style={{ width: 200 }} onPress={FunS1} >Move to Screen 1</Button>
            <Button mode="contained" style={{ width: 200 }} onPress={FunS2} >Move to Screen 2</Button>
        </View>
    )

}
export default Screen3;