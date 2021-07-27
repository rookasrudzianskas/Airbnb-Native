import React, {useState} from 'react';
import {Text, View, TextInput, FlatList, Pressable} from "react-native";
import styles from "./styles";
import searchResults from "../../../assets/data/search";
import {Entypo} from "@expo/vector-icons";
import {useNavigation} from "@react-navigation/native";

const DestinationSearchScreen = (props) => {

    const [inputText, setInputText] = useState("");
    const navigation = useNavigation();


    return (
        <View style={styles.container}>
            <TextInput placeholder="Where are you Going? " value={inputText} onChangeText={(text) => setInputText(text)} style={styles.textInput} />
            <FlatList data={searchResults} renderItem={({item}) => (
                <Pressable style={styles.row} onPress={() => navigation.navigate("Guests")}>
                    <View style={styles.iconContainer}>
                        <Entypo name="location-pin" size={30} color={"#050505"} />
                    </View>
                    <Text style={styles.locationText}>{item.description}</Text>
                </Pressable>
                )}
              />
        </View>
    );
}

export default DestinationSearchScreen;
