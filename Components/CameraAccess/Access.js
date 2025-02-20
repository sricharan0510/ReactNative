import {useCameraPermissions, CameraView} from 'expo-camera';
import {View ,Text, Image} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';;
import React from 'react';
import { useState,useRef } from 'react';
import { Button } from 'react-native-paper';

const Access = () => {
  const [permission , grantpermission] = useCameraPermissions();
  const [allow ,setallow] = useState(false);
  const [face ,setface] = useState('back');
  const [Myimage , setMyimage] = useState(null)
  console.log(permission)
  const cameraRef = useRef(null)
  const Fun = () => {
    setallow(!allow)
  }
  const TakePhoto = async() =>{
    if(cameraRef.current != null)
    {
      const result = await cameraRef.current.takePictureAsync({
        quality:1
      })
      console.log(result)
      setMyimage(result.uri)
    }
    
  }
  return(
    <SafeAreaView>
      <Text>HAI</Text>
      <Button mode="contained" icon="camera" onPress={Fun}>Open Camera</Button>

      {allow ?<CameraView style={{width:300,height:300}} facing={face} enableTorch={false} ref={cameraRef}>
      </CameraView>:<Text>Camera is not opened</Text>}
      <Button mode="contained" icon="camera" onPress={TakePhoto}>Capture Picture</Button>
      {Myimage ? <Image source={{uri : Myimage}} style={{width:200,height:200}}/> : <Text>No Image Captured</Text>}
    </SafeAreaView>
  )
}
export default Access;