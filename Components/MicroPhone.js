import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import { useState } from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-paper";
import { Audio } from 'expo-av'

const MicroPhone = () => {

    const [MyAudio, setMyAudio] = useState(null)
    const [AudioPath, setAudioPath] = useState(null)

    const StartRecord = async () => {
        const { status } = await Audio.requestPermissionsAsync();
        if (status === 'granted') {
            const { recording } = await Audio.Recording.createAsync();
            setMyAudio(recording)
        }

    }
    const StopRecord = async () => {
        if (MyAudio == null) return;
        await MyAudio.stopAndUnloadAsync();
        setAudioPath(MyAudio._uri);
    }
    const PlayAudio = async () => {
        const { sound } = await Audio.Sound.createAsync({ uri: AudioPath })
        await sound.playAsync();
    }

    return (
        <SafeAreaView style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            gap: 20
        }}>
            <Text style={{
                fontSize: 24,
                fontWeight: 700
            }}>Recording</Text>
            <View style= {{
                flexDirection: 'row',
                gap: 10
            }}>
                <Button mode="contained" icon="record" onPress={StartRecord}>Start</Button>
                <Button mode="contained" icon="stop" onPress={StopRecord}>Stop</Button>
            </View>
            <Button mode="contained" icon="play" onPress={PlayAudio}>Play</Button>
        </SafeAreaView>
    )
}

export default MicroPhone;