import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useState } from "react";
import { Button } from "react-native-paper";
import * as LocalAuthentication from "expo-local-authentication";
import Icon from "react-native-vector-icons/FontAwesome5";
import { SafeAreaView } from "react-native-safe-area-context";

 function FingerPrint() {
  const { width, height } = Dimensions.get("screen"); 
  const [auth, setAUth] = useState(false)
  const unlock = async () => {
    const status = await LocalAuthentication.hasHardwareAsync();
    if (status) {
      const result = await LocalAuthentication.isEnrolledAsync();
      if (result) {
        const auth = await LocalAuthentication.authenticateAsync();
        console.log(auth);
        setAUth(true);
      }
    }
  };
  return (
    <SafeAreaView
      style={{
        width: width,
        height: height,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text style={{ fontSize: 20, fontWeight: 700 }}>FingerPrint Authentication</Text>
      <View style={{ width: 150, marginTop: 25 }}>
        <Button
          mode="contained"
          icon={({ size, color }) => (
            <Icon name="fingerprint" size={size * 1.2} color={color} />
          )}
          onPress={unlock}
        >
          Unlock
        </Button>
      </View>
      {auth && <Text style={{ marginTop: 50, fontSize: 20, fontWeight: 700 }}>Authentication Successfull!</Text>}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});

export default FingerPrint;