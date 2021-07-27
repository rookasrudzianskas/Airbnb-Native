import React from 'react';
import {ImageBackground, Pressable, SafeAreaView, Text, View} from "react-native";
import styles from "./styles";
import { Fontisto } from '@expo/vector-icons';

const Home = () => {
    return (
        <SafeAreaView>
            <View>
            <Pressable style={styles.searchButton} onPress={() => console.log("")}>
                <Fontisto name="search" size={25} color={"#f15454"} />
                <Text style={styles.searchButtonText}>Where are you going?</Text>
            </Pressable>


            <ImageBackground source={require("../../../assets/images/wallpaper.jpg")} style={styles.image} >


                <Text style={styles.title}>Go Near</Text>

                <Pressable style={styles.button} onPress={() => console.log("")}>
                    <Text style={styles.buttonText}>Explore nearby stays</Text>
                </Pressable>
            </ImageBackground>
            </View>
        </SafeAreaView>
    );
};

export default Home;
