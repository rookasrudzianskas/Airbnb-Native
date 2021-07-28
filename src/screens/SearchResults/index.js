import React, {useEffect} from 'react';
import {Text, View, FlatList} from "react-native";
import feed from "../../../assets/data/feed";
import Post from "../../components/Post";

const SearchResults = () => {

    useEffect(() => {
        const fetchPosts = async () => {

        };
    }, []);

    return (
        <View>
            <FlatList showsVerticalScrollIndicator={false} data={feed} renderItem={({item}) => <Post post={item} /> } />
        </View>
    );
};

export default SearchResults;
