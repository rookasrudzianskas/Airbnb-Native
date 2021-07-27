import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Home from "./src/screens/Home";
import Post from "./src/components/Post";
import feed from "./assets/data/feed";
import SearchResults from "./src/screens/SearchResults";
import DestinationSearchScreen from "./src/screens/DestinationSearch";
import GuestsScreen from "./src/screens/Guests";

const post1 = feed[0];
const post2 = feed[1];

export default function App() {
  return (
    <SafeAreaView>
      <StatusBar style="auto" />
        {/*<Home />*/}
        {/*<Post post={post2} />*/}
        {/*<SearchResults />*/}
        {/*<DestinationSearchScreen />*/}
        <GuestsScreen />
    </SafeAreaView>
  );
}

