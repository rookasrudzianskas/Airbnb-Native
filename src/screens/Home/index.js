import React from 'react';
import {ImageBackground, Pressable, Text, View} from "react-native";
import styles from "./styles";
import { Fontisto } from '@expo/vector-icons';

const Home = () => {
    return (
        <View>

            <Pressable style={styles.searchButton} onPress={() => console.log("Search button clicked")}>
                <Fontisto name="search" size={25} color={color} />;
                <Text style={styles.buttonText}>Where are you going?</Text>
            </Pressable>

            <ImageBackground source={require("../../../assets/images/wallpaper.jpg")} style={styles.image} >
                <Text style={styles.title}>Go Near</Text>

                <Pressable style={styles.button} onPress={() => console.log("Explore button clicked")}>
                    <Text style={styles.buttonText}>Explore nearby stays</Text>
                </Pressable>
            </ImageBackground>
        </View>
    );
};

export default Home;
