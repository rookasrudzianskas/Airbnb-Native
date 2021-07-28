import React from 'react';
import {SafeAreaView, Text, View} from "react-native";
import Post from "../../components/Post";
import feed from "../../../assets/data/feed";
import styles from "./styles";

const PostScreen = (props) => {

    const post = feed[0];

    return (
        <SafeAreaView style={{backgroundColor: "white", height: "100%"}}>
            <View style={styles.container}>
                <Post post={post} />
            </View>
        </SafeAreaView>
    );
};

export default PostScreen;
