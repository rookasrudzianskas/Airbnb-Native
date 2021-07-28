import React from 'react';
import {SafeAreaView, Text, View} from "react-native";
import feed from "../../../assets/data/feed";
import styles from "./styles";
import DetailedPost from "../../components/DetailedPost";
import {useRoute} from "@react-navigation/native";

const PostScreen = (props) => {

    const route = useRoute();

    const post = feed.find(place => place.id === route.params.postId);

    return (
        <SafeAreaView style={{backgroundColor: "white", height: "100%"}}>
            <View style={styles.container}>
                <DetailedPost post={post} />
            </View>
        </SafeAreaView>
    );
};

export default PostScreen;
