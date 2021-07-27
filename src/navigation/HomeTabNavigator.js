import React from 'react';
import {View} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";

const Tab = createBottomTabNavigator();

const HomeTabNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name={"Explore"} component={Home} />
        </Tab.Navigator>
    );
};

export default HomeTabNavigator;
