import { StyleSheet, View } from 'react-native';
import Main from './Components/Thub/Main'
import AnimatedComponent from './Components/AnimatedComponent'

export default function App() {
  return (
    <>
      {/* <View style={styles.container}>
        <Main />
      </View> */}


      <AnimatedComponent />

      
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


