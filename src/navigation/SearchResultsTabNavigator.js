import React from 'react';
import {View} from "react-native";
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";
import SearchResults from "../screens/SearchResults";
import SearchResultsMap from "../screens/SearchResultsMap";
import {useRoute} from "@react-navigation/native";

const Tab = createMaterialTopTabNavigator();

const SearchResultsTabNavigator = (props) => {


    const route = useRoute();
    const {guests} = route.params;
    // const {viewport} = route.params;

    return (
        <Tab.Navigator tabBarOptions={{
            activeTintColor: '#f15454',
            indicatorStyle: {
                backgroundColor: "#f15454",
            }
        }}>

            <Tab.Screen name={"Listings"} >
                {() => (
                    <SearchResults guests={guests} />
                )}
            </Tab.Screen>

            <Tab.Screen name={"map"} >
                {() => (
                    <SearchResultsMap guests={guests} />
                )}
            </Tab.Screen>

        </Tab.Navigator>
    );
};

export default SearchResultsTabNavigator;
