import React from "react";
import { StyleSheet, SafeAreaView, View, StatusBar , Text} from "react-native";
import Header from "./Header";
import RnCard from "./RnCard";
import Catogories from "./Categories";
import Corosel from "./Carousel";


const Main = () => {
    return (
        <>
        <SafeAreaView style={styles.container}>
            <Header />
            <View style = {styles.welcomeOt}>
                <Text style = {styles.welcomeIn}>Welcome Sricharan ,</Text>
            </View>
            <RnCard />
            <Catogories />
            <Corosel style={styles.c} />
        </SafeAreaView>
        <StatusBar />
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    welcomeOt : {
        color : 'white',
    },
    welcomeIn:{ 
        fontSize: 15,
        fontWeight:'bold',
        marginTop: 2,  
        marginLeft: 15,
        marginBottom: 10,
        color:'green'
    },
    c:{
        marginTop: 100
    }
});

export default Main;
