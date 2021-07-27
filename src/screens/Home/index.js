import React from 'react';
import {ImageBackground, Pressable, Text, View} from "react-native";
import styles from "./styles";

const Home = () => {
    return (
        <View>
            <ImageBackground source={require("../../../assets/images/wallpaper.jpg")} style={styles.image} >
                <Text style={styles.title}>Go Near</Text>

                <Pressable>

                </Pressable>
            </ImageBackground>
        </View>
    );
};

export default Home;
