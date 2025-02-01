import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { useRoute } from '@react-navigation/native'

function ChatScreen() {
  const route = useRoute();
  const { name } = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.MsgContainer}></View>
      <View style={styles.inputsContainer}>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  MsgContainer : {
    flex: 9,
    // backgroundColor: 'green'
  },
  inputsContainer : {
    flex: 1,
    // backgroundColor: 'yellow'
  }
})

export default ChatScreen
