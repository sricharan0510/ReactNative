import { View, StyleSheet, ScrollView } from 'react-native';
import { Table, Rows, Row, Cell } from 'react-native-table-component';

const Tables = () => {
    const tableHead = ['Name', 'Age', 'RollNo', 'Place'];
    const tableData = [
        ['Sricharan', '20', '4223', 'Kothaguden'],
        ['Praveen', '19', '4220', 'Velvein'],
        ['Charann', '21', '4250', 'Hyderabad'],
    ];
    return (
        <ScrollView horizontal={true}>
            <View style={styles.container}>
                <Table borderStyle={{ borderWidth: 2, borderColor: 'black' }}>
                    <Row data={tableHead} style={styles.tableContent} textStyle={{ fontSize: 20, textAlign: 'center', fontWeight: 600 }} />
                    <Rows data={tableData} style={styles.tableContent} textStyle={{ fontSize: 16, textAlign: 'center' }} />
                </Table>
            </View>
        </ScrollView>
    )
}

export default Tables;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignSelf: 'center',
    },
    tableContent: {
        height: 50,
        width: 500,
    },
});