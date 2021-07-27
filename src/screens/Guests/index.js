import React from 'react';
import {Pressable, Text, View} from "react-native";
import styles from "./styles";

const GuestsScreen = () => {
    return (
        <View>
            <View style={styles.row}>
                <View>
                    <Text style={styles.adults}>Adults</Text>
                    <Text style={styles.agesAdults}>Ages 13 or above</Text>
                </View>

                <View>

                    <Pressable onPress={() => console.log("- is clicked")} style={styles.button}>
                        <Text>-</Text>
                    </Pressable>

                    <Text>0</Text>


                    <Pressable onPress={() => console.log("+ is clicked")} style={styles.button}>
                        <Text>+</Text>
                    </Pressable>

                </View>
            </View>
        </View>
    );
};

export default GuestsScreen;
