import React, {useEffect, useRef, useState} from 'react';
import {FlatList, useWindowDimensions, View} from "react-native";
import { StyleSheet, Text, Dimensions } from 'react-native';
import MapView, {Callout, Marker} from 'react-native-maps';
import styles from "./styles";
import CustomMarker from "../../components/CustomMarker";
import feed from "../../../assets/data/feed";
import PostCarouselItem from "../../components/PostCarouselItem";


const SearchResultsMap = () => {

    const [selectedPlaceId, setSelectedPlaceId] = useState(null);
    const width = useWindowDimensions().width;
    const flatList = useRef();
    const viewConfig = useRef({itemVisiblePercentThreshold: 70});

    const onViewChanged = useRef(({viewableItems}) => {
        console.log(viewableItems);
    })

    useEffect(() => {
        // only then selected Place id is changed, this fires on
        if(!selectedPlaceId ||  !flatList) {
            return;
        }

        const index = feed.findIndex(place => place.id === selectedPlaceId);
        flatList.current.scrollToIndex({index});
    }, [selectedPlaceId]);

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

                <View style={{position: "absolute", bottom: 10}}>
                    {/*<PostCarouselItem post={feed[0]} />*/}
                    <FlatList viewabilityConfig={viewConfig.current} onViewableItemsChanged={onViewChanged.current} ref={flatList} snapToInterval={width - 60} snapToAlignment={'center'} decelerationRate={"fast"} data={feed} showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false} horizontal renderItem={({item}) => <PostCarouselItem post={item} />} />
                </View>

            </View>
    );
};

export default SearchResultsMap;

// map stuff is working
