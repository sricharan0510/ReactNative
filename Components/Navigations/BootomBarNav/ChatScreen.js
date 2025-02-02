import React from 'react'
import { StyleSheet, Text, TextInput, View, ImageBackground } from 'react-native'
import { useRoute } from '@react-navigation/native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'

function ChatScreen() {
    const route = useRoute();
    const { name } = route.params;
    return (
        <View style={styles.container}>
            <ImageBackground source={{ uri: "https://w0.peakpx.com/wallpaper/998/17/HD-wallpaper-green-theme-background-whatsapp-thumbnail.jpg" }} style={styles.msgViewing}>
            </ImageBackground>
            <View style={styles.msging}>
                <View style={styles.inputs}>
                    <MaterialCommunityIcons name='sticker-emoji' size={25} color={'black'} />
                    <TextInput style={styles.input} placeholder='Message' />
                    <View style={styles.camAttView}>
                        <MaterialIcons name='attach-file' size={25} color={'black'} />
                        <Ionicons name='camera-outline' size={25} color={'black'} />
                    </View>
                </View>
                <View style={styles.micView}>
                    <MaterialIcons name='mic' size={25} color={'white'} />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    msgViewing: {
        flex: 9,
        // backgroundColor: 'silver'
    },
    msging: {
        flex: 1,
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "center",
        gap: 5
    },
    inputs: {
        flexDirection: 'row',
        alignItems: "center",
        gap: 7,
        height: 50,
        width: "85%",
        borderColor: 'black',
        borderWidth: 1.5,
        paddingLeft: 8,
        borderRadius: 50
    },
    input: {
        width: '65%',
    },
    micView: {
        height: 50,
        width: 50,
        backgroundColor: 'green',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: "center"
    },
    camAttView: {
        flexDirection: "row",
        gap: 20
    }
})

export default ChatScreen
