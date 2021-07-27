import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Home from "./src/screens/Home";
import Post from "./src/components/Post";
import feed from "./assets/data/feed";

const post1 = feed[0];

export default function App() {
  return (
    <SafeAreaView>
      <StatusBar style="auto" />
        {/*<Home />*/}
        <Post post={post1} />
    </SafeAreaView>
  );
}

