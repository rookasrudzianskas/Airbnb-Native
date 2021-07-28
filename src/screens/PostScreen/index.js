import React from 'react';
import {SafeAreaView, Text, View} from "react-native";
import feed from "../../../assets/data/feed";
import styles from "./styles";
import DetailedPost from "../../components/DetailedPost";

const PostScreen = (props) => {

    const post = feed[0];

    return (
        <SafeAreaView style={{backgroundColor: "white", height: "100%"}}>
            <View style={styles.container}>
                <DetailedPost post={post} />
            </View>
        </SafeAreaView>
    );
};

export default PostScreen;
