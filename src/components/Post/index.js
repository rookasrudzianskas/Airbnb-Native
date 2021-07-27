import React from 'react';
import {Image, View} from "react-native";
import styles from "./styles";

const Post = (props) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg'}} />
        </View>
    );
};

export default Post;
