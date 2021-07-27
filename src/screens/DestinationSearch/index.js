import React, {useState} from 'react';
import {Text, View, TextInput} from "react-native";
import styles from "./styles";

const DestinationSearchScreen = (props) => {

    const [inputText, setInputText] = useState("");
    console.log(inputText)

    return (
        <View>
            <TextInput placeholder="Where are you Going? " value={inputText} onChangeText={(text) => setInputText(text)} style={styles.textInput} />

        </View>
    );
};

export default DestinationSearchScreen;
