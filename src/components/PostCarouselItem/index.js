import React from 'react';
import {Image, Pressable, Text, useWindowDimensions, View} from "react-native";
import styles from "./styles";
import {useNavigation} from "@react-navigation/native";

const PostCarouselItem = (props) => {

    const post = props.post;
    const width = useWindowDimensions().width;

    const navigation = useNavigation();

    const goToPostPage = () => {
        navigation.navigate("PostPage", {postId: post.id});
    }


    return (
        <Pressable onPress={goToPostPage} style={[styles.container, {width: width - 60}]}>
            <View style={styles.innerContainer}>
                <Image style={styles.image} source={{ uri: post.image}} />

                <View style={{marginHorizontal: 10, flex: 1,}}>
                    <Text style={styles.bedrooms}>{post.bed} bed {post.bedroom} bedroom</Text>

                    <Text style={styles.description} numberOfLines={2}>{post.type}. {post.title}</Text>

                    <Text style={styles.prices}>
                        <Text style={styles.price}>${post.newPrice} </Text>
                        / night
                    </Text>


                </View>
            </View>
        </Pressable>
    );
};

export default PostCarouselItem;
