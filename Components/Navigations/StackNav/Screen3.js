import React from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-paper";
import { useNavigation, useRoute } from "@react-navigation/native";

const Screen3 = () => {
    const navigation = useNavigation();
    const route = useRoute();
    console.log(route.name)
    return (
        <View style={{ flex: 1, alignItems: 'center', gap: 20 }}>
            <Text style={{ fontSize: 20, margin: 10, fontWeight: 'bold' }}>This is Screen 3</Text>
        </View>
    )

}
export default Screen3;