import React from "react";
import { StyleSheet, SafeAreaView, View, StatusBar, Text } from "react-native";
import Header from "./Header";
import RnCard from "./RnCard";
import Categories from "./Categories";
import Carousel from "./Carousel";
import Footer from "./Footer";


const Main = () => {
    return (
        <>
            <SafeAreaView style={styles.container}>
                <Header style={styles.headerStyle} />
                <View style={styles.content}>
                    <View style={styles.welcomeOt}>
                        <Text style={styles.welcomeIn}>Welcome Sricharan,</Text>
                    </View>
                    <RnCard />
                    <Categories />
                    <Carousel />
                </View>
                <Footer style={styles.footerStyle}/>
            </SafeAreaView>
            <StatusBar />
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerStyle: {
        flex: 1,
    },
    content: {
        flex: 8,
    },
    footerStyle: {
        flex: 1,
    },
    welcomeIn: {
        fontSize: 18,
        fontWeight: '900',
        marginTop: 2,
        marginLeft: 15,
        marginBottom: 10,
        color: 'green'
    },
});

export default Main;
