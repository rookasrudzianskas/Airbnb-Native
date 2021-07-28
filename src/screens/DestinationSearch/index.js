import React, {useState} from 'react';
import {Text, View, TextInput, FlatList, Pressable} from "react-native";
import styles from "./styles";
import searchResults from "../../../assets/data/search";
import {Entypo} from "@expo/vector-icons";
import {useNavigation} from "@react-navigation/native";
import {GooglePlacesAutocomplete} from "react-native-google-places-autocomplete";
import SuggestionRow from "./SuggestionRow";

const DestinationSearchScreen = (props) => {

    const [inputText, setInputText] = useState("");
    const navigation = useNavigation();


    return (
        <View style={styles.container}>

            {/*<View style={{ height: 500}}>*/}
            {/*<GooglePlacesAutocomplete*/}
            {/*    placeholder='Where are you Going?'*/}
            {/*    onPress={(data, details = null) => {*/}
            {/*        // 'details' is provided when fetchDetails = true*/}
            {/*        console.log(data, details);*/}
            {/*navigation.navigate("Guests", {viewport: details.geometry.viewport});*/}
            {/*    }}*/}
            {/*    styles={{*/}
            {/*        textInput: {*/}
            {/*            fontSize: 20,*/}
            {/*            color: "black",*/}
            {/*            marginBottom: 20,*/}
            {/*        },*/}
            {/*    }}*/}
            {/*    query={{*/}
            {/*        key: 'AIzaSyDYnkl8rGqpQ9-6XjrH3ssqNSDiJHpULGw',*/}
            {/*        language: 'en',*/}
            {/*        types: '(cities)',*/}
            {/*    }}*/}
            {/*    suppressDefaultStyles*/}
            {/*    renderRow={(item) => <SuggestionRow item={item} />}*/}
            {/*/>*/}
            {/*</View>*/}

            <TextInput placeholder="Where are you Going? " value={inputText} onChangeText={(text) => setInputText(text)} style={styles.textInput} />
            <FlatList data={searchResults} renderItem={({item}) => (
                <Pressable onPress={() => navigation.navigate("Guests")} style={styles.row}>
                    <View style={styles.iconContainer}>
                        <Entypo name={"location-pin"} size={30} />
                    </View>
                    <Text style={styles.locationText}>{item.description}</Text>
                </Pressable>
            )}
              />
        </View>
    );
}

export default DestinationSearchScreen;
