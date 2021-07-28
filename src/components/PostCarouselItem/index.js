import React from 'react';
import {Image, Text, useWindowDimensions, View} from "react-native";
import styles from "./styles";

const PostCarouselItem = (props) => {

    const post = props.post;
    const width = useWindowDimensions().width;

    return (
        <View style={[styles.container, {width: width - 60}]}>
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
        </View>
    );
};

export default PostCarouselItem;
