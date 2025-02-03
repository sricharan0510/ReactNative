import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, View, ImageBackground } from 'react-native'
import { useRoute } from '@react-navigation/native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'

function ChatScreen() {
    const route = useRoute();
    const { name, message } = route.params;
    return (
        <View style={styles.container}>
            <ImageBackground source={{ uri: "https://w0.peakpx.com/wallpaper/538/546/HD-wallpaper-whatsapp-dark-mode-whatsapp.jpg" }} style={styles.img}>
                <View style={{ height: 40, alignSelf: 'flex-start', backgroundColor: 'white', borderRadius: 10, margin: 20, flexDirection: 'row', gap: 15, justifyContent: 'center', alignItems: "center", padding: 10 }}>
                    <Text>{message}</Text>
                    <Text style={{color: 'grey', fontSize: 12 }}>4:15PM</Text>
                </View>
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
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    msgViewing: {
        flex: 9,
    },
    msging: {
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "center",
        gap: 5,
        position: 'absolute',
        bottom: 5,
        width: '100%',
        padding: 10,
    },
    inputs: {
        flexDirection: 'row',
        alignItems: "center",
        gap: 7,
        height: 50,
        width: "88%",
        borderColor: 'black',
        borderWidth: 1.5,
        paddingLeft: 8,
        borderRadius: 50,
        backgroundColor: "white"
    },
    input: {
        width: '65%',
    },
    img: {
        flex: 10,
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
