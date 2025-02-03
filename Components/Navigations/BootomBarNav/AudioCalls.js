import React from 'react'
import { Text, StyleSheet, View, ScrollView, Dimensions, Image } from 'react-native'
import Feather from 'react-native-vector-icons/Feather'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const { width, height } = Dimensions.get('screen');

function AudioCalls() {
    const data = [
        { name: "Praveen", image: "https://documents.iplt20.com/ipl/IPLHeadshot2024/2.png", date: "January 31, 6:18PM", call: "arrow-down-left" },
        { name: "Charan", image: "https://assets.entrepreneur.com/content/3x2/2000/1598965706-MyPost26.jpg", date: "January 28, 10:18AM", call: "arrow-up-right" },
        { name: "Ravi", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4mA-rz_dOFHn0izfA5OziyzVw8qcK3kukfg&s", date: "January 15, 6:18PM", call: "arrow-down-left" },
        { name: "Jayaram", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAqE6hN-ssU_TINQtm-FRtZ12OjEXZQZPE5w&s", date: "December 31, 6:18PM", call: "arrow-down-left" },
        { name: "Abhishek", image: "https://documents.iplt20.com/ipl/IPLHeadshot2024/57.png", date: "November 28, 10:18AM", call: "arrow-up-right" },
    ]
    return (
        <View style={{ flex: 1,  backgroundColor: 'white'  }}>
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
                <MaterialIcons name='add-call' size={25} color={'white'} />
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    addCall : {
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

export default AudioCalls
