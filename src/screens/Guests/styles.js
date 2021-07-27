import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    overallContainer: {
        justifyContent: 'space-between',
        height: "100%",
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 20,
        marginHorizontal: 20,
        borderBottomWidth: 1,
        borderColor: "lightgrey",
    },
    adults: {
        fontWeight: "bold",
        fontSize: 22,

    },
    agesAdults: {
        color: "#8d8d8d",
        fontSize: 17,
    },
    buttons: {
        flexDirection: "row",
        fontSize: 20,
        alignItems: "center",
    },
    button: {
        borderWidth: 1,
        width: 40,
        height: 40,
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
        borderColor: "#676767",
    },
    minusAndPlus: {
        fontSize: 25,
        fontWeight: "400",
        color: "#474747",
    },
    count: {
        fontSize: 20,
        marginHorizontal: 20,

    },
    searchButtons: {

    },
    enterNewScreen: {

    },


});

export default styles;
