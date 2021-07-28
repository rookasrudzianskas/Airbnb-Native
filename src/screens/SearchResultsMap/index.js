import React, {useEffect, useRef, useState} from 'react';
import {FlatList, useWindowDimensions, View} from "react-native";
import { StyleSheet, Text, Dimensions } from 'react-native';
import MapView, {Callout, Marker} from 'react-native-maps';
import styles from "./styles";
import CustomMarker from "../../components/CustomMarker";
import PostCarouselItem from "../../components/PostCarouselItem";
import {API, graphqlOperation} from "aws-amplify";
import {listPosts} from "../../graphql/queries";


const SearchResultsMap = () => {

    const [selectedPlaceId, setSelectedPlaceId] = useState(null);
    const width = useWindowDimensions().width;
    const flatList = useRef();
    const map = useRef();
    const viewConfig = useRef({itemVisiblePercentThreshold: 70});
    const [posts, setPosts] = useState([]);

    const onViewChanged = useRef(({viewableItems}) => {
        if(viewableItems.length > 0) {
            const selectedPlace = viewableItems[0].item;
            setSelectedPlaceId(selectedPlace.id);
        }
    })


    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const postsResult = await API.graphql(graphqlOperation(listPosts));
                setPosts(postsResult.data.listPosts.items);

            } catch (e) {
                console.log(e);
            }
        };

        fetchPosts();

    }, []);


    useEffect(() => {
        // only then selected Place id is changed, this fires on
        if(!selectedPlaceId ||  !flatList) {
            return;
        }

        const index = posts.findIndex(place => place.id === selectedPlaceId);
        flatList.current.scrollToIndex({index});

        const selectedPlace = posts[index];
        const region = {
            latitude: selectedPlace.latitude,
            longitude: selectedPlace.longitude,
            latitudeDelta: 0.8,
            longitudeDelta: 0.8,
        }

        map.current.animateToRegion(region);

    }, [selectedPlaceId]);

    return (
            <View style={styles.container}>
                <MapView style={styles.map} ref={map} initialRegion={{
                    latitude: 28.3279822,
                    // latitude: 37.78825,
                    longitude: -16.5124847,
                    // longitude: -122.4324,
                    latitudeDelta: 0.0,
                    // latitudeDelta: 0.0922,
                    longitudeDelta: 0.0,
                    // longitudeDelta: 0.0421,
                }} >

                    {posts.map(place => (
                        <CustomMarker isSelected={place.id === selectedPlaceId} onPress={() => setSelectedPlaceId(place.id)} coordinate={{latitude: place.latitude, longitude: place.longitude}} price={place.newPrice} />)
                        )
                    }


                </MapView>

                <View style={{position: "absolute", bottom: 10}}>
                    {/*<PostCarouselItem post={posts[0]} />*/}
                    <FlatList viewabilityConfig={viewConfig.current} onViewableItemsChanged={onViewChanged.current} ref={flatList} snapToInterval={width - 60} snapToAlignment={'center'} decelerationRate={"fast"} data={posts} showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false} horizontal renderItem={({item}) => <PostCarouselItem post={item} />} />
                </View>

            </View>
    );
};

export default SearchResultsMap;

// map stuff is working from api
