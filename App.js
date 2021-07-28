import * as React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DestinationSearchScreen from "./src/screens/DestinationSearch";
import GuestsScreen from "./src/screens/Guests";
import Router from "./src/navigation/router";
import Amplify from 'aws-amplify';
import config from './src/aws-exports';
import { withAuthenticator } from 'aws-amplify-react-native'
Amplify.configure(config)


const Stack = createStackNavigator();

function App() {
    return (

        <NavigationContainer>
                <Router />
        </NavigationContainer>
    );
}

export default withAuthenticator(App);

// the navigation works perfectly
// app backend in the process

