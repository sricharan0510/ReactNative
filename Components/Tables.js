import { View, StyleSheet, ScrollView } from 'react-native';
import { Table, Rows, Row, Cell } from 'react-native-table-component';

const Tables = () => {
    const tableHead = ['Name', 'Age', 'RollNo', 'Place'];
    const tableData = [
        ['Sricharan', '20', '4223', 'Kothaguden'],
        ['Praveen', '19', '4220', 'Velvein'],
        ['Charann', '21', '4250', 'Hyderabad'],
        ['Karthik', '20', '4254', 'Kakinada'],
    ]; 
    return (
        <ScrollView horizontal={true}>
            <View style={styles.container}>
                <Table borderStyle={{ borderWidth: 1, borderColor: 'black' }}>
                    <Row data={tableHead} style={[styles.tableContent, {backgroundColor: '#01987A'}]} textStyle={{ fontSize: 20, textAlign: 'center', fontWeight: '600', color: 'white' }} />
                    {tableData.map((rowData, index) => (
                        <Row key={index} data={rowData} style={[styles.tableContent, index%2 && {backgroundColor: '#DBDBDB'} ]} textStyle={{ fontSize: 16, textAlign: 'center' }} />
                    ))}
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