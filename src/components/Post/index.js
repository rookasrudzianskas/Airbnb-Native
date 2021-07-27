import React from 'react';
import {Image, Text, View} from "react-native";
import styles from "./styles";

const Post = (props) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg'}} />

            <Text style={styles.bedrooms}>1 bed 1 bedroom</Text>

            <Text style={styles.description} numberOfLines={2}>Bright room in the heart of the city. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium assumenda deleniti deserunt eaque eveniet id, in.</Text>

            <Text style={styles.prices}>
                <Text style={styles.oldPrice}>$36{" "}</Text>
                <Text style={styles.price}>{" "}$30 </Text>
                / night
            </Text>

            <Text style={styles.totalPrice}>$260 total</Text>
        </View>
    );
};

export default Post;
