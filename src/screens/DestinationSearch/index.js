import React from 'react';
import {Text, View, TextInput} from "react-native";
import styles from "./styles";

const DestinationSearchScreen = () => {
    return (
        <View>
            <TextInput placeholder="Where are you Going? " style={styles.textInput} />

        </View>
    );
};

export default DestinationSearchScreen;
