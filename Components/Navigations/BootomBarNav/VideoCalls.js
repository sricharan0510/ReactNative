import React from 'react'
import { Text, StyleSheet, View, ScrollView, Dimensions, Image } from 'react-native'
import Feather from 'react-native-vector-icons/Feather'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const { width, height } = Dimensions.get('screen');

function VideoCalls() {
    const data = [
        { name: "Karthik", image: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202401/pawan-kalyan-og-310249453-1x1.jpg?VersionId=mky0i3aXBvNJxNgkWRdFo9SafUvTiBvi", date: "January 30, 6:18PM", call: "arrow-down-left" },
        { name: "Pranay", image: "https://www.livemint.com/lm-img/img/2025/01/31/600x338/Allu-Arjun-in-Pushpa-2--Armed-with-a-chip-on-his-s_1737207136296_1738339603079.jpeg", date: "Decemberry 28, 7:18AM", call: "arrow-up-right" },
        { name: "Vishnu", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbEoFMPnZyYZ7gPhq2vOIQrSpbxMKSYp2qZdGmOH1t_s_yhcIA-yAXljN9cPBL4OyGOKc&usqp=CAU", date: "October 05, 2:18PM", call: "arrow-down-left" },
    ]
    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <ScrollView contentContainerStyle={{ paddingBottom: 20 }} showsVerticalScrollIndicator={false}>
                {data.map((item, index) => (
                    <View key={index}>
                        <View style={{ flexDirection: 'row', padding: 16, borderBottomColor: 'grey', borderBottomWidth: 0.3, width: width }}>
                            <Image source={{ uri: item.image }} style={{ width: 45, height: 45, borderRadius: 50 }} />
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
                <MaterialIcons name='video-call' size={25} color={'white'} />
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
