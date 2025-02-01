import { View, Text, Image, ScrollView, Dimensions, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const chatlist = [
  {
    id: 1,
    name: 'Praveen',
    rollid: '22MH1A4220',
    message: 'Hey there!',
  },
  {
    id: 2,
    name: 'Charan',
    rollid: '22MH1A4250',
    message: 'How are you?',
  },
  {
    id: 3,
    name: 'Karthik',
    rollid: '22MH1A4254',
    message: 'Good morning!',
  },
  {
    id: 4,
    name: 'Pranay',
    rollid: '22MH1A4261',
    message: 'What\'s up?',
  },
  {
    id: 5,
    name: 'Abhishek',
    rollid: '22MH1A4257',
    message: 'Why?',
  },
  {
    id: 6,
    name: 'Manohar',
    rollid: '22MH1A4245',
    message: 'How?',
  },
  {
    id: 7,
    name: 'Jayaram',
    rollid: '22MH1A4216',
    message: 'Why?',
  },
  {
    id: 8,
    name: 'Vishnu',
    rollid: '22MH1A4259',
    message: 'Why?',
  }
];

const { width, height } = Dimensions.get('screen');
const date = new Date().getDate() + '/' + (new Date().getMonth() + 1) + '/' + (new Date().getFullYear() - 2000);

const Screen1 = () => {
  const navigation = useNavigation();
  const fun = (name) => {
    navigation.navigate('ChatScreen', {name});
  }

  return (
    <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1, backgroundColor: '#fff' }}>
      <ScrollView style={{ flex: 1 }} contentContainerStyle={{ paddingBottom: 20 }} showsVerticalScrollIndicator={false}>
        {chatlist.map((item) => (
          <View key={item.id}>
            <View style={{ flexDirection: 'row', padding: 18, borderBottomColor: 'grey', borderBottomWidth: 0.3, width: width }}>
              <Image source={{ uri: `https://info.aec.edu.in/ACET/StudentPhotos/${item.rollid}.jpg` }} style={{ width: 45, height: 45, borderRadius: 50 }} />
              <TouchableOpacity onPress={ () => fun(item.name)} >
                <View style={{ flex: 1, flexDirection: "row", justifyContent:"space-between", width: width-90}}>
                  <View style={{ marginLeft: 12, gap: 7 }}>
                    <Text style={{ fontSize: 18, fontWeight: '600' }}>{item.name}</Text>
                    <Text style={{ fontSize: 15, color: 'grey' }}>{item.message}</Text>
                  </View>
                  <View>
                    <Text style={{ fontSize: 12, color: 'grey' }}>{date}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>

          </View>
        ))}

      </ScrollView>
    </View>
  );
}
export default Screen1;