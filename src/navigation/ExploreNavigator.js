import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from "../screens/Home";
import DestinationSearchScreen from "../screens/DestinationSearch";
import GuestsScreen from "../screens/Guests";
import HomeTabNavigator from "./HomeTabNavigator";
import SearchResults from "../screens/SearchResults";

const Stack = createStackNavigator();


const Router = (props) => {
    return (
        <Stack.Navigator>

            <Stack.Screen name="Welcome" component={Home} options={{
                headerShown: false,
            }} />

            <Stack.Screen name="Search Results" component={SearchResults} options={{
                title: "Search your destination"
            }} />


        </Stack.Navigator>
    );
};

export default Router;
