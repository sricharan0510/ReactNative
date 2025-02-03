import { View, Text, Image, ScrollView, Dimensions, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Ionicons from 'react-native-vector-icons/Ionicons'

const chatlist = [
  {
    id: 1,
    name: 'Praveen',
    rollid: '22MH1A4220',
    message: 'Hey there!',
    image: "https://documents.iplt20.com/ipl/IPLHeadshot2024/2.png"
  },
  {
    id: 2,
    name: 'Charan',
    rollid: '22MH1A4250',
    message: 'How are you?',
    image: "https://assets.entrepreneur.com/content/3x2/2000/1598965706-MyPost26.jpg"
  },
  {
    id: 3,
    name: 'Karthik',
    rollid: '22MH1A4254',
    message: 'Good morning!',
    image: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202401/pawan-kalyan-og-310249453-1x1.jpg?VersionId=mky0i3aXBvNJxNgkWRdFo9SafUvTiBvi"
  },
  {
    id: 4,
    name: 'Pranay',
    rollid: '22MH1A4261',
    message: 'What\'s up?',
    image: "https://www.livemint.com/lm-img/img/2025/01/31/600x338/Allu-Arjun-in-Pushpa-2--Armed-with-a-chip-on-his-s_1737207136296_1738339603079.jpeg"
  },
  {
    id: 5,
    name: 'Abhishek',
    rollid: '22MH1A4257',
    message: 'Why?',
    image: "https://documents.iplt20.com/ipl/IPLHeadshot2024/57.png"
  },
  {
    id: 6,
    name: 'Manohar',
    rollid: '22MH1A4245',
    message: 'How?',
    image: "https://media.fashionnetwork.com/cdn-cgi/image/fit=contain,width=1000,height=1000,format=auto/m/cbac/4c59/01d7/f045/4a92/4b31/dd19/c5c6/976a/2300/2300.jpg"
  },
  {
    id: 7,
    name: 'Jayaram',
    rollid: '22MH1A4216',
    message: 'Why?',
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAqE6hN-ssU_TINQtm-FRtZ12OjEXZQZPE5w&s"
  },
  {
    id: 8,
    name: 'Vishnu',
    rollid: '22MH1A4259',
    message: 'Why?',
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbEoFMPnZyYZ7gPhq2vOIQrSpbxMKSYp2qZdGmOH1t_s_yhcIA-yAXljN9cPBL4OyGOKc&usqp=CAU"
  },
  {
    id: 9,
    name: 'Ravi',
    rollid: '22MH1A4252',
    message: 'Why?',
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4mA-rz_dOFHn0izfA5OziyzVw8qcK3kukfg&s"
  },
  {
    id: 10,
    name: 'Jithendra',
    rollid: '22MH1A4211',
    message: 'Why?',
    image: "https://assets.gqindia.com/photos/674fd03f346f968d6071a5e3/16:9/w_2560%2Cc_limit/Allu-Arjun-who-has-a-staggering-net-worth-of-Rs-460-crore-has-invested-his-wealth-in-7-successful-brands-Check-out-the-companies-the-Pushpa-2-actor-owns-or-has-invested-in.jpg"
  }
];

const { width, height } = Dimensions.get('screen');
const date = new Date().getDate() + '/' + (new Date().getMonth() + 1) + '/' + (new Date().getFullYear() - 2000);

const Screen1 = () => {
  const navigation = useNavigation();
  const fun = (name, message) => {
    navigation.navigate('ChatScreen', {name, message});
  }

  return (
    <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1, backgroundColor: 'white' }}>
        <View style={styles.searchBar}>
            <Ionicons name="search" size={25} color="grey" />
            <Text style={styles.searchBarText}>Ask Meta AI to search</Text>
        </View>
      <ScrollView style={{ flex: 1, backgroundColor: 'white' }} contentContainerStyle={{ paddingBottom: 20 }} showsVerticalScrollIndicator={false}>
        {chatlist.map((item) => (
          <View key={item.id}>
            <View style={{ flexDirection: 'row', padding: 16, borderBottomColor: 'grey', borderBottomWidth: 0.3, width: width }}>
              <Image source={{ uri: item.image }} style={{ width: 45, height: 45, borderRadius: 50 }} />
              <TouchableOpacity onPress={ () => fun(item.name, item.message)} >
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
const styles = StyleSheet.create({
    searchBar : {
        margin: 10,
        height: 50,
        width: '95%',
        borderWidth: 0.8,
        borderRadius: 40,
        paddingLeft: 20,
        flexDirection: "row",
        alignItems: "center",
        fontSize: 14,
        gap: 15
    },
})
export default Screen1;