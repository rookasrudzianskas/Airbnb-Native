import React from 'react';
import {View} from "react-native";
import { StyleSheet, Text, Dimensions } from 'react-native';
import MapView, {Marker} from 'react-native-maps';
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
                    />


                </MapView>
            </View>
        </View>
    );
};

export default SearchResultsMap;

// map stuff
