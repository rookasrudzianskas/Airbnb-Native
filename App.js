import * as React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DestinationSearchScreen from "./src/screens/DestinationSearch";
import GuestsScreen from "./src/screens/Guests";
import Router from "./src/navigation/router";


const Stack = createStackNavigator();

function App() {
    return (

        <NavigationContainer>
                <Router />
        </NavigationContainer>
    );
}

export default App;

// the navigation works perfectly

