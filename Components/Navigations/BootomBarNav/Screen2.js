import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

function Screen2() {
    return (
        <View style={styles.container}>
            <Text style={styles.statusHeading}>Status</Text>
            <View style={styles.addStatusView}>
                <View style={styles.profile}>
                    <FontAwesome name='user-plus' size={32} color={'green'} />
                </View>
                <View style={styles.StatusUpdateTex}>
                    <Text style={styles.myStatusText}>My Status</Text>
                    <Text>Tap to add status update</Text>
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
    profile : {
        height: 60,
        width: 60,
        borderWidth: 2.5,
        borderRadius: 50,
        borderColor: 'grey',
        flexDirection: "row",
        justifyContent: "center",
        alignItems:"center"
    },
    myStatusText : {
        fontWeight: "bold",
        fontSize: 20,
        marginBottom: 2
    }
})

export default Screen2
