import React, {useState} from 'react';
import {Text, View, TextInput, FlatList} from "react-native";
import styles from "./styles";
import searchResults from "../../../assets/data/search";
import {Entypo} from "@expo/vector-icons";

const DestinationSearchScreen = (props) => {

    const [inputText, setInputText] = useState("");

    return (
        <View style={styles.container}>
            <TextInput placeholder="Where are you Going? " value={inputText} onChangeText={(text) => setInputText(text)} style={styles.textInput} />
            <FlatList data={searchResults} renderItem={({item}) => (
                <View style={styles.row}>
                    <View style={styles.iconContainer}>
                        <Entypo name="location-pin" size={30} color={"#050505"} />
                    </View>
                    <Text style={styles.locationText}>{item.description}</Text>
                </View>
                )}
              />
        </View>
    );
};

export default DestinationSearchScreen;
