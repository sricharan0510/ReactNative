import React from "react";
import { Text,StyleSheet,View,FlatList,Dimensions } from "react-native";

const Carousel = () => {
  const {width , height} = Dimensions.get('screen')
  const Info = ["Sricharan", "Praveen", "Charan", "Karthik", "Kittu"]

   return(
    <View>
      <Text style={{color: "green", fontSize: 16, fontWeight: "bold", marginLeft: 10}}>Digi Wall</Text>
      <FlatList style={{marginTop: 10}}
        data = {Info}
        renderItem={({item})=>(
          <View style={{height:190,width:width,justifyContent:'center',alignItems:'center'}}>
            <View style={{width:"90%",height:"90%",justifyContent:'center',alignItems:"center", backgroundColor:"green",borderRadius:20}}>
            <Text style={{color: 'white', fontSize:20}}>{item}</Text>
            </View>
         </View>
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
      />
    </View>
   )
}
export default Carousel;