import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from "../screens/Home";
import DestinationSearchScreen from "../screens/DestinationSearch";

const Stack = createStackNavigator();

function Router(props) {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Destination Search" component={DestinationSearchScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Router;
