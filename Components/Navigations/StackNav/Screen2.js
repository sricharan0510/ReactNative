import React from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const Screen2 = () => {
    const navigation = useNavigation()
    const FunS1 = () => {
        navigation.navigate('Technical Hub')
    }
    const FunS3 = () => {
        navigation.navigate('Kittu')
    }
    return (
        <View style={{ flex: 1, alignItems: 'center', gap: 20 }}>
            <Text style={{ fontSize: 20, margin: 10 }}>Screen 2</Text>
            <Button mode="contained" style={{ width: 200 }} onPress={FunS1} >Move to Screen 1</Button>
            <Button mode="contained" style={{ width: 200 }} onPress={FunS3} >Move to Screen 3</Button>
        </View>
    )

}
export default Screen2;