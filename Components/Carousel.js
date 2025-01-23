import React from "react";
import { Text,StyleSheet,View,FlatList,Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Carousel = () => {
  const {width , height} = Dimensions.get('screen')
  const Info = ["Sricharan", "Praveen", "Charan"]
  const Fun = (event) => {
    console.log(Math.round(event.nativeEvent.contentOffset.x/width))
  }
   return(
    <SafeAreaView>
      <Text>HAI</Text>
      <FlatList 
        data = {Info}
        renderItem={({item})=>(
          <View style={{height:200,width:width,justifyContent:'center',alignItems:'center'}}>
            <View style={{width:"90%",height:"90%",justifyContent:'center',alignItems:"center",backgroundColor:'black'}}>
            <Text style={{color:"white",fontSize:50}}>{item}</Text>
            </View>
         </View>
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        onScroll={(event) => Fun(event)}
      />
    </SafeAreaView>
   )
}
export default Carousel;