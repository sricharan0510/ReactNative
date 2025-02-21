import React, { Component, useState } from 'react'
import { Text, StyleSheet, View, Image } from 'react-native'
import { Button } from 'react-native-paper'
import * as Pick from 'expo-image-picker'

const ImgPick = () => {
    const [img, setImg] = useState("")
    const ImagePicker = async () => {
        const imageResult = await Pick.requestMediaLibraryPermissionsAsync();
        console.log(imageResult.status);
        if (imageResult.status === "granted") {
            const r = await Pick.launchImageLibraryAsync();
            console.log(r.assets[0].uri)
            setImg(r.assets[0].uri);
        }
    }
    return (
        <View>
            <Button mode='contained' onPress={ImagePicker}>Pick Image</Button>
            <Image source={{ uri: img }} style={{height: 100, width: 100}} />
        </View>
    )

}
export default ImgPick;
const styles = StyleSheet.create({})
