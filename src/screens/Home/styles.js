import {Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: 500,
        resizeMode: "cover",
        justifyContent: "center",
    },
    title: {
        fontSize: 80,
        fontWeight: "bold",
        color: "white",
        width: '60%',
        marginLeft: 25,
    },
    button: {
        backgroundColor: '#fff',
        width: "50%",
        height: 40,
        marginTop: 25,
        borderRadius: 10,
        marginLeft: 25,
        justifyContent: "center",
        alignItems: "center",

    },
    buttonText: {
        fontSize: 16,
        fontWeight: "bold",
    },

    searchButton: {
        backgroundColor: '#fff',
        height: 60,
        width: Dimensions.get('window').width - 20,
        marginHorizontal: 10,
        borderRadius: 30,
        justifyContent: "center",
        flexDirection: "row",
        alignItems: "center",
        position: "absolute",
        top: 50,
        zIndex: 100,
    },
    searchButtonText: {
        fontSize: 16,
        fontWeight: "bold",
    },
});

export default styles;
