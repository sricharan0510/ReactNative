import React, { useRef } from "react";
import { Animated, Button, StyleSheet, View, interpolate } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

//function AnimatedComponent() {

//   // Moving the red box from left to right and right to left in a single button click
//   const leftMove = useRef(new Animated.Value(0)).current;
//   const Fun = () => {
//     Animated.timing(leftMove, {
//       toValue: 100,
//       duration: 2000,
//       useNativeDriver: true,
//     }).start(() => {
//       Animated.timing(leftMove, {
//         toValue: 0,
//         duration: 2000,
//         useNativeDriver: true,
//       }).start();
//     }
//     );
//   };

//   // Changing the background color of the red box to black box and return back it to red color in a single button click using interpolation
//   const colorchange = leftMove.interpolate({
//     inputRange: [0, 100],
//     outputRange: ["yellow", "red"],
//   });


//   return (
//     <>
//       <SafeAreaView style={{ height: 800 }}>

//         <Animated.View
//           style={[styles.container, { transform: [{ translateX: leftMove }], backgroundColor: colorchange }]}>
//         </Animated.View>
//         <Button onPress={Fun} title="Move"></Button>

//       </SafeAreaView>
//     </>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     width: 200,
//     height: 200,
//   },
// });

// export default AnimatedComponent;




function AnimatedComponent() {

  const ballBounce = useRef(new Animated.Value(365)).current;
  const ballBounceFun = () => {
    Animated.timing(ballBounce, {
      toValue: -250,
      duration: 1500,
      useNativeDriver: false,
    }).start(() => {
      Animated.timing(ballBounce, {
        toValue: 365,
        duration: 1500,
        useNativeDriver: false,
      }).start();
    });
  }

  const colorchange = ballBounce.interpolate({
    inputRange: [0, 365],
    outputRange: ["green", "red"],
  })
  
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.ballDiv}>
        <Animated.View style={[styles.ball, { transform: [{ translateY: ballBounce }] }, { backgroundColor: colorchange }]}></Animated.View>
      </View>
      <View style={styles.btnBox}>
        <Button title="Bounce" onPress={ballBounceFun}></Button>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create(
  {
    ballDiv: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    ball: {
      width: 100,
      height: 100,
      borderRadius: 50,
      backgroundColor: 'red',
    },
    btnBox: {
      height: 100,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'yellow',
    }
  }
)

export default AnimatedComponent
