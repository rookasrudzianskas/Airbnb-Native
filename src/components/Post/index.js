import React from 'react';
import {Image, Text, View, Pressable} from "react-native";
import styles from "./styles";
import {useNavigation} from "@react-navigation/native";

const Post = (props) => {

    const days = 7;

    const post = props.post;
        const navigation = useNavigation();

    const goToPost = () => {

        navigation.navigate("PostPage", {
            postId: post.id,
        })
    }

    return (
        <Pressable onPress={goToPost} style={styles.container}>
            <Image style={styles.image} source={{ uri: post.image}} />

            <Text style={styles.bedrooms}>{post.bed} bed {post.bedroom} bedroom</Text>

            <Text style={styles.description} numberOfLines={2}>{post.type}. {post.title}</Text>

            <Text style={styles.prices}>
                <Text style={styles.oldPrice}>${post.oldPrice}{" "}</Text>
                <Text style={styles.price}>{" "}${post.newPrice} </Text>
                / night
            </Text>

            <Text style={styles.totalPrice}>${post.newPrice * days} total</Text>
        </Pressable>
    );
};

export default Post;
