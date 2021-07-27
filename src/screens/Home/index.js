import React from 'react';
import {ImageBackground, Text, View} from "react-native";
import styles from "./styles";

const Home = () => {
    return (
        <View>
            <ImageBackground source={"./assets/images/wallpaper.jpg"} style={styles.image} >

            </ImageBackground>
        </View>
    );
};

export default Home;
