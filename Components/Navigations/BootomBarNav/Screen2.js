import React from 'react'
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const { width, height } = Dimensions.get('screen');
function Screen2() {
    const data = [
        { name: "Kittu", url: "https://banner2.cleanpng.com/20180517/jlw/avc6608p4.webp", time: '5:50 PM' },
        { name: "Praveen", url: "https://logowik.com/content/uploads/images/royal-challengers-bangalore1227.jpg", time: '5:50 PM' },
        { name: "Charan", url: "https://ih1.redbubble.net/image.1779433447.6063/st,large,507x507-pad,600x600,f8f8f8.u1.webp", time: '5:50 PM' },
    ]
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
            <Text style={{ margin:10, }}>Recent Updaates</Text>
            <View style={styles.allStatuses}>
                {data.map((item, index) => (
                    <View key={index}>
                        <View style={{ flexDirection: 'row',height5:80, padding:10, borderBottomColor: 'grey', borderBottomWidth: 0.3, width: width }}>
                            <View style={{ borderWidth: 3, borderColor: 'green', borderRadius: 50 }}>
                                <Image source={{ uri: item.url }} style={{ width: 50, height: 50, borderRadius: 50 }} />
                            </View>
                            <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-between", width: width - 90 }}>
                                <View style={{ marginLeft: 12, gap: 7 }}>
                                    <Text style={{ fontSize: 18, fontWeight: '600' }}>{item.name}</Text>
                                    <Text style={{ fontSize: 15, color: 'grey' }}>{item.time}</Text>
                                </View>
                            </View>
                        </View>

                    </View>
                ))}

            </View>
            <View style={styles.cameraAndTextView}>
                <View style={styles.textView}>
                    <FontAwesome5 name="pen" size={25} color={'black'} />
                </View>
                <View style={styles.CameraView}>
                    <MaterialCommunityIcons name="camera-plus" size={25} color={'white'} />
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
    allStatuses: {
        // backgroundColor: 'yellow',
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
