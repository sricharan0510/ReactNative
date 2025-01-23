import React from "react";
import { Text,StyleSheet,View,FlatList,Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Carousel = () => {
  const {width , height} = Dimensions.get('screen')
  const Info = ["Sricharan", "Praveen", "Charan"]

   return(
    <SafeAreaView>
      <FlatList 
        data = {Info}
        renderItem={({item})=>(
          <View style={{height:200,width:width,justifyContent:'center',alignItems:'center'}}>
            <View style={{width:"90%",height:"90%",justifyContent:'center',alignItems:"center", borderRadius:30, borderWidth: 2, borderColor: 'green'}}>
            <Text style={{fontSize:50}}>{item}</Text>
            </View>
         </View>
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
      />
    </SafeAreaView>
   )
}
export default Carousel;