import React from 'react';
import {Pressable, Text, View} from "react-native";
import styles from "./styles";
import {Entypo} from "@expo/vector-icons";

const SuggestionRow = ({item}) => (
            <Pressable style={styles.row} onPress={() => navigation.navigate("Guests")}>
                <View style={styles.iconContainer}>
                    <Entypo name="location-pin" size={30} color={"#050505"} />
                </View>
                <Text style={styles.locationText}>{item.description}</Text>
            </Pressable>
        );

export default SuggestionRow;
