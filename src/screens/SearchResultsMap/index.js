import React, {useState} from 'react';
import {View} from "react-native";
import { StyleSheet, Text, Dimensions } from 'react-native';
import MapView, {Callout, Marker} from 'react-native-maps';
import styles from "./styles";
import CustomMarker from "../../components/CustomMarker";
import feed from "../../../assets/data/feed";
import PostCarouselItem from "../../components/PostCarouselItem";


const SearchResultsMap = () => {

    const [selectedPlaceId, setSelectedPlaceId] = useState(null);

    return (
            <View style={styles.container}>
                <MapView style={styles.map} initialRegion={{
                    latitude: 28.3279822,
                    // latitude: 37.78825,
                    longitude: -16.5124847,
                    // longitude: -122.4324,
                    latitudeDelta: 0.0,
                    // latitudeDelta: 0.0922,
                    longitudeDelta: 0.0,
                    // longitudeDelta: 0.0421,
                }} >

                    {feed.map(place => (
                        <CustomMarker isSelected={place.id === selectedPlaceId} onPress={() => setSelectedPlaceId(place.id)} coordinate={place.coordinate} price={place.newPrice} />)
                        )
                    }


                </MapView>

                <View style={{position: "absolute", bottom: 30}}>
                    <PostCarouselItem post={feed[0]} />
                </View>

            </View>
    );
};

export default SearchResultsMap;

// map stuff is working
