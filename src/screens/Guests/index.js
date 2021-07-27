import React, {useState} from 'react';
import {Pressable, Text, View} from "react-native";
import styles from "./styles";

const GuestsScreen = () => {

    const [adults, setAdults] = useState(0);
    const [children, setChildren] = useState(0);
    const [infants, setInfants] = useState(0);

    return (
        <View style={styles.overallContainer}>
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

                <View style={styles.row}>
                    <View>
                        <Text style={styles.adults}>Children</Text>
                        <Text style={styles.agesAdults}>Ages 2-12</Text>
                    </View>

                    <View style={styles.buttons}>

                        <Pressable onPress={() => setChildren(Math.max(0, children - 1))} style={styles.button}>
                            <Text style={styles.minusAndPlus}>-</Text>
                        </Pressable>

                        <Text style={styles.count}>{children}</Text>


                        <Pressable onPress={() => setChildren(Math.max(1, children + 1))} style={styles.button}>
                            <Text style={styles.minusAndPlus}>+</Text>
                        </Pressable>

                    </View>
                </View>

                <View style={styles.row}>
                    <View>
                        <Text style={styles.adults}>Infants</Text>
                        <Text style={styles.agesAdults}>Under 2</Text>
                    </View>

                    <View style={styles.buttons}>

                        <Pressable onPress={() => setInfants(Math.max(0, infants - 1))} style={styles.button}>
                            <Text style={styles.minusAndPlus}>-</Text>
                        </Pressable>

                        <Text style={styles.count}>{infants}</Text>


                        <Pressable onPress={() => setInfants(Math.max(1, infants + 1))} style={styles.button}>
                            <Text style={styles.minusAndPlus}>+</Text>
                        </Pressable>

                    </View>
                </View>
            </View>

            <View>
                <Pressable style={styles.enterNewScreen}>
                    <Text style={styles.searchButtons}>Search!</Text>
                </Pressable>
            </View>


        </View>
    );
};

export default GuestsScreen;
