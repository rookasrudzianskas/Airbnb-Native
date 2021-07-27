import React from 'react';
import {View} from "react-native";
import { StyleSheet, Text, Dimensions } from 'react-native';
import MapView from 'react-native-maps';
import styles from "./styles";

const SearchResultsMap = () => {
    return (
        <View>
            <View style={styles.container}>
                <MapView style={styles.map} />
            </View>
        </View>
    );
};

export default SearchResultsMap;
