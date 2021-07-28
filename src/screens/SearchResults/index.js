import React, {useEffect, useState} from 'react';
import {Text, View, FlatList} from "react-native";
import feed from "../../../assets/data/feed";
import Post from "../../components/Post";
import {API, graphqlOperation} from "aws-amplify";
import {listPosts} from "../../graphql/queries";

const SearchResults = () => {

    const [posts, setPosts] = useState([]);
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

    return (
        <View>
            <FlatList showsVerticalScrollIndicator={false} data={posts} renderItem={({item}) => <Post post={item} /> } />
        </View>
    );
};

export default SearchResults;
