import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, Text, ScrollView, View, TouchableOpacity, TextInput, ActivityIndicator, Button, FlatList } from 'react-native';
import StudentDetails from './Components/studentDetails'
import Tables from './Components/Tables'
import Main from './Components/Thub/Main'

import { SafeAreaProvider } from "react-native-safe-area-context";
import SafeArea from './Components/SafeArea';

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <Main />

      </View>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 20,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 30,
    backgroundColor: '#f0f0f0',
  },
});