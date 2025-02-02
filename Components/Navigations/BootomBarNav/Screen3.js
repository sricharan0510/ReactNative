import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

function Screen3() {
    return (
        <View style={styles.container}>
            <View style={styles.addStatusView}>
                <View style={styles.profile}>
                    <MaterialIcons name='group-add' size={28} color={'green'} />
                </View>
                <View style={styles.StatusUpdateTex}>
                    <Text style={styles.CommunityText}>New Community</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
    },
    addStatusView: {
        flexDirection: "row",
        marginTop: 7,
        alignItems: "center",
        gap: 10,
        borderWidth: 1,
        borderColor: 'white',
        padding : 15,
        backgroundColor: 'white'
    },
    profile : {
        height: 50,
        width: 50,
        borderWidth: 2.5,
        borderRadius: 10,
        borderColor: 'green',
        flexDirection: "row",
        justifyContent: "center",
        alignItems:"center"
    },
    CommunityText : {
        fontSize: 18,
        fontWeight: '600'
    }
})

export default Screen3
