import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

function Screen2() {
    return (
        <View style={styles.container}>
            <Text style={styles.statusHeading}>Status</Text>
            <View style={styles.addStatusView}>
                <View style={styles.profile}>
                    <FontAwesome name='user-plus' size={30} color={'green'} />
                </View>
                <View style={styles.StatusUpdateTex}>
                    <Text style={styles.myStatusText}>My Status</Text>
                    <Text>Tap to add status update</Text>
                </View>
            </View>
            <View style={styles.cameraAndTextView}>
                <View style={styles.textView}>
                    <FontAwesome5 name="pen" size={25} color={'black'} />
                </View>
                <View style={styles.CameraView}>
                    <FontAwesome name="camera" size={25} color={'white'} />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    },
    statusHeading: {
        fontWeight: "bold",
        fontSize: 20
    },
    addStatusView: {
        flexDirection: "row",
        marginTop: 20,
        alignItems: "center",
        gap: 15
    },
    profile: {
        height: 60,
        width: 60,
        borderWidth: 2.5,
        borderRadius: 50,
        borderColor: 'grey',
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    myStatusText: {
        fontWeight: "bold",
        fontSize: 20,
        marginBottom: 2
    },
    cameraAndTextView: {
        height: 100,
        position: 'absolute',
        bottom: 80,
        right: 30,
        flexDirection: 'column',
        gap: 40
    },
    CameraView: {
        height: 50,
        width: 50,
        backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: "center",
        borderRadius: 15
    },
    textView: {
        height: 50,
        width: 50,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: "center",
        borderRadius: 15
    }
})

export default Screen2
