import React, {useEffect, useState} from 'react';
import {Text, View, FlatList} from "react-native";
import feed from "../../../assets/data/feed";
import Post from "../../components/Post";
import {API, graphqlOperation} from "aws-amplify";
import {listPosts} from "../../graphql/queries";
import {useRoute} from "@react-navigation/native";

const SearchResults = (props) => {

    const {guests} = props;
    // const {viewport} = props;


    const [posts, setPosts] = useState([]);
    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const postsResult = await API.graphql(graphqlOperation(listPosts, {
                    filter: {
                        and: {
                            maxGuests: {
                                ge: guests,
                            },
                            latitude: {
                                between: [27.99643616103738, 28.617893425551618],
                            },
                            longitude: {
                                between: [-16.945665756405603, -16.134050770346267],
                            }
                        }
                    }
                }));
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
