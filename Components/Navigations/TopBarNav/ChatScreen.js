import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useRoute } from '@react-navigation/native'

function ChatScreen() {
  const route = useRoute();
  const { name } = route.params;
  return (
    <View>
      
    </View>
  )
}

export default ChatScreen
