import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        height: 120,
        padding: 5,
        // marginLeft: -60,
        marginHorizontal: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        // done

        elevation: 6,

    },
    innerContainer: {
        flexDirection: 'row',
        backgroundColor: "white",
        borderRadius: 10,
        overflow: 'hidden',

    },
    image: {
        height: '100%',
        aspectRatio: 1,
        resizeMode: "cover",
    },
    bedrooms: {
        marginVertical: 10,
        fontSize: 14,
        color: "#5b5b5b",
    },
    description: {
        fontSize: 15,
    },
    prices: {
        fontSize: 15,
        marginVertical: 10,
    },
    oldPrice: {
        color: "#5b5b5b",
        textDecorationLine: "line-through",
    },
    price: {
        fontWeight: "bold",
    },
    totalPrice: {
        color: "#5b5b5b",
        textDecorationLine: "underline",
    },


});

export default styles;
