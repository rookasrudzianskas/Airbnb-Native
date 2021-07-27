import React from 'react';
import {View} from "react-native";
import { StyleSheet, Text, Dimensions } from 'react-native';
import MapView, {Callout, Marker} from 'react-native-maps';
import styles from "./styles";

const SearchResultsMap = () => {
    return (
        <View>
            <View style={styles.container}>
                <MapView style={styles.map} initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }} >

                    <Marker
                        coordinate={{latitude: 37.78825, longitude: -122.4324,}}
                     >

                        <View style={{backgroundColor: "white", padding: 5, borderRadius: 20, borderColor: "grey", borderWidth: 1,}}>
                            <Text style={{fontWeight: "bold", fontSize: 10}}>$300</Text>
                        </View>

                    </Marker>


                </MapView>
            </View>
        </View>
    );
};

export default SearchResultsMap;

// map stuff
