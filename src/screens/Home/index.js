import React from 'react';
import {ImageBackground, Pressable, SafeAreaView, Text, View} from "react-native";
import styles from "./styles";
import { Fontisto } from '@expo/vector-icons';
import {useNavigation} from "@react-navigation/native";

const Home = () => {

    const navigation = useNavigation();

    return (
        <>
            <View>
            <Pressable style={styles.searchButton} onPress={() => navigation.navigate("Destination Search")}>
                <Fontisto name="search" size={25} color={"#f15454"} />
                <Text style={styles.searchButtonText}>Where are you going?</Text>
            </Pressable>


            <ImageBackground source={require("../../../assets/images/wallpaper.jpg")} style={styles.image} >


                <Text style={styles.title}>Go Near</Text>

                <Pressable style={styles.button} onPress={() => navigation.navigate("Destination Search")}>
                    <Text style={styles.buttonText}>Explore nearby stays</Text>
                </Pressable>
            </ImageBackground>
            </View>
        </>
    );
};

export default Home;
