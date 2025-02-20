import { StyleSheet, View } from 'react-native';
import Main from './Components/Thub/Main'
import AnimatedComponent from './Components/AnimatedComponent'

import Nav from './Components/Navigations/StackNav/Nav'
import TBNav from './Components/Navigations/TopBarNav/TBNav';
import BBNav from './Components/Navigations/BootomBarNav/BBNav';
import DNav from './Components/Navigations/DropNav/DNav'
import { SafeAreaView } from 'react-native-safe-area-context';
import ImgPick from './Components/ImagePicker/ImgPick';

export default function App() {
  return (
    <>
      {/* <View style={styles.container}>
        <Main />
      </View> */}

      {/* <AnimatedComponent /> */}

      {/* <Nav /> */}
      {/* <TBNav /> */}
      {/* <BBNav /> */}
      {/* <DNav /> */}
      <SafeAreaView>
        <ImgPick/>
      </SafeAreaView>

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
    backgroundColor: '#fff',
  },
});


