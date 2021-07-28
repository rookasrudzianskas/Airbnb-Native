import React from 'react';
import {Image, Text, View} from "react-native";
import styles from "./styles";

const PostCarouselItem = (props) => {

    const post = props.post;

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: post.image}} />

            <Text style={styles.bedrooms}>{post.bed} bed {post.bedroom} bedroom</Text>

            <Text style={styles.description} numberOfLines={2}>{post.type}. {post.title}</Text>

            <Text style={styles.prices}>
                <Text style={styles.oldPrice}>${post.oldPrice}{" "}</Text>
                <Text style={styles.price}>{" "}${post.newPrice} </Text>
                / night
            </Text>

            <Text style={styles.totalPrice}>${post.totalPrice} total</Text>
        </View>
    );
};

export default PostCarouselItem;
