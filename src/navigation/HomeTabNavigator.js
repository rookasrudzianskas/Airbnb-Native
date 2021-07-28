import React from 'react';
import {View} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import {EvilIcons, Feather, FontAwesome, FontAwesome5, Fontisto} from "@expo/vector-icons";
import ExploreNavigator from "./ExploreNavigator";
import SearchResultsMap from "../screens/SearchResultsMap";
import PostScreen from "../screens/PostScreen";
import Profile from "../screens/Profile";

const Tab = createBottomTabNavigator();

const HomeTabNavigator = () => {
    return (
        <Tab.Navigator tabBarOptions={{activeTintColor: "#f15454"}}>
            {/*change*/}
            <Tab.Screen name={"Explore"} component={ExploreNavigator} options={{tabBarIcon: ({color}) => (
                    <Fontisto name="search" size={25} color={color} />
                )
            }} />

            <Tab.Screen name={"Saved"} component={Home} options={{tabBarIcon: ({color}) => (
                    <FontAwesome name="heart-o" size={25} color={color} />

                )
            }} />

            <Tab.Screen name={"Trips"} component={Home} options={{tabBarIcon: ({color}) => (
                    <FontAwesome5 name="airbnb" size={25} color={color} />
                )
            }} />

            <Tab.Screen name={"Inbox"} component={Home} options={{tabBarIcon: ({color}) => (
                    <Feather name="message-square" size={25} color={color} />
                )
            }} />

            <Tab.Screen name={"Profile"} component={Profile} options={{tabBarIcon: ({color}) => (
                    <EvilIcons name="user" size={25} color={color} />
                )
            }} />

        </Tab.Navigator>
    );
};

export default HomeTabNavigator;


