import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from "../screens/Home";
import DestinationSearchScreen from "../screens/DestinationSearch";
import GuestsScreen from "../screens/Guests";

const Stack = createStackNavigator();


const Router = (props) => {
    return (
            <Stack.Navigator>
                <Stack.Screen name="Destination Search" component={DestinationSearchScreen} options={{
                    title: "Search your destination"
                }} />

                <Stack.Screen name="Guests" component={GuestsScreen} options={{
                    title: "How many people?"
                }} />


                {/*<Stack.Screen name="Home" component={Home} />*/}

            </Stack.Navigator>
    );
};

export default Router;
