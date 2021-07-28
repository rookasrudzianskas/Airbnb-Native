import React from 'react';
import {View} from "react-native";
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";
import SearchResults from "../screens/SearchResults";
import SearchResultsMap from "../screens/SearchResultsMap";
import {useRoute} from "@react-navigation/native";

const Tab = createMaterialTopTabNavigator();

const SearchResultsTabNavigator = (props) => {


    const route = useRoute();

    return (
        <Tab.Navigator tabBarOptions={{
            activeTintColor: '#f15454',
            indicatorStyle: {
                backgroundColor: "#f15454",
            }
        }}>
            <Tab.Screen name={"Listings"} component={SearchResults} />
            <Tab.Screen name={"map"} component={SearchResultsMap} />
        </Tab.Navigator>
    );
};

export default SearchResultsTabNavigator;
