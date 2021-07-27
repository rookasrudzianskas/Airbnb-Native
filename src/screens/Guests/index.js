import React, {useState} from 'react';
import {Pressable, Text, View} from "react-native";
import styles from "./styles";

const GuestsScreen = () => {

    const [adults, setAdults] = useState(0);

    return (
        <View>
            <View style={styles.row}>
                <View>
                    <Text style={styles.adults}>Adults</Text>
                    <Text style={styles.agesAdults}>Ages 13 or above</Text>
                </View>

                <View style={styles.buttons}>

                    <Pressable onPress={() => setAdults(Math.max(0, adults - 1))} style={styles.button}>
                        <Text style={styles.minusAndPlus}>-</Text>
                    </Pressable>

                    <Text style={styles.count}>{adults}</Text>


                    <Pressable onPress={() => setAdults(Math.max(1, adults + 1))} style={styles.button}>
                        <Text style={styles.minusAndPlus}>+</Text>
                    </Pressable>

                </View>
            </View>
        </View>
    );
};

export default GuestsScreen;
