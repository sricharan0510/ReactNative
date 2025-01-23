import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, Text, ScrollView, View, TouchableOpacity, TextInput, ActivityIndicator, Button, FlatList } from 'react-native';
import StudentDetails from './Components/studentDetails'
import Tables from './Components/Tables'
import Main from './Components/Thub/Main'

import { SafeAreaProvider } from "react-native-safe-area-context";
import SafeArea from './Components/SafeArea';

export default function App() {
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,];
  return (
    <>
      <View style={styles.container}>

        {/* <Text style={{fontSize: 30}}>Lord Ganesha!</Text>  */}

        {/* <Image source={require('./assets/ganesh.jpg')} style={{ width: 500, height: 500 }} /> */}
        {/* <Image source={{ uri: "https://www.svtsydney.org/wp-content/uploads/2019/05/Lord_Ganesha-min.jpg" }}
        style={{ width: 300, height: 300 }} />   */}

        {/* <TextInput placeholder="Enter your name" style={{ padding: 10, borderWidth: 1 }}/> */}

        {/* <FlatList data={data} renderItem={({ item }) => <Text style={{ fontSize: 30 }}>{item}</Text>} /> */}

        {/* <Button title="Click Me" onPress={() => console.log("Button Clicked")} /> */}

        {/* <TouchableOpacity onPress={() => console.log("Button Clicked")}>
        <Text>Click Me</Text>
      </TouchableOpacity> */}

        {/* <ActivityIndicator size="large" color="red" /> */}


        {/* ============================================================================================== */}


        {/* <StudentDetails /> */}
        {/* <Tables /> */}

        {/* <SafeAreaProvider>
          <SafeArea />
        </SafeAreaProvider> */}

        {/* ============================================================================================== */}

        {/* <StatusBar style="auto" /> */}

        {/* ==================================================================================== */}

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