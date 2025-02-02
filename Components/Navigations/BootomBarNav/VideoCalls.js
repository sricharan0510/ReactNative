import React from 'react'
import { Text, StyleSheet, View, ScrollView, Dimensions, Image } from 'react-native'
import Feather from 'react-native-vector-icons/Feather'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const { width, height } = Dimensions.get('screen');

function VideoCalls() {
    const data = [
        { name: "Karthik", rollid: "22MH1A4254", date: "January 30, 6:18PM", call: "arrow-down-left" },
        { name: "Pranay", rollid: "22MH1A4261", date: "Decemberry 28, 7:18AM", call: "arrow-up-right" },
        { name: "Vishnu", rollid: "22MH1A4259", date: "October 05, 2:18PM", call: "arrow-down-left" },
    ]
    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <ScrollView contentContainerStyle={{ paddingBottom: 20 }} showsVerticalScrollIndicator={false}>
                {data.map((item, index) => (
                    <View key={index}>
                        <View style={{ flexDirection: 'row', padding: 16, borderBottomColor: 'grey', borderBottomWidth: 0.3, width: width }}>
                            <Image source={{ uri: `https://info.aec.edu.in/ACET/StudentPhotos/${item.rollid}.jpg` }} style={{ width: 45, height: 45, borderRadius: 50 }} />
                            <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-between", width: width - 90 }}>
                                <View style={{ marginLeft: 12, gap: 7 }}>
                                    <Text style={{ fontSize: 18, fontWeight: '600' }}>{item.name}</Text>
                                    <Text style={{ fontSize: 15, color: 'grey' }}>{item.date}</Text>
                                </View>
                                <View>
                                    <Feather name={item.call} size={25} color={'green'} />
                                </View>
                            </View>
                        </View>

                    </View>
                ))}

            </ScrollView>
            <View style={styles.addCall}>
                <MaterialIcons name='add-call' size={25} color={'white'} />
            </View>
        </View>

    )
}
const styles = StyleSheet.create({
    addCall: {
        height: 55,
        width: 55,
        backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: "center",
        borderRadius: 15,
        position: 'absolute',
        bottom: 30,
        right: 30
    }
})

export default VideoCalls
