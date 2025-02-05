import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, View, ImageBackground } from 'react-native'
import { useRoute } from '@react-navigation/native'

const { width, height } = Dimensions.get('screen');

const StatusScreen = () => {
    const route = useRoute();
    const {name, time} = route.params;
    return(
        <View>
            
        </View>
    )
}