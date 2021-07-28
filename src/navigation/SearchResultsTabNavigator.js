import React, {useEffect, useState} from 'react';
import {View} from "react-native";
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";
import SearchResults from "../screens/SearchResults";
import SearchResultsMap from "../screens/SearchResultsMap";
import {useRoute} from "@react-navigation/native";
import {API, graphqlOperation} from "aws-amplify";
import {listPosts} from "../graphql/queries";

const Tab = createMaterialTopTabNavigator();

const SearchResultsTabNavigator = (props) => {


    const route = useRoute();
    const {guests} = route.params;
    // const {viewport} = route.params;

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
                                between: [
                                    27.99643616103738,
                                    28.617893425551618
                                ],
                            },
                            longitude: {
                                between: [
                                    -16.945665756405603,
                                    -16.134050770346267
                                ],
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
        <Tab.Navigator tabBarOptions={{
            activeTintColor: '#f15454',
            indicatorStyle: {
                backgroundColor: "#f15454",
            }
        }}>

            <Tab.Screen name={"Listings"} >
                {() => (
                    <SearchResults posts={posts} />
                )}
            </Tab.Screen>

            <Tab.Screen name={"map"} >
                {() => (
                    <SearchResultsMap posts={posts}/>
                )}
            </Tab.Screen>

        </Tab.Navigator>
    );
};

export default SearchResultsTabNavigator;
