import { StyleSheet, View } from 'react-native';
import Main from './Components/Thub/Main'

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