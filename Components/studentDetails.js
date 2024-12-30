import { StyleSheet, Image, Text, View, FlatList } from 'react-native';

export default StudentDetails = () => {
    const stddata = [
        { 'name': 'Praveen', 'RollNo': '22MH1a4220', 'Branch': 'CSD', 'Year': '2nd', 'College': 'ACET' },
        { 'name': 'Charan Raju', 'RollNo': '22MH1a4250', 'Branch': 'CSM', 'Year': '1st', 'College': 'AEC' },
        { 'name': 'Pranay', 'RollNo': '22MH1a4261', 'Branch': 'CSE', 'Year': '5th', 'College': 'ACE' },
        { 'name': 'Karthik', 'RollNo': '22MH1a4254', 'Branch': 'CSE', 'Year': '3rd', 'College': 'ACOE' },
    ]
    return (
        <View style={styles.allCards}>
            <FlatList
                data={stddata}
                renderItem={({ item }) => (
                    <View style={styles.card}>
                        <Image source={{ uri: `https://info.aec.edu.in/ACET/StudentPhotos/${item.RollNo}.jpg` }} style={styles.image} />
                        <Text style={styles.Text}>Name: {item.name}</Text>
                        <Text style={styles.Text}>RollNo: {item.RollNo}</Text>
                        <Text style={styles.Text}>Branch: {item.Branch}</Text>
                        <Text style={styles.Text}>Year: {item.Year}</Text>
                        <Text style={styles.Text}>College: {item.College}</Text>
                    </View>
                )}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    allCards: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#f0f0f0',
    },
    card: {
        flex: 1,
        height: 430,
        width: 320,
        margin: 20,
        borderRadius: 10,
        boxShadow: '0 2px 8px 0 rgba(0,0,0,0.2)',
        backgroundColor: 'white',
        rowGap: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    Text: {
        fontSize: 20,
    },
    image: {
        width: 125,
        height: 150,
        borderRadius: 20
    },
});
