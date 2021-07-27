import React from 'react';
import {ImageBackground, Text, View} from "react-native";
import styles from "./styles";

const Home = () => {
    return (
        <View>
            <ImageBackground source={require("../../../assets/images/wallpaper.jpg")} style={styles.image} >

            </ImageBackground>
        </View>
    );
};

export default Home;
