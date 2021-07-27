import React from 'react';
import {View} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import {Fontisto} from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const HomeTabNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name={"Explore"} component={Home} options={{tabBarIcon: ({color}) => (
                    <Fontisto name="search" size={25} color={color} />
                )
            }} />
        </Tab.Navigator>
    );
};

export default HomeTabNavigator;

// <FontAwesome name="heart-o" size={25} color={color} />
//
// <FontAwesome5 name="airbnb" size={25} color={color} />
//
// <Feather name="message-square" size={25} color={color} />
//
// <EvilIcons name="user" size={25} color={color} />

