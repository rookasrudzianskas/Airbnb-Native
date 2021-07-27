import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from "../screens/Home";
import DestinationSearchScreen from "../screens/DestinationSearch";

const Stack = createStackNavigator();


const Router = (props) => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                {/*<Stack.Screen name="Destination Search" component={Home} />*/}
                <Stack.Screen name="Home" component={Home} />

            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Router;
