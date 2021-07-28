import React, {useEffect, useState} from 'react';
import {Text, View, FlatList} from "react-native";
import feed from "../../../assets/data/feed";
import Post from "../../components/Post";
import {API, graphqlOperation} from "aws-amplify";
import {listPosts} from "../../graphql/queries";
import {useRoute} from "@react-navigation/native";

const SearchResults = (props) => {

    const {posts} = props;
    // const {viewport} = props;

    return (
        <View>
            <FlatList showsVerticalScrollIndicator={false} data={posts} renderItem={({item}) => <Post post={item} /> } />
        </View>
    );
};

export default SearchResults;
